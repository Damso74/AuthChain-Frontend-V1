//src/wallet/connect.tsx
import { Box, Button } from '@mui/material';
import { useAccount } from 'wagmi';

interface ConnectProps {
  onOpen: () => void;  // Explicit type definition for onOpen
}

export default function Connect({ onOpen }: ConnectProps) {
  const { isConnected } = useAccount();

  return (
    <Box sx={{ textAlign: 'center' }}>
      {!isConnected && (
        <>
          <Button onClick={onOpen} sx={{ mt: 1 }} variant="contained">
          Connect your Wallet
          </Button>
        </>
      )}
    </Box>
    
  );
}
