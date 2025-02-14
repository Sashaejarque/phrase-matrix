import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";

import { Close as CloseIcon } from "@mui/icons-material";
import { useState } from "react";
interface DialogAddPhraseProps {
  isDialogOpen: boolean;
  closeDialog: () => void;
  addPhrase: (phrase: string) => void;
}
const DialogAddPhrase = ({
  isDialogOpen,
  closeDialog,
  addPhrase,
}: DialogAddPhraseProps) => {
  const [newPhrase, setNewPhrase] = useState("");
  const handleAddPhrase = () => {
    addPhrase(newPhrase);
    setNewPhrase("");
    closeDialog();
  };
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPhrase(e.target.value);
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addPhrase(newPhrase);
    }
  };
  return (
    <Dialog open={isDialogOpen} onClose={closeDialog} fullWidth maxWidth="sm">
      <DialogTitle>Add New Phrase</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={closeDialog}
        sx={{ ...styles.icon, color: (theme) => theme.palette.grey[500] }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Enter your phrase"
          type="text"
          fullWidth
          value={newPhrase}
          onChange={onChangeInput}
          onKeyDown={onKeyDown}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleAddPhrase}
          variant="contained"
          fullWidth
          sx={styles.dialog}
        >
          Add phrase
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const styles = {
  dialog: { backgroundColor: "black", color: "white", mb: 2, mx: 2 },
  icon: {
    position: "absolute",
    right: 8,
    top: 8,
  }
};
export default DialogAddPhrase;
