import { AppBar, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Menu, MenuItem, IconButton } from '@mui/material';
import { Gb, Es } from 'react-flags-select';
import { KeyboardArrowDown } from '@mui/icons-material';

const TopBar = ({ title }: { title: string }) => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const currentLanguage = i18n.language;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    handleClose();
  };

  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <IconButton
          onClick={handleClick}
          sx={{ color: 'white', display: 'flex', alignItems: 'center' }}
        >
          {currentLanguage === 'en' ? (
            <Gb style={{ marginRight: 5 }} />
          ) : (
            <Es style={{ marginRight: 5 }} />
          )}
          <Typography variant="body2">{t('lang')}</Typography>
          <KeyboardArrowDown sx={{ ml: 0 }} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {currentLanguage === 'en' ? (
            <MenuItem onClick={() => changeLanguage('es')}>
              <Es style={{ width: 20, marginRight: 8 }} /> Español
            </MenuItem>
          ) : (
            <MenuItem onClick={() => changeLanguage('en')}>
              <Gb style={{ width: 20, marginRight: 8 }} /> English
            </MenuItem>
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
