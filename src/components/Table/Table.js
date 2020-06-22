import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButtonComponent from './IconButtonComponent';
import Input from '@material-ui/core/Input';

const PaperStyles = {
    root: {
        width: 800,
        margin: "auto",
        maxHeight: 500,
        overflowY: "scroll"
    }
}

const TableHeaders = [
    {name: "godz.od", field: "timeFrom",},
    {name: "godz.do", field: "timeTo", },
    {name: "Kierunek", field: "direction", },
    {name: "Status", field: "status", },
    {name: "Komentarz", field: "comment", },
]

const InputCmp = ({type}) => <Input type={type} onChange={}/>



class TableHC extends React.Component {

    state = {
        rows: []
    }

    addRow = () => {
        let NewRows = this.state.rows
        let NewRowId = NewRows.length === 0 ? 1 : NewRows[NewRows.length - 1].id + 1
        NewRows.push({id: NewRowId, timeFrom: <InputCmp type="time"/>, timeTo:'', direction:'', status:'', comment:''}) 
        this.setState({rows: NewRows}) 
    }

    deleteRow = (id) => {
        this.setState(state => ({...state, rows: state.rows.filter(r => r.id !== id)}))
    }

    editRow = (id) => {
        console.log(id)
    }

    render() {
        const rows = this.state.rows
        const Actions = [
            {onClick: (row) => () => this.deleteRow(row.id), icon: <DeleteIcon/>},
            {onClick: (row) => () => this.editRow(row.id), icon: <EditIcon/>}
        ]
        return (
            <Paper style={PaperStyles.root}>
                <div style={{display: "flex", justifyContent:"space-between"}}>
                    <h2 >Weryfikacja odcinka pomiarowego 06610</h2>
                    <Button startIcon={<AddIcon/>} color="primary" onClick={this.addRow}>Dodać wiersz</Button>
                </div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Actions</TableCell>
                            {TableHeaders.map((header) => <TableCell>{header.name}</TableCell>)}
                        </TableRow>   
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => {
                            return (
                                <TableRow>
                                    <TableCell>
                                        {Actions.map((action) => {
                                            return (
                                                <IconButtonComponent icon={action.icon} onClick={action.onClick(row)}/>
                                            )
                                        })}
                                    </TableCell>
                                    {TableHeaders.map((h) => {
                                        return(
                                            <TableCell>{row[h.field]}</TableCell>      
                                        )                                       
                                    })}
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
                
            </Paper>
        )
    }
}

export default TableHC