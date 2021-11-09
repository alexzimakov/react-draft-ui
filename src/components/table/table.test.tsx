import userEvent from '@testing-library/user-event';
import { render, screen, within } from '@testing-library/react';
import { Table } from './table';

it('renders without errors', () => {
  const headers = ['Person', 'Age'];
  const rows = [
    ['Chris', 38],
    ['Dennis', 45],
  ];
  const expectedRowCount = rows.length + 1;
  const expectedHeaderCellCount = headers.length;
  const expectedDataCellCount = rows.length * headers.length;
  render(
    <Table.Container>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>{headers[0]}</Table.HeaderCell>
            <Table.HeaderCell>{headers[1]}</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>{rows[0][0]}</Table.Cell>
            <Table.Cell>{rows[0][1]}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>{rows[1][0]}</Table.Cell>
            <Table.Cell>{rows[1][1]}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Table.Container>,
  );

  const tableContainer = screen.getByRole('group');
  const table = within(tableContainer).getByRole('table');
  expect(within(table).getAllByRole('rowgroup')).toHaveLength(2);
  expect(within(table).getAllByRole('row')).toHaveLength(expectedRowCount);
  expect(within(table).getAllByRole('columnheader')).toHaveLength(
    expectedHeaderCellCount,
  );
  expect(within(table).getAllByRole('cell')).toHaveLength(
    expectedDataCellCount,
  );

  for (const header of headers) {
    screen.getByText(header);
  }

  for (const row of rows) {
    for (const cell of row) {
      screen.getByText(cell);
    }
  }
});

it('renders with sortable header cells', () => {
  const onChangeIdOrder = jest.fn();
  const onChangePersonOrder = jest.fn();
  const onChangeAgeOrder = jest.fn();
  render(
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell isSortable={true} onChangeOrder={onChangeIdOrder}>
            ID
          </Table.HeaderCell>
          <Table.HeaderCell
            isSortable={true}
            order="asc"
            onChangeOrder={onChangePersonOrder}
          >
            Person
          </Table.HeaderCell>
          <Table.HeaderCell
            isSortable={true}
            order="desc"
            onChangeOrder={onChangeAgeOrder}
          >
            Age
          </Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>1</Table.Cell>
          <Table.Cell>Chris</Table.Cell>
          <Table.Cell>38</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>1</Table.Cell>
          <Table.Cell>Dennis</Table.Cell>
          <Table.Cell>45</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>,
  );

  const [idHeaderCell, personHeaderCell, ageHeaderCell] =
    screen.getAllByRole('columnheader');
  expect(idHeaderCell).toHaveAttribute('aria-sort', 'none');
  expect(personHeaderCell).toHaveAttribute('aria-sort', 'ascending');
  expect(ageHeaderCell).toHaveAttribute('aria-sort', 'descending');

  userEvent.click(within(idHeaderCell).getByRole('button'));
  expect(onChangeIdOrder).toHaveBeenCalledTimes(1);
  expect(onChangeIdOrder).toHaveBeenCalledWith('asc');

  userEvent.click(within(personHeaderCell).getByRole('button'));
  expect(onChangePersonOrder).toHaveBeenCalledTimes(1);
  expect(onChangePersonOrder).toHaveBeenCalledWith('desc');

  userEvent.click(within(ageHeaderCell).getByRole('button'));
  expect(onChangeAgeOrder).toHaveBeenCalledTimes(1);
  expect(onChangeAgeOrder).toHaveBeenCalledWith('none');
});
