import { InputAdornment, TextField } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}
const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Search phrases..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        },
      }}
      sx={{ mb: 4, bgcolor: 'background.paper', borderRadius: 1 }}
    />
  );
};

export default SearchBar;
