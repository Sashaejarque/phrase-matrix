import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../../utils/ErrorBoundary';

const ProblematicComponent = () => {
  throw new Error('Error for testing purposes');
};

describe('ErrorBoundary', () => {
  it('Should catch the error and show the fallback message', () => {
    render(
      <ErrorBoundary>
        <ProblematicComponent />
      </ErrorBoundary>,
    );

    expect(
      screen.getByText('Ocurrió un error. Intenta recargar la página.'),
    ).toBeInTheDocument();
  });
});
