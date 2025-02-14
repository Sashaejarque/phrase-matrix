import { Box, Container, CircularProgress } from '@mui/material';
import DialogAddPhrase from './components/ModalAddPhrase';
import { useToggle } from '../../hooks/useToggle';
import EmptyState from './components/EmptyState';
import SearchBar from './components/SearchBar';
import AddPhraseButton from './components/AddPhraseButton';
import TopBar from './components/TopBar';
import { usePhraseContext } from './context/PhrasesContext';
import MemoizedPhraseList from './components/MemoizedPhraseList';

const PhraseIndex = () => {
  const {
    state: { searchTerm, phrases, loading },
    actions: { addPhrase, setSearchTerm, deletePhrase },
  } = usePhraseContext();

  const [isDialogToggled, handleDialogToggle] = useToggle();

  if (loading) {
    return (
      <Box
        sx={{
          flexGrow: 1,
          minHeight: '100vh',
          bgcolor: 'grey.50',
          overflow: 'hidden',
        }}
      >
        <TopBar title="Phrases App" />
        <Container
          maxWidth="lg"
          sx={{
            mt: 4,
            mb: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress
            title="Loading..."
            size={50}
            sx={{ color: 'black', mt: 16 }}
          />
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'grey.50' }}>
      <TopBar title="Phrases App" />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />

        {phrases.length === 0 ? (
          <EmptyState />
        ) : (
          <MemoizedPhraseList phrases={phrases} deletePhrase={deletePhrase} />
        )}

        <AddPhraseButton handleDialogToggle={handleDialogToggle} />
        <DialogAddPhrase
          closeDialog={handleDialogToggle}
          isDialogOpen={isDialogToggled}
          addPhrase={addPhrase}
        />
      </Container>
    </Box>
  );
};

export default PhraseIndex;
