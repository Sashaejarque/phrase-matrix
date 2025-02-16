import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchBar from '../SearchBar';
import { vi } from 'vitest';

vi.mock('../../../hooks/useDebounce', () => ({
  useDebounce: (value: string) => value, // Mock sin delay
}));

describe('SearchBar Component', () => {
  const mockOnChange = vi.fn();

  const setup = (value = '') => {
    return render(
      <SearchBar
        value={value}
        onChange={mockOnChange}
        placeholder="Search phrases..."
      />,
    );
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders with initial value', () => {
    setup('initial');
    expect(screen.getByPlaceholderText('Search phrases...')).toHaveValue(
      'initial',
    );
  });

  test('updates input value on change', () => {
    setup();
    const input = screen.getByPlaceholderText('Search phrases...');
    fireEvent.change(input, { target: { value: 'hello' } });
    expect(input).toHaveValue('hello');
  });

  test('calls onChange when input changes (debounced)', async () => {
    setup();

    const input = screen.getByPlaceholderText('Search phrases...');

    fireEvent.change(input, { target: { value: 'world' } });

    await waitFor(() => expect(mockOnChange).toHaveBeenCalledWith('world'));
  });
  test('updates when value prop changes', () => {
    const { rerender } = setup('test');
    rerender(
      <SearchBar
        value="new value"
        onChange={mockOnChange}
        placeholder="Search phrases..."
      />,
    );
    expect(screen.getByPlaceholderText('Search phrases...')).toHaveValue(
      'new value',
    );
  });
});
