import { render, act } from '@testing-library/react';
import { vi } from 'vitest';
import { useDebounce } from '../useDebounce'; // Asegúrate de importar tu hook

describe('useDebounce', () => {
  it('should return debounced value after the delay', async () => {
    vi.useFakeTimers();

    const TestComponent = ({
      value,
      delay,
    }: {
      value: string;
      delay: number;
    }) => {
      const debouncedValue = useDebounce(value, delay);
      return <div>{debouncedValue}</div>;
    };

    const { getByText, rerender } = render(
      <TestComponent value="hello" delay={500} />,
    );

    expect(getByText('hello')).toBeInTheDocument();
    rerender(<TestComponent value="world" delay={500} />);
    expect(getByText('hello')).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(getByText('world')).toBeInTheDocument();
    vi.useRealTimers();
  });
});
