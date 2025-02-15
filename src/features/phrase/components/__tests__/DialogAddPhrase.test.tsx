import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import DialogAddPhrase from '../DialogAddPhrase';
import { vi } from 'vitest';

describe('DialogAddPhrase Component', () => {
  const mockCloseDialog = vi.fn();
  const mockAddPhrase = vi.fn();

  const setup = (isOpen = true) => {
    return render(
      <DialogAddPhrase
        isDialogOpen={isOpen}
        closeDialog={mockCloseDialog}
        addPhrase={mockAddPhrase}
        title="Test Title"
        buttonTitle="Test Button"
        inputLabel="Test Input"
      />,
    );
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders dialog with correct elements', () => {
    setup();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByLabelText('Test Input')).toBeInTheDocument();
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  test('focuses input when dialog opens', async () => {
    setup();
    await waitFor(() =>
      expect(screen.getByLabelText('Test Input')).toHaveFocus(),
    );
  });

  test('updates input value on change', () => {
    setup();
    const input = screen.getByLabelText('Test Input');
    fireEvent.change(input, { target: { value: 'Hello World' } });
    expect(input).toHaveValue('Hello World');
  });

  test('calls addPhrase and closes dialog when clicking add button', () => {
    setup();
    const input = screen.getByLabelText('Test Input');
    fireEvent.change(input, { target: { value: 'New Phrase' } });

    const addButton = screen.getByText('Test Button');
    fireEvent.click(addButton);

    expect(mockAddPhrase).toHaveBeenCalledWith('New Phrase');
    expect(mockCloseDialog).toHaveBeenCalled();
  });

  test('does not submit if input is empty', () => {
    setup();
    const addButton = screen.getByText('Test Button');
    fireEvent.click(addButton);

    expect(mockAddPhrase).not.toHaveBeenCalled();
    expect(mockCloseDialog).not.toHaveBeenCalled();
  });

  test('closes dialog when clicking close icon', () => {
    setup();
    const closeButton = screen.getByLabelText('close');
    fireEvent.click(closeButton);
    expect(mockCloseDialog).toHaveBeenCalled();
  });

  test('submits phrase and closes dialog on Enter key', () => {
    setup();
    const input = screen.getByLabelText('Test Input');
    fireEvent.change(input, { target: { value: 'Test Phrase' } });

    fireEvent.keyDown(input, { key: 'Enter' });

    expect(mockAddPhrase).toHaveBeenCalledWith('Test Phrase');
    expect(mockCloseDialog).toHaveBeenCalled();
  });

  test('closes dialog on Escape key', () => {
    setup();
    const input = screen.getByLabelText('Test Input');
    fireEvent.keyDown(input, { key: 'Escape' });

    expect(mockCloseDialog).toHaveBeenCalled();
  });
});
