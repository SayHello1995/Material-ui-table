import React from 'react';
import TextField from '@material-ui/core/TextField';

const TimePicker = ({label, defaultValue, onChange, value}) => (
  <TextField label={label} type="time" defaultValue={defaultValue}
             InputLabelProps={{shrink: true}}
             inputProps={{step: 300}} style={{width: "100%"}}
             onChange={onChange} value={value}
  />
);

export default TimePicker;