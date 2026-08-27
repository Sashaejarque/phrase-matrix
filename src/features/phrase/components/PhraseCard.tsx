import {
  Card,
  CardContent,
  Grid2,
  IconButton,
  Typography,
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
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [, setHeight] = useState(100);
  useEffect(() => {
    if (cardRef.current) {
      const newHeight = cardRef.current.offsetHeight;
      setHeight(newHeight);
      setRowHeight?.(newHeight);
    }
  }, [phrase.text, setRowHeight]);
  return (
    <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={phrase.id}>
      <Card
        ref={cardRef}
        sx={{
          ...styles.card,
          '@media (min-width: 600px)': {
            '&:hover .delete-button': { opacity: 1 },
          },
        }}
      >
        <Typography
          sx={{
            color: 'primary.main',
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: '.12em',
          }}
        >
          PHRASE
        </Typography>
        <IconButton
          className="delete-button"
          aria-label="Delete phrase"
          size="small"
          onClick={() => deletePhrase(phrase.id)}
          data-testid="delete-button"
          sx={styles.icon}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
        <CardContent sx={styles.cardContent}>
          <Typography variant="body1" sx={{ fontSize: 17, lineHeight: 1.45 }}>
            {phrase.text}
          </Typography>
        </CardContent>
      </Card>
    </Grid2>
  );
};
const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    minHeight: 132,
    p: 2.5,
    border: '1px solid #e5e1d7',
    borderRadius: 3,
    boxShadow: 'none',
  },
  icon: {
    position: 'absolute',
    right: 12,
    top: 12,
    opacity: 0,
    color: 'text.secondary',
    '@media (max-width: 600px)': { opacity: 1 },
    '&:hover': { color: 'primary.main' },
  },
  cardContent: { flexGrow: 1, p: 0, pt: 2 },
};
export default PhraseCard;
