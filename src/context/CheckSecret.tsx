import { useSecret } from './SecretContext'; 

const CheckSecret = () => {
    const { secret, setSecret } = useSecret();

    // Fonction pour réinitialiser le secret
    const resetSecret = async () => {
        await setSecret(null); // Réinitialise le secret à null
    };

    return (
        <div>
            <h2>Check Your Secret</h2>
            {secret ? (
                <div>
                    <p>Secret is currently set to: <strong>{secret}</strong></p>
                    <button onClick={resetSecret}>Reset Secret</button>
                </div>
            ) : (
                <p>No secret is currently set.</p>
            )}
        </div>
    );
};

export default CheckSecret;
