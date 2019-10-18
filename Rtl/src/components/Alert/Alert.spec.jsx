import React from 'react';
import { render, within, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Alert from './Alert';
import AlertHeading from './AlertHeading';

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('Alert component', () => {
  test('it renders by default', () => {
    const childTestId = 'childTestId';

    const { getByRole, queryByText } = render(
      <Alert>
        <div data-testid={childTestId} />
      </Alert>
    );

    const alert = getByRole('alert');
    expect(alert).toHaveClass('alert', 'alert-primary');

    const { getByTestId } = within(alert);
    getByTestId(childTestId);

    expect(queryByText(/ * /)).not.toBeInTheDocument();
  });

  test('it renders with a class according to specified variant', () => {
    const { getByRole } = render(<Alert variant="secondary">Special</Alert>);
    const alert = getByRole('alert');
    expect(alert).toHaveClass('alert', 'alert-secondary');
  });

  test('it renders as dismissible', () => {
    const { getByRole, container } = render(<Alert dismissible>My message</Alert>);

    // it adds the class
    const alert = getByRole('alert');
    expect(alert).toHaveClass('alert-dismissible');

    // it adds a button
    const button = container.querySelector('button[aria-label="Close"]');
    expect(button).toBeInTheDocument();
  });

  // Test dismiss
  test('it allows to dismiss itself', async () => {
    const { container, queryByRole } = render(<Alert dismissible>I can be dismissed</Alert>);
    const dismissButton = container.querySelector('button[aria-label="Close"]');
    expect(dismissButton).toHaveClass('close');
    expect(dismissButton).toHaveAttribute('aria-label', 'Close');

    fireEvent.click(dismissButton);

    await waitForElementToBeRemoved(() => queryByRole('alert'));
  });

  test('it renders with header component', () => {
    const { getByRole } = render(<AlertHeading />);

    const heading = getByRole('heading');

    expect(heading).toBeInTheDocument();
  });

  test('it renders with h4 header', () => {
    const { getByRole } = render(<AlertHeading />);
    const heading = getByRole('heading');

    expect(heading).toHaveProperty('tagName', 'H4');
  });

  test('it renders title with alert-heading', () => {
    const { getByRole } = render(<AlertHeading />);
    const heading = getByRole('heading');

    expect(heading).toHaveClass('alert-heading');
  });

  test('it should render children in h4', () => {
    const childTestId = 'childTestId';

    const { getByText } = render(
      <AlertHeading>
        <div data-testid={childTestId}>Rendered children</div>
      </AlertHeading>
    );

    getByText(/Rendered/);
  });

  test('it should render with className prop', () => {
    const { getByRole } = render(<AlertHeading className="Ludwig" />);

    const header = getByRole('heading');

    expect(header).toHaveClass('Ludwig');
  });
});
