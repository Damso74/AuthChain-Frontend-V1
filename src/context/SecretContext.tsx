import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the context type
interface SecretContextType {
    secret: string | null;
    setSecret: (newSecret: string | null) => Promise<void>;
    isLoading: boolean;
    error: string | null;
}

// Create the context with a default null value
const SecretContext = createContext<SecretContextType | null>(null);

interface SecretProviderProps {
    children: ReactNode; // Accepts ReactNode to be used around any React components
}

// Create a Provider Component
export const SecretProvider: React.FC<SecretProviderProps> = ({ children }) => {
    const [secret, setSecretState] = useState<string | null>(localStorage.getItem('secret') || null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const updateSecret = async (newSecret: string | null): Promise<void> => {
        setIsLoading(true);
        try {
            // Simulate an asynchronous operation, e.g., an API call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setSecretState(newSecret); // Update the secret state
            setError(null); // Reset any errors
            localStorage.setItem('secret', newSecret ?? ""); // Update localStorage, use empty string if null
        } catch (err) {
            setError('Failed to update secret'); // Set error message
            localStorage.removeItem('secret'); // Clear the stored secret if there's an error
        }
        setIsLoading(false); // Set loading to false once operation is complete
    };

    // Prepare the context value
    const value = {
        secret,
        setSecret: updateSecret,
        isLoading,
        error,
    };

    return (
        <SecretContext.Provider value={value}>
            {children}
        </SecretContext.Provider>
    );
};

// Custom hook to use the secret context
export const useSecret = (): SecretContextType => {
    const context = useContext(SecretContext);
    if (!context) {
        throw new Error('useSecret must be used within a SecretProvider');
    }
    return context;
};

export default SecretProvider;
