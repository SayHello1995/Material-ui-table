import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableActions from "./TableActions";

class TableNewRow extends React.Component {
  state = {
    newRow: {}
  };

  changeInput = (fieldName) => (event) => {
    const value = event.target.value;
    this.setState(state => ({...state, newRow: {...state.newRow, [fieldName]: value}}));
  };

  onSave = () => {
    this.props.onSave(this.state.newRow);
    this.props.changeEditMode(false);
  };

  render() {
    return (
      <TableRow>
        <TableActions editModeEnabled={true} changeEditMode={this.props.changeEditMode} onSave={this.onSave}/>
        {this.props.headers.map(h => (
          <TableCell>
            {React.cloneElement(h.inputComponent, {
              onChange: this.changeInput(h.field),
              value: this.state.newRow[h.field]
            })}
          </TableCell>
        ))}
      </TableRow>
    );
  }
}

export default TableNewRow;