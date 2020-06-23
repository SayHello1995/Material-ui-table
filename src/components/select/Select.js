import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const SelectComponent = ({value, values, onChange}) => (
  <Select value={value} onChange={onChange} style={{width: "100%"}}>
    {values.map(v => <MenuItem key={v} value={v}>{v}</MenuItem>)}
  </Select>
);

export default SelectComponent;