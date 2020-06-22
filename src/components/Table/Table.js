import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import EditableTable from './EditableTable';
import Input from '@material-ui/core/Input'

class TableHC extends React.Component {

    state = {
        rows: [],
        actions: [],
    }

    TableHeaders = [
        {name: "godz.od", field: "timeFrom",},
        {name: "godz.do", field: "timeTo", },
        {name: "Kierunek", field: "direction", },
        {name: "Status", field: "status", },
        {name: "Komentarz", field: "comment", },
    ]

    TableActions = {
        Delete: {onClick: (row) => () => this.deleteRow(row.id), icon: <DeleteIcon/> },
        Edit: {onClick: (row) => () => this.editRow(row.id), icon: <EditIcon/>},
        Confirm: {onClick: (row) => () => this.confirmRow(row.id), icon: <CheckIcon/>},
        Close: {onClick: (row) => () => this.closeRow(row.id), icon: <CloseIcon/>}
    }

    addRow = () => {
        let NewRows = this.state.rows
        let NewRowId = NewRows.length === 0 ? 1 : NewRows[NewRows.length - 1].id + 1
        NewRows.push({id: NewRowId, timeFrom: '', timeTo:'', direction:'', status:'', comment:''}) 
        this.setState({
            rows: NewRows,
            actions: [
                this.TableActions.Confirm, 
                this.TableActions.Close
            ]
        }) 
    }

    deleteRow = (id) => {
        this.setState(state => ({...state, rows: state.rows.filter(r => r.id !== id)}))
    }

    editRow = (id) => {
        let NewRows = this.state.rows
        let foundRowIndex = NewRows.findIndex(row => row.id === id)
        NewRows[foundRowIndex] = {id: id, timeFrom: <Input/>, timeTo:<Input/>, direction:<Input/>, status:<Input/>, comment:<Input/>}
        this.setState({rows: NewRows})
    }

    confirmRow = (id) => {
        console.log('confirmed')
    }

    closeRow = (id) => {
        console.log('closed')
    }

    render() {

        return (
            <EditableTable TableHeaders={this.TableHeaders} Actions={this.state.actions} Rows={this.state.rows} addRow={this.addRow}/>
        )
    }
}

export default TableHC