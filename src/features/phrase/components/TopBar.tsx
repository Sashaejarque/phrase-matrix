import { AppBar, Toolbar, Typography } from '@mui/material';

const TopBar = ({ title }: { title: string }) => {
  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
