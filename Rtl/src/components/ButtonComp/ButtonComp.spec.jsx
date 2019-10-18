import React from 'react';
import { render } from '@testing-library/react';
import ButtonComp from './ButtonComp';
import '@testing-library/jest-dom/extend-expect';

describe('Button component', () => {
  test('it should render a button', () => {
    const { getByRole } = render(<ButtonComp />);

    getByRole('button');
  });

  describe('Variants primary, secondary or link', () => {
    test('it renders with class primary by default', () => {
      const { getByRole } = render(<ButtonComp />);
      const btn = getByRole('button');

      expect(btn).toHaveClass('primary');
    });

    test('it renders with class secondary via props', () => {
      const { getByRole } = render(<ButtonComp styleType="secondary" />);
      const btn = getByRole('button');

      expect(btn).toHaveClass('secondary');
    });
  });

  describe('variants in size', () => {
    test('it renders default with size none', () => {
      const { getByRole } = render(<ButtonComp />);

      const btn = getByRole('button');

      expect(btn).not.toHaveClass('btn-lg');
      expect(btn).not.toHaveClass('btn-sm');
    });

    test('it renders with size property small given with property', () => {
      const { getByRole } = render(<ButtonComp size="small" />);
      const btn = getByRole('button');

      expect(btn).toHaveClass('btn-sm');
    });

    test('it renders with size property large given with property', () => {
      const { getByRole } = render(<ButtonComp size="large" />);
      const btn = getByRole('button');

      expect(btn).toHaveClass('btn-lg');
    });

    test('it renders with unknown size property', () => {
      const { getByRole } = render(<ButtonComp size="NotAValidSize" />);
      const btn = getByRole('button');

      expect(btn).not.toHaveClass('btn-lg');
      expect(btn).not.toHaveClass('btn-sm');
    });
  });

  describe('Type of the button', () => {
    test('it renders default with submit', () => {
      const { getByRole } = render(<ButtonComp />);
      const btn = getByRole('button');

      expect(btn).toHaveProperty('type', 'button');
    });

    test('it renders with type reset from the props', () => {
      const { getByRole } = render(<ButtonComp type="reset" />);
      const btn = getByRole('button');

      expect(btn).toHaveProperty('type', 'reset');
    });
  });

  test('it renders with extra class supplied with prop', () => {
    const { getByRole } = render(<ButtonComp classNames="LudwigButton" />);
    const btn = getByRole('button');

    expect(btn).toHaveClass('LudwigButton');
  });

  test('it renders with extra classes supplied with prop', () => {
    const { getByRole } = render(<ButtonComp classNames="LudwigButton JozefButton" />);
    const btn = getByRole('button');

    expect(btn).toHaveClass('LudwigButton');
    expect(btn).toHaveClass('JozefButton');
  });

  test('it renders with child nodes', () => {
    const childId = 'childId';
    const { getByTestId } = render(
      <ButtonComp>
        <p data-testid={childId}>Test</p>
      </ButtonComp>
    );
    getByTestId(childId);
  });

  test('it renders with disabled property', () => {
    const { getByRole } = render(<ButtonComp disabled />);
    const btn = getByRole('button');
  });
});
