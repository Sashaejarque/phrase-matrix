import { Box, Typography } from '@mui/material';

interface EmptyStateProps {
  message?: string;
}
const defaultEmptyStateMessage =
  ' No phrases yet. Click the + button to add one!';

const EmptyState = ({
  message = defaultEmptyStateMessage,
}: EmptyStateProps) => {
  return (
    <Box sx={styles.box}>
      <Typography variant="body1" color="text.secondary">
        {message}
      </Typography>
    </Box>
  );
};

const styles = {
  box: {
    textAlign: 'center',
    py: 8,
  },
};
export default EmptyState;
