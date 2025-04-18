import { Box, Typography } from '@mui/material';
import Lottie from 'react-lottie';
import EmptyLottie from '../../../utils/lotties/emptyState.json';

interface EmptyStateProps {
  message: string;
}
const EmptyState = ({ message }: EmptyStateProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: EmptyLottie,
  };

  return (
    <Box sx={styles.box}>
      <Lottie options={defaultOptions} />
      <Typography variant="body1" color="text.secondary">
        {message}
      </Typography>
    </Box>
  );
};

const styles = {
  box: {
    textAlign: 'center',
    maxWidth: '400px',
    maxHeight: '400px',
    margin: '0 auto',
    padding: '20px',
    marginTop: -6,
  },
};
export default EmptyState;
