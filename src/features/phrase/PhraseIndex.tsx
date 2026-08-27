import {
  Box,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import { lazy, Suspense } from 'react';
import { useToggle } from '../../hooks/useToggle';
import EmptyState from './components/EmptyState';
import SearchBar from './components/SearchBar';
import AddPhraseButton from './components/AddPhraseButton';
import TopBar from './components/TopBar';
import { usePhraseContext } from './context/PhrasesContext';
import { useTranslation } from 'react-i18next';

const DialogAddPhrase = lazy(() => import('./components/DialogAddPhrase'));
const MemoizedPhraseList = lazy(
  () => import('./components/MemoizedPhraseList'),
);

const PhraseIndex = () => {
  const {
    state: { searchTerm, phrases },
    actions: { addPhrase, setSearchTerm, deletePhrase },
  } = usePhraseContext();
  const { t } = useTranslation();
  const [isDialogToggled, handleDialogToggle] = useToggle();
  const hasPhrases = phrases.length > 0;

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <TopBar title={t('title_app')} />
      <Container
        maxWidth="lg"
        sx={{ py: { xs: 5, md: 8 }, px: { xs: 3, md: 6 } }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'end',
            gap: 3,
            mb: 5,
          }}
        >
          <Box>
            <Typography
              sx={{
                color: 'primary.main',
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: '.14em',
                mb: 1,
              }}
            >
              {t('hero_eyebrow')}
            </Typography>
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: 42, md: 64 }, lineHeight: 0.98 }}
            >
              {t('hero_title_start')}
              <br />
              <Box component="span" sx={{ color: 'primary.main' }}>
                {t('hero_title_accent')}
              </Box>
            </Typography>
          </Box>
          <Typography
            sx={{
              display: { xs: 'none', sm: 'block' },
              color: 'text.secondary',
              fontSize: 13,
              maxWidth: 180,
              lineHeight: 1.5,
            }}
          >
            {t('hero_description')}
          </Typography>
        </Box>
        <Box
          sx={{
            bgcolor: 'background.paper',
            border: '1px solid #e5e1d7',
            borderRadius: 4,
            p: { xs: 2, md: 3 },
            boxShadow: '0 18px 50px rgba(31,77,58,.06)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 2,
              mb: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: '.08em',
                textTransform: 'uppercase',
              }}
            >
              The collection{' '}
              <Box
                component="span"
                sx={{ color: 'text.secondary', fontWeight: 500 }}
              >
                {' '}
                / {phrases.length}
              </Box>
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: 12 }}>
              Search and curate
            </Typography>
          </Box>
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder={t('search_placeholder')}
          />
          {!hasPhrases && <EmptyState message={t('empty_phrases')} />}
          {hasPhrases && (
            <Suspense
              fallback={
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  sx={{ py: 8 }}
                >
                  <CircularProgress
                    title={t('loading')}
                    size={34}
                    sx={{ color: 'primary.main' }}
                  />
                </Stack>
              }
            >
              <Box sx={{ mt: 3 }}>
                <MemoizedPhraseList
                  phrases={phrases}
                  deletePhrase={deletePhrase}
                />
              </Box>
            </Suspense>
          )}
        </Box>
        <AddPhraseButton handleDialogToggle={handleDialogToggle} />
        <Suspense>
          <DialogAddPhrase
            closeDialog={handleDialogToggle}
            isDialogOpen={isDialogToggled}
            addPhrase={addPhrase}
            title={t('add_new_phrase')}
            buttonTitle={t('add_phrase')}
            inputLabel={t('enter_phrase')}
          />
        </Suspense>
      </Container>
    </Box>
  );
};

export default PhraseIndex;
