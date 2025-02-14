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
}
const DialogAddPhrase = ({
  isDialogOpen,
  closeDialog,
}: DialogAddPhraseProps) => {
  const [newPhrase, setNewPhrase] = useState("");
  return (
    <Dialog open={isDialogOpen} onClose={closeDialog} fullWidth maxWidth="sm">
      <DialogTitle>Add New Phrase</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={closeDialog}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
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
          onChange={(e) => setNewPhrase(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              console.log(newPhrase);
            }
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => console.log("submit")}
          variant="contained"
          fullWidth
          sx={{ backgroundColor: "black", color: "white", mb: 2, mx: 2 }}
        >
          Add phrase
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogAddPhrase;
