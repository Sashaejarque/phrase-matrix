import {
  Card,
  CardContent,
  Grid2,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import { Phrase } from '../types/phrase';
import { Close as CloseIcon } from '@mui/icons-material';
import { useEffect, useRef, useState } from 'react';

interface PhraseCardProps {
  phrase: Phrase;
  deletePhrase: (id: string) => void;
  setRowHeight?: (height: number) => void;
}

const PhraseCard = ({
  phrase,
  deletePhrase,
  setRowHeight,
}: PhraseCardProps) => {
  const theme = useTheme();
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [, setHeight] = useState(100);

  useEffect(() => {
    if (cardRef.current) {
      const newHeight = cardRef.current.offsetHeight;
      setHeight(newHeight);
      if (setRowHeight) {
        setRowHeight(newHeight);
      }
    }
  }, [phrase.text]);

  return (
    <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={phrase.id}>
      <Card
        ref={cardRef}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          transition: '0.3s',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: theme.shadows[4],
            '& .delete-button': {
              opacity: 1,
            },
          },
        }}
      >
        <IconButton
          className="delete-button"
          size="small"
          onClick={() => deletePhrase(phrase.id)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            opacity: 0,
            transition: '0.2s',
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
        <CardContent sx={{ flexGrow: 1, pt: 4 }}>
          <Typography variant="body1">{phrase.text}</Typography>
        </CardContent>
      </Card>
    </Grid2>
  );
};

export default PhraseCard;
