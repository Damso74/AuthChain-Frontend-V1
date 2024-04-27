import React, { useState, useEffect, useCallback } from 'react';
import { Box, TextField, Typography, CircularProgress } from '@mui/material';
import { useSecret } from '../../context/SecretContext';

const DataInteractionPage: React.FC = () => {
    const [data, setData] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const { secret } = useSecret();

    const fetchProtectedData = useCallback(async () => {
        setLoading(true);
        if (!secret) {
            setError('No secret provided. Unable to fetch protected data.');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`/api/data/protected`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${secret}`
                },
                body: JSON.stringify({ operation: 'fetch', secretKey: secret })
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`HTTP error ${response.status}: ${errorText}`);
            }

            const responseData = await response.json();
            setData(responseData.encryptedData);
            setError('');
        } catch (err) {
            console.error('Failed to fetch protected data:', err);
            setError(err instanceof Error ? err.message : 'An unknown error occurred.');
        } finally {
            setLoading(false);
        }
    }, [secret]);

    useEffect(() => {
        fetchProtectedData();
    }, [fetchProtectedData]);

    return (
        <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h4">Manage Your Protected Data</Typography>
            {loading ? (
                <CircularProgress />
            ) : error ? (
                <Typography color="error">{error}</Typography>
            ) : (
                <TextField
                    label="Protected Data"
                    multiline
                    maxRows={4}
                    value={data}
                    disabled
                    fullWidth
                    margin="normal"
                />
            )}
        </Box>
    );
};

export default DataInteractionPage;
