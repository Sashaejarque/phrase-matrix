import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from '@mui/material';

import { Close as CloseIcon } from '@mui/icons-material';
import { useEffect, useRef, useState } from 'react';

interface DialogAddPhraseProps {
  isDialogOpen: boolean;
  closeDialog: () => void;
  addPhrase: (phrase: string) => void;
  title?: string;
  buttonTitle?: string;
  inputLabel?: string;
}

const DialogAddPhrase = ({
  isDialogOpen,
  closeDialog,
  addPhrase,
  title = 'Add a new phrase',
  buttonTitle = 'Add phrase',
  inputLabel = 'Enter your phrase',
}: DialogAddPhraseProps) => {
  const [newPhrase, setNewPhrase] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isDialogOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isDialogOpen]);

  const handleAddPhrase = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!newPhrase.trim()) return;
    e.preventDefault();
    addPhrase(newPhrase);
    setNewPhrase('');
    closeDialog();
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPhrase(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!newPhrase.trim()) return;
    if (e.key === 'Enter') {
      e.preventDefault();
      addPhrase(newPhrase);
      setNewPhrase('');
      closeDialog();
    } else if (e.key === 'Escape') {
      closeDialog();
    }
  };

  return (
    <Dialog open={isDialogOpen} onClose={closeDialog} fullWidth maxWidth="sm">
      <DialogTitle>{title}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={closeDialog}
        sx={{ ...styles.icon, color: (theme) => theme.palette.grey[500] }}
        data-testid="close-dialog"
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <TextField
          inputRef={inputRef}
          margin="dense"
          label={inputLabel}
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
          disabled={!newPhrase.trim()}
          sx={styles.dialog}
        >
          {buttonTitle}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const styles = {
  dialog: { backgroundColor: 'black', color: 'white', mb: 2, mx: 2 },
  icon: {
    position: 'absolute',
    right: 8,
    top: 8,
  },
};

export default DialogAddPhrase;
