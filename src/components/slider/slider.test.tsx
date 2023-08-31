import { Slider } from './slider';
import { expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '../../test/test-utils';

it('renders without errors', () => {
  render(<Slider value={50} onChangeValue={vi.fn()} />);
  screen.getByRole('slider');
});

it('renders without errors with tick marks', () => {
  const tickMarksCount = 5;
  render(
    <Slider
      tickMarksCount={tickMarksCount}
      value={50}
      onChangeValue={vi.fn()}
    />,
  );

  screen.getByRole('slider');
  expect(screen.getAllByTestId('tick-mark')).toHaveLength(tickMarksCount);
});

it('renders tick mark lables', () => {
  const firstTickLabel = 'Small';
  const lastTickLabel = 'Large';
  render(
    <Slider
      tickMarksCount={2}
      value={50}
      onChangeValue={vi.fn()}
      renderTickMarkLabel={(index) => {
        if (index === 0) {
          return firstTickLabel;
        }
        return lastTickLabel;
      }}
    />,
  );

  screen.getByRole('slider');
  screen.getByText(firstTickLabel);
  screen.getByText(lastTickLabel);
});

it('invokes `onChangeValue` when value changes', () => {
  const onChangeValueMock = vi.fn();
  render(<Slider value={50} onChangeValue={onChangeValueMock} />);

  fireEvent.change(screen.getByRole('slider'), { target: { value: '51' } });

  expect(onChangeValueMock).toHaveBeenCalledTimes(1);
  expect(onChangeValueMock).toHaveBeenNthCalledWith(1, 51);
});
