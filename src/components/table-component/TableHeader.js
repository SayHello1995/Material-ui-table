import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import renderIf from 'render-if';

const TableHeader = ({headers, editable}) => (
  <TableHead>
    <TableRow>
      {renderIf(editable)(() => (
        <TableCell>Actions</TableCell>
      ))}
      {headers.map((header) => <TableCell>{header.name}</TableCell>)}
    </TableRow>
  </TableHead>
);

export default TableHeader;