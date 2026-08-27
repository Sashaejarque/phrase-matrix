import { Box, Typography } from '@mui/material';
import Lottie from 'react-lottie';
import EmptyLottie from '../../../utils/lotties/emptyState.json';
interface EmptyStateProps {
  message: string;
}
const EmptyState = ({ message }: EmptyStateProps) => (
  <Box sx={styles.box}>
    <Box
      sx={{
        display: 'inline-flex',
        filter: 'hue-rotate(78deg) saturate(0.72) brightness(0.94)',
      }}
    >
      <Lottie
        options={{ loop: true, autoplay: true, animationData: EmptyLottie }}
        height={180}
        width={180}
      />
    </Box>
    <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: 14 }}>
      {message}
    </Typography>
  </Box>
);
const styles = {
  box: { textAlign: 'center', maxWidth: 400, margin: '0 auto', py: 5 },
};
export default EmptyState;
