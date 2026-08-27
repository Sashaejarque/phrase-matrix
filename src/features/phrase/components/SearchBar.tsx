import { useState, useEffect } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useDebounce } from '../../../hooks/useDebounce';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const SearchBar = ({ value, onChange, placeholder }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState(value);
  const debouncedValue = useDebounce(inputValue, 500);
  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue, onChange]);
  useEffect(() => {
    setInputValue(value);
  }, [value]);
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder={placeholder}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: 'primary.main' }} />
            </InputAdornment>
          ),
        },
      }}
      sx={styles.searchBar}
    />
  );
};

const styles = {
  searchBar: {
    mb: 1,
    '& .MuiOutlinedInput-root': {
      borderRadius: 3,
      bgcolor: 'background.default',
      '& fieldset': { borderColor: '#e5e1d7' },
      '&:hover fieldset': { borderColor: 'primary.main' },
      '&.Mui-focused fieldset': { borderColor: 'primary.main', borderWidth: 1 },
    },
    '& .MuiInputBase-input': { py: 1.75 },
  },
};
export default SearchBar;
