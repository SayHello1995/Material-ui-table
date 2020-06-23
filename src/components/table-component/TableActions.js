import React from 'react';
import Box from '@material-ui/core/Box';
import renderIf from 'render-if';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import IconButtonComponent from "../Table/IconButtonComponent";
import TableCell from '@material-ui/core/TableCell';

const TableActions = ({editModeEnabled, changeEditMode, onDelete, onSave}) => (
  <TableCell>
    <Box display="flex">
      {renderIf(!editModeEnabled)(() => [
        <IconButtonComponent onClick={() => changeEditMode(true)} key="edit-action">
          <EditIcon/>
        </IconButtonComponent>,
        <IconButtonComponent onClick={onDelete} key="delete-action">
          <DeleteIcon/>
        </IconButtonComponent>
      ])}
      {renderIf(editModeEnabled)(() => [
        <IconButtonComponent onClick={onSave} key="save-action">
          <CheckIcon/>
        </IconButtonComponent>,
        <IconButtonComponent onClick={() => changeEditMode(false)} key="cancel-action">
          <CloseIcon/>
        </IconButtonComponent>
      ])}
    </Box>
  </TableCell>
);

export default TableActions;