import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const Datee = () => {
  return (
    <Stack noValidate spacing={3}>
      <TextField
        label="Dia"
        type="date"
        defaultValue="2022-12-20"
        sx={{ width: 200 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Hora"
        type="time"
        defaultValue="07:30"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        sx={{ width: 200 }}
      />
    </Stack>
  );
}
export default Datee;