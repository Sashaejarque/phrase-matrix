import { render, act } from '@testing-library/react';

import { useToggle } from '../useToggle';

interface TestComponentProps {
  initialState?: boolean;
}
const TestComponent = ({ initialState = false }: TestComponentProps) => {
  const [state, toggle] = useToggle(initialState);

  return (
    <div>
      <span>{state ? 'ON' : 'OFF'}</span>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

describe('useToggle', () => {
  it('should toggle the state value on calling toggle function', () => {
    const TestComponent = ({ initialState }: { initialState?: boolean }) => {
      const [state, toggle] = useToggle(initialState);
      return (
        <div>
          <span>{state ? 'ON' : 'OFF'}</span>
          <button onClick={toggle}>Toggle</button>
        </div>
      );
    };

    const { getByText, getByRole } = render(
      <TestComponent initialState={false} />,
    );

    expect(getByText('OFF')).toBeInTheDocument();

    act(() => {
      getByRole('button').click();
    });

    expect(getByText('ON')).toBeInTheDocument();

    act(() => {
      getByRole('button').click();
    });

    expect(getByText('OFF')).toBeInTheDocument();
  });

  it('should use the initial state correctly', () => {
    const { getByText } = render(<TestComponent initialState={true} />);

    expect(getByText('ON')).toBeInTheDocument();
  });
});
