import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import renderIf from 'render-if';
import TableActions from "./TableActions";

class TableRowComponent extends React.Component {

  state = {
    editModeEnabled: false,
    rowData: {}
  };

  componentDidMount() {
    this.setState(state => ({...state, rowData: this.props.row}))
  }

  changeEditMode = (val) => {
    this.setState(state => ({...state, editModeEnabled: val}))
  };

  changeInput = (fieldName) => (event) => {
    const value = event.target.value;
    this.setState(state => ({...state, rowData: {...state.rowData, [fieldName]: value}}));
  };

  saveChanges = () => {
    this.props.onSave(this.state.rowData);
    this.changeEditMode(false);
  };

  deleteRow = () => {
    this.props.onDelete(this.props.row);
  };

  render() {
    const {editable} = this.props;

    return (
      <TableRow>
        {renderIf(editable)(() => (
          <TableActions editModeEnabled={this.state.editModeEnabled} changeEditMode={this.changeEditMode}
                        onSave={this.saveChanges} onDelete={this.deleteRow}/>
        ))}
        {renderIf(this.state.editModeEnabled)(() => this.props.headers.map((h) =>
          <TableCell key={this.props.row.id + h.field + "cell"}>
            {React.cloneElement(h.inputComponent, {
              onChange: this.changeInput(h.field),
              value: this.state.rowData[h.field]
            })}
          </TableCell>
        ))}
        {
          renderIf(!this.state.editModeEnabled)(() => this.props.headers.map((h) =>
            <TableCell>{this.props.row[h.field]}</TableCell>))
        }
      </TableRow>
    )
  }
}

export default TableRowComponent;