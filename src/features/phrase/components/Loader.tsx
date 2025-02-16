import { Stack, Typography } from '@mui/material';
import Lottie from 'react-lottie';
import LoaderLottie from '../../../utils/lotties/loader.json';

const Loader = ({ text = 'Loading...' }: { text: string }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoaderLottie,
  };
  return (
    <Stack
      spacing={2}
      alignItems="center"
      sx={{
        maxWidth: '500px',
        maxHeight: '500px',
        margin: '0 auto',
        padding: '20px',
      }}
    >
      <Lottie options={defaultOptions} />
      <Typography data-testid="loading">{text}</Typography>
    </Stack>
  );
};

export default Loader;
