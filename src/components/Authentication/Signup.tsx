import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Button, Typography, Tooltip, TextField } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import LockIcon from '@mui/icons-material/Lock';
import { useAccount, useDisconnect } from 'wagmi';
import { useWeb3Modal } from '@web3modal/react';
import Connect from '../../wallet/connect';
import { useSecret } from '../../context/SecretContext';  
import { useNavigate } from 'react-router-dom';
import { IExecDataProtector } from '@iexec/dataprotector';
import { IExecWeb3mail } from '@iexec/web3mail';
import AnimationBlockchain from '../../animation/AnimationBlockchain';
import AnimationEncryptedSuccess from '../../animation/AnimationEncryptedSuccess';
import AnimationEncrypted from '../../animation/AnimationEncrypted';
import AnimationNewMail from '../../animation/AnimationNewMail';
import AnimationSecured from '../../animation/AnimationSecured';
import AnimationError from '../../animation/AnimationError';
import Styles from './Signup.module.css'

const SignupForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [currentStage, setCurrentStage] = useState<number>(0);
    const { address, isConnected } = useAccount();
    const { disconnect } = useDisconnect();
    const { secret, setSecret } = useSecret();
    const navigate = useNavigate();

    // Initial check for existing secret to redirect on page load
    useEffect(() => {
        if (secret) {
            navigate('/dashboard');
        }
    }, []); // Empty dependency array to ensure it runs only on mount

    const dataProtector = new IExecDataProtector(window.ethereum);
    const web3mail = new IExecWeb3mail(window.ethereum);

    const formatAddress = (address: string | undefined): string => {
        return address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Not connected';
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email) {
            setError("Please provide your email.");
            setCurrentStage(1); // Error stage: No email provided
            return;
        }
        if (!isConnected || !address) {
            setError("Please connect your Ethereum wallet and ensure the address is available.");
            setCurrentStage(2); // Error stage: Wallet not connected
            return;
        }

        setError(null);
        setCurrentStage(3); // Start encryption process

        try {
            const protectionResult = await dataProtector.protectData({
                data: { email },
                name: `Protected email for user at address ${address}`
            });
            setCurrentStage(4); // Encryption successful
            setSecret(protectionResult.address);  // Store the protected secret in the context

            await dataProtector.grantAccess({
                protectedData: protectionResult.address,
                authorizedApp: 'web3mail.apps.iexec.eth',
                authorizedUser: address,
            });
            setCurrentStage(5); // Access granted

            const sendResult = await web3mail.sendEmail({
                protectedData: protectionResult.address,
                emailSubject: "Verify Your Email Address",
                emailContent: `<p>Please verify your email by clicking on this link: <a href="https://yourdomain.com/verify?data=${protectionResult.address}">Verify Email</a></p>`,
                contentType: "text/html",
                senderName: "AuthChain",
            });
            console.log("Email sent successfully. Task ID:", sendResult.taskId);
            setCurrentStage(6); // Email sent

            setTimeout(() => {
                navigate('/dashboard');  // Navigate to the dashboard after the mail animation
            }, 3000);  // Wait for 3 seconds to allow the email animation to complete
            
        } catch (err: any) {
            console.error("Error during registration:", err);
            setError(`Failed to register. ${err.message}`);
            setCurrentStage(7); // Failure stage
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value.trim());
    };

    const handleDisconnect = (): void => {
        disconnect();
        console.log("Disconnecting wallet.");
    };

    const handleOpen = () => {
        open();
      };

      const { open } = useWeb3Modal();


    const renderAnimation = (): JSX.Element => {
        switch (currentStage) {
            case 3:
                return <AnimationBlockchain />;
            case 4:
                return <AnimationEncryptedSuccess />;
            case 5:
                return <AnimationSecured />;
            case 6:
                return <AnimationNewMail />;
            case 7:
                return <AnimationError />;
            default:
                return <AnimationEncrypted />;
        }
    };

    const stageMessages = [
        "Create your account and secure your email.", // Stage 0
        "Please enter a valid email to proceed.", // Stage 1
        "Connect your Ethereum wallet to continue.", // Stage 2
        "Encrypting your email, please wait...", // Stage 3
        "Email encryption successful!", // Stage 4
        "Granting access to your encrypted email...", // Stage 5
        "Email has been sent, please verify!", // Stage 6
        "Registration failed, please try again." // Stage 7
    ];

 return (
        <div className={Styles.authformcontainer}>
            <h2>Sign Up</h2>
            {error && <div className={Styles.errormessage}>{error}</div>}
            <div>{stageMessages[currentStage]}</div>
            {renderAnimation()}
            {currentStage < 7 && (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email: <Tooltip title="Your email will be encrypted for security purposes."><InfoIcon style={{ fontSize: 'small' }} /></Tooltip></label>
                        <TextField
                            type="email"
                            value={email}
                            onChange={handleInputChange}
                            required
                            variant="outlined"
                            fullWidth
                        />
                    </div>
                    <div className={Styles.formgroup}>
                        {!isConnected ? (
                              <Connect onOpen={handleOpen} />
                            
                        ) : (
                            <div className={Styles.walletinfo}>
                                <Typography>{formatAddress(address)} <LockIcon style={{ color: 'green', fontSize: 'small' }} /></Typography>
                                <Button onClick={handleDisconnect} variant="contained" color="secondary">
                                    Disconnect
                                </Button>
                            </div>
                        )}
                    </div>
                    <Button type="submit" variant="contained" color="primary">
                        Sign Up
                    </Button>
                </form>
            )}
        </div>
    );
};

export default SignupForm;