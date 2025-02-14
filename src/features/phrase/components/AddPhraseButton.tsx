import { Fab } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

interface AddPhraseButtonProps {
  handleDialogToggle: () => void;
}
const AddPhraseButton = ({ handleDialogToggle }: AddPhraseButtonProps) => {
  return (
    <Fab
      aria-label="add"
      onClick={handleDialogToggle}
      sx={{
        position: "fixed",
        bottom: 24,
        right: 24,
        backgroundColor: "black",
      }}
    >
      <AddIcon sx={{ color: "white" }} />
    </Fab>
  );
};

export default AddPhraseButton;
