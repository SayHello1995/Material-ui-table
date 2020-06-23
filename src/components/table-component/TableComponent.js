import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Typography from '@material-ui/core/Typography';
import TableHeader from "./TableHeader";
import TableRowComponent from "./TableRow";
import renderIf from 'render-if';
import TableNewRow from "./TableNewRow";
import ButtonComponent from "../button/Button";

class TableComponent extends React.PureComponent {

  state = {
    newRowActive: false
  };

  changeNewRowActive = (val) => {
    this.setState(state => ({...state, newRowActive: val}))
  };

  render() {
    return (
      <Paper>
        <Typography variant="h5" align="center">
          {this.props.tableName}
        </Typography>
        <Table>
          <TableHeader headers={this.props.headers} editable={this.props.editable}/>
          <TableBody>
            {this.props.data.map((row) => <TableRowComponent row={row} headers={this.props.headers}
                                                             onDelete={this.props.onDelete}
                                                             editable={this.props.editable}
                                                             onSave={this.props.onEdit}/>)}
            {renderIf(this.state.newRowActive)(() => (
              <TableNewRow headers={this.props.headers} changeEditMode={this.changeNewRowActive} onSave={this.props.onSave}/>
            ))}
            {renderIf(this.props.editable && !this.state.newRowActive)(() => (
              <ButtonComponent label="Dodać wiersz"
                               onClick={() => this.changeNewRowActive(true)}
                               style={{margin: "10px"}}
              />
            ))}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default TableComponent;