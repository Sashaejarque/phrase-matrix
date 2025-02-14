import { Box, Container, Grid2 } from '@mui/material';
import DialogAddPhrase from './components/ModalAddPhrase';
import { useToggle } from '../../hooks/useToggle';
import EmptyState from './components/EmptyState';
import PhraseCard from './components/PhraseCard';
import SearchBar from './components/SearchBar';
import AddPhraseButton from './components/AddPhraseButton';
import TopBar from './components/TopBar';
import { usePhraseContext } from './context/PhrasesContext';
import { CircularProgress } from "@mui/material";



const PhraseIndex = () => {
  const {
    state: { searchTerm, phrases, loading },
    actions: { addPhrase, setSearchTerm, deletePhrase },
  } = usePhraseContext();
  const [isDialogToggled, handleDialogToggle] = useToggle();

  if (loading) {
    return ( <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'grey.50' }}>
        <TopBar title="Phrases App" />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress title='Loading...' size={50} sx={{ color: 'black', mt: 16}}/>
        </Container>
      </Box>);
  }

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'grey.50' }}>
      <TopBar title="Phrases App" />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <Grid2 container spacing={3}>
          {phrases.map((phrase) => (
            <PhraseCard
              phrase={phrase}
              deletePhrase={deletePhrase}
              key={phrase.id}
            />
          ))}
        </Grid2>
        {phrases.length === 0 && <EmptyState />}

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
