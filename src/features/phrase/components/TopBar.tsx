import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Box,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Gb, Es } from 'react-flags-select';
import { KeyboardArrowDown } from '@mui/icons-material';

const TopBar = ({ title }: { title: string }) => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const currentLanguage = i18n.language;
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    handleClose();
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: '#000000', color: 'background.default' }}
    >
      <Toolbar
        sx={{
          minHeight: { xs: 72, md: 84 },
          px: { xs: 3, md: 6 },
          gap: 3,
          bgcolor: 'primary.main',
        }}
      >
        <Box
          sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexGrow: 1 }}
        >
          <Box
            sx={{
              width: 10,
              height: 10,
              bgcolor: 'secondary.main',
              borderRadius: '50%',
            }}
          />
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: '.16em',
              opacity: 0.72,
            }}
          >
            PHRASE / MATRIX
          </Typography>
          <Typography
            sx={{
              display: { xs: 'none', md: 'block' },
              fontSize: 12,
              opacity: 0.5,
            }}
          >
            —
          </Typography>
          <Typography
            variant="h6"
            sx={{
              display: { xs: 'none', md: 'block' },
              fontSize: 12,
              opacity: 0.5,
            }}
          >
            {title}
          </Typography>
        </Box>
        <IconButton
          aria-label={t('lang')}
          onClick={handleClick}
          sx={{
            color: 'inherit',
            border: '1px solid rgba(245,247,242,.25)',
            borderRadius: 99,
            px: 1.5,
            gap: 0.75,
          }}
        >
          {currentLanguage === 'en' ? <Gb /> : <Es />}
          <Typography
            sx={{ fontSize: 12, fontWeight: 800, letterSpacing: '.08em' }}
          >
            {t('lang')}
          </Typography>
          <KeyboardArrowDown sx={{ fontSize: 18 }} />
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
