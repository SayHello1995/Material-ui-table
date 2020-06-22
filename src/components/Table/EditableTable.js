import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import IconButtonComponent from './IconButtonComponent';

const PaperStyles = {
    root: {
        width: 800,
        margin: "auto",
        maxHeight: 500,
        overflowY: "scroll"
    }
}

const EditableTable = (props) => {

    return (
        
        <Paper style={PaperStyles.root}>
                <div style={{display: "flex", justifyContent:"space-between"}}>
                    <h2 >Weryfikacja odcinka pomiarowego 06610</h2>
                    <Button startIcon={<AddIcon/>} color="primary" onClick={props.addRow}>Dodać wiersz</Button>
                </div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Actions</TableCell>
                            {props.TableHeaders.map((header) => <TableCell>{header.name}</TableCell>)}
                        </TableRow>   
                    </TableHead>
                    <TableBody>
                        {props.Rows.map((row) => {
                            return (
                                <TableRow>
                                    <TableCell>
                                        {props.Actions.map((action) => {
                                            return (
                                                <IconButtonComponent icon={action.icon} onClick={action.onClick(row)} disabled={action.disabled}/>
                                            )
                                        })}
                                    </TableCell>
                                    {props.TableHeaders.map((h) => {
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

export default EditableTable;
