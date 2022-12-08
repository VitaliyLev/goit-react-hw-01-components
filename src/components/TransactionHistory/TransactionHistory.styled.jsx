import styled from 'styled-components';

export const Table = styled.table`
  width: 700px;
  height: auto;
  margin: 0 auto 50px;

  tr {
    height: 40px;
  }

  tbody {
    text-align: center;
    color: gray;
  }

  tbody tr:nth-child(odd) {
    background-color: #ffffff;
  }

  tbody tr:nth-child(even) {
    background-color: #f0f8ff;
  }

  tbody tr:hover {
    cursor: pointer;
    background-color: #d3e9fd;
  }
`;

export const TableHead = styled.thead`
  color: white;
  text-align: center;
  height: 40px;
  background: #1e90ff;
  text-transform: uppercase;
`;
