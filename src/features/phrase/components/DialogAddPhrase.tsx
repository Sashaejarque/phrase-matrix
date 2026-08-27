import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
interface DialogAddPhraseProps {
  isDialogOpen: boolean;
  closeDialog: () => void;
  addPhrase: (phrase: string) => void;
  title: string;
  buttonTitle: string;
  inputLabel: string;
}
const DialogAddPhrase = ({
  isDialogOpen,
  closeDialog,
  addPhrase,
  title,
  buttonTitle,
  inputLabel,
}: DialogAddPhraseProps) => {
  const [newPhrase, setNewPhrase] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (isDialogOpen) setTimeout(() => inputRef.current?.focus(), 100);
  }, [isDialogOpen]);
  const submit = () => {
    if (!newPhrase.trim()) return;
    addPhrase(newPhrase);
    setNewPhrase('');
    closeDialog();
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing && e.keyCode !== 229) {
      e.preventDefault();
      submit();
    } else if (e.key === 'Escape') closeDialog();
  };
  return (
    <Dialog open={isDialogOpen} onClose={closeDialog} fullWidth maxWidth="sm">
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <DialogTitle sx={{ pb: 1, pr: 6 }}>
          {title}
          <Typography
            sx={{
              color: 'text.secondary',
              fontSize: 13,
              fontWeight: 400,
              mt: 0.5,
            }}
          >
            Capture a thought worth remembering.
          </Typography>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={closeDialog}
          sx={styles.icon}
          data-testid="close-dialog"
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <TextField
            inputRef={inputRef}
            label={inputLabel}
            fullWidth
            value={newPhrase}
            onChange={(e) => setNewPhrase(e.target.value)}
            onKeyDown={onKeyDown}
            sx={styles.textField}
          />
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button
            onClick={submit}
            variant="contained"
            fullWidth
            disabled={!newPhrase.trim()}
            sx={{ py: 1.5 }}
          >
            {buttonTitle}
          </Button>
        </DialogActions>
      </motion.div>
    </Dialog>
  );
};
const styles = {
  icon: { position: 'absolute', right: 16, top: 16, color: 'text.secondary' },
  textField: {
    mt: 1,
    '& .MuiOutlinedInput-root': {
      borderRadius: 2,
      '&.Mui-focused fieldset': { borderColor: 'primary.main' },
    },
  },
};
export default DialogAddPhrase;
