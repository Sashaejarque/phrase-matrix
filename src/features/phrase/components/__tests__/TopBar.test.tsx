import { render, screen } from '@testing-library/react';
import TopBar from '../TopBar';

describe('TopBar Component', () => {
  test('renders TopBar with title', () => {
    const title = 'Test Title';

    render(<TopBar title={title} />);

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();

    expect(titleElement).toHaveClass('MuiTypography-h6');
  });

  test('TopBar has black background color', () => {
    const title = 'Test Title';
    render(<TopBar title={title} />);

    const appBar = screen.getByRole('banner');
    expect(appBar).toHaveStyle('background-color: rgb(0, 0, 0);');
  });
});
