import { Fab, Tooltip } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
interface AddPhraseButtonProps {
  handleDialogToggle: () => void;
}
const AddPhraseButton = ({ handleDialogToggle }: AddPhraseButtonProps) => (
  <Tooltip title="Add phrase">
    <Fab
      aria-label="add"
      onClick={handleDialogToggle}
      sx={styles.fab}
      data-testid="add-phrase-button"
    >
      <AddIcon sx={{ color: 'text.primary' }} />
    </Fab>
  </Tooltip>
);
const styles = {
  fab: {
    position: 'fixed',
    bottom: { xs: 20, md: 32 },
    right: { xs: 20, md: 32 },
    bgcolor: 'secondary.main',
    color: 'text.primary',
    boxShadow: '0 12px 28px rgba(31,77,58,.2)',
    '&:hover': { bgcolor: 'secondary.main', transform: 'translateY(-3px)' },
    transition: 'transform .2s ease',
  },
};
export default AddPhraseButton;
