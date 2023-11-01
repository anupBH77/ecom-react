import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SortBox({setSort,sort}) {
  // const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    // setAge(event.target.value );
    console.log(sort,"degsrgsr")
    setSort(event.target.value)

  };

  return (
    <Box sx={{ minWidth: 120 ,maxWidth:120, marginRight:2}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">sort </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"rating"}>Rating</MenuItem>
          <MenuItem value={"lth"}>Price:low to high</MenuItem>
          <MenuItem value={"htl"}>Price:high to low</MenuItem>
          <MenuItem value={"popularity"}>Popularity</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
