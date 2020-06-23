import React from 'react';
import Input from '@material-ui/core/Input'
import TableComponent from "../table-component/TableComponent";
import SelectComponent from "../select/Select";
import TimePicker from "../time-picker/TimePicker";

class TableHC extends React.Component {

  state = {
    data: [
      {
        id: 1,
        timeFrom: "10:30",
        timeTo: "11:30",
        direction: "Direction1",
        status: "Open",
        comment: "Nowy komentarz"
      },
      {
        id: 2,
        timeFrom: "10:30",
        timeTo: "11:30",
        direction: "Direction1",
        status: "Open",
        comment: "Nowy komentarz"
      },
      {
        id: 3,
        timeFrom: "10:30",
        timeTo: "11:30",
        direction: "Direction1",
        status: "Open",
        comment: "Nowy komentarz"
      },
      {
        id: 4,
        timeFrom: "10:30",
        timeTo: "11:30",
        direction: "Direction1",
        status: "Open",
        comment: "Nowy komentarz"
      }
    ]
  };

  headers = [
    {
      name: "Godz. od",
      field: "timeFrom",
      inputComponent: <TimePicker/>
    },
    {
      name: "Godz. do",
      field: "timeTo",
      inputComponent: <TimePicker/>
    },
    {
      name: "Kierunek",
      field: "direction",
      inputComponent: <SelectComponent values={["kierunek prawy P", "kierunek lewy L"]}/>
    },
    {
      name: "Status",
      field: "status",
      inputComponent: <SelectComponent values={["oznacz dane", "wyklucz dane"]}/>
    },
    {
      name: "Komentarz",
      field: "comment",
      inputComponent: <Input type="text"/>
    },
  ];

  onDelete = (row) => {
    this.setState(state => ({...state, data: state.data.filter(r => r.id !== row.id)}))
  };

  onEdit = (row) => {
    const {data} = this.state;
    const newData = data.filter(r => r.id !== row.id);
    this.setState(state => ({...state, data: [...newData, row]}))
  };


  generateId = (existing) => {
    const id = Math.floor((Math.random() * 1000) + 1);
    if(existing.includes(id)) {
      return this.generateId(existing)
    }
    return id;
  };

  onSave = (row) => {
    const id = this.generateId(this.state.data.map(d => d.id)); // fixme
    const newData = [...this.state.data, {id: id, ...row}];
    this.setState(state => ({...state, data: newData}));
  };

  render() {
    return (
      <TableComponent onSave={this.onSave} onDelete={this.onDelete} onEdit={this.onEdit} headers={this.headers} data={this.state.data}
                      tableName={"Weryfikacja odcinka pomiarowego nr#"} editable={true}/>
    )
  }
}

export default TableHC