import { Fab } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

interface AddPhraseButtonProps {
  handleDialogToggle: () => void;
}
const AddPhraseButton = ({ handleDialogToggle }: AddPhraseButtonProps) => {
  return (
    <Fab
      aria-label="add"
      onClick={handleDialogToggle}
      sx={styles.fab}
      data-testid="add-phrase-button"
    >
      <AddIcon sx={styles.icon} />
    </Fab>
  );
};

const styles = {
  fab: {
    position: 'fixed',
    bottom: 24,
    right: 24,
    backgroundColor: 'black',
  },
  icon: {
    color: 'white',
  },
};
export default AddPhraseButton;
