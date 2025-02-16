import { Stack, Typography } from '@mui/material';
import Lottie from 'react-lottie';
import LoaderLottie from '../../../utils/lotties/loader.json';

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoaderLottie,
  };
  return (
    <Stack spacing={2} alignItems="center">
      <Lottie options={defaultOptions} />
      <Typography>Loading...</Typography>
    </Stack>
  );
};

export default Loader;
