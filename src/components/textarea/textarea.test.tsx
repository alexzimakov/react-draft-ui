import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Textarea } from './textarea';

it('renders without errors', () => {
  const placeholder = 'Write a few sentences about yourself';
  render(<Textarea placeholder={placeholder} />);
  screen.getByPlaceholderText(placeholder);
});

it('should forward extra props underlying <textarea />', () => {
  const attrs = {
    placeholder: 'Write a few sentences about yourself',
    name: 'bio',
    spellCheck: false,
  };
  render(<Textarea {...attrs} />);
  const textareaEl = screen.getByPlaceholderText(attrs.placeholder);

  expect(textareaEl).toHaveAttribute('name', attrs.name);
  expect(textareaEl).toHaveAttribute('spellcheck', 'false');
});

it('invokes `onChange` event handler', async () => {
  const user = userEvent.setup();
  const onChange = jest.fn();
  render(<Textarea onChange={onChange} />);

  await user.click(screen.getByRole('textbox'));
  await user.paste('lorem');

  expect(onChange).toHaveBeenCalledTimes(1);
});

it('invokes `onChangeValue` with changed value', async () => {
  const user = userEvent.setup();
  const onChangeValue = jest.fn();
  const expectedValue = 'lorem';
  render(<Textarea onChangeValue={onChangeValue} />);

  await user.click(screen.getByRole('textbox'));
  await user.paste(expectedValue);

  expect(onChangeValue).toHaveBeenCalledTimes(1);
  expect(onChangeValue).toHaveBeenNthCalledWith(1, expectedValue);
});
