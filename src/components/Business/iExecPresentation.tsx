import { useRef, useEffect } from 'react';
import lottie from 'lottie-web';
import styles from './iExecPresentation.module.css'; // Import the CSS module
import logo from '../../assets/images/Logo-Horizontal-Blackandyellow.svg'; // Import the logo


const iExecPresentation = () => {
    const dataProtectorRef = useRef<HTMLDivElement>(null);
    const web3MailRef = useRef<HTMLDivElement>(null);
    const oracleFactoryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const loadAnimation = (ref: React.RefObject<HTMLDivElement>, path: string) => {
            if (ref.current) {
                const animation = lottie.loadAnimation({
                    container: ref.current,
                    renderer: 'svg',
                    loop: false,
                    autoplay: true,
                    path: path
                });
                return animation;
            }
        };

        const dataProtectorAnim = loadAnimation(dataProtectorRef, 'src/animation/animation-dataprotector.json');
        const web3MailAnim = loadAnimation(web3MailRef, 'src/animation/animation-new-mail.json');
        const oracleFactoryAnim = loadAnimation(oracleFactoryRef, 'src/animation/animation-oracle.json');

        return () => {
            dataProtectorAnim?.destroy();
            web3MailAnim?.destroy();
            oracleFactoryAnim?.destroy();
        };
    }, []);

    return (
        <section className={styles.iExecPresentation}>
            <img src={logo} alt="iExec Logo" className={styles.logo} />
            <h2 className={styles.title}>iExec and AuthChain Integration</h2>
            <div className={styles.list}>
                <div className={styles.listItem}>
                    <div ref={dataProtectorRef} className={styles.animation}></div>
                    <p>
                        <strong>DataProtector:</strong> Utilized for encrypting sensitive user data and managing permissions
                        securely on the blockchain, ensuring that user identities remain confidential and protected.
                    </p>
                </div>
                <div className={styles.listItem}>
                    <div ref={web3MailRef} className={styles.animation}></div>
                    <p>
                        <strong>Web3Mail:</strong> Deployed to facilitate secure and private communication between users
                        without exposing personal email addresses, leveraging blockchain's transparency and security.
                    </p>
                </div>
                <div className={styles.listItem}>
                    <div ref={oracleFactoryRef} className={styles.animation}></div>
                    <p>
                        <strong>Oracle Factory:</strong> Integrated to bring real-world data into blockchain securely,
                        enhancing the responsiveness and versatility of AuthChain's authentication mechanisms.
                    </p>
                </div>
            </div>
            <p className={styles.description}>
                These integrations provide AuthChain with a robust infrastructure for implementing advanced security
                <br></br>
                measures that are compliant with global standards for data protection and privacy.
            </p>
        </section>
    );
};

export default iExecPresentation;
