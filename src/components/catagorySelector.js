import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



export default function CatagoryBox({options,SetSelectedOption,selectedOption}) {
  const [value, setValue] = React.useState(selectedOption);
  const [inputValue, setInputValue] = React.useState('');


  return (
    <div>
     
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {

          setValue(newValue);
          SetSelectedOption(newValue);


        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Categories" />}
      />
    </div>
  );
}
