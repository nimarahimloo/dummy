import React from 'react';
import AdapterJalali from "@date-io/date-fns-jalali";
import {TextField} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from '@mui/x-date-pickers';

export default function JalaliDatePicket({label, value, setValue, startAdornment}) {
    return (
        <LocalizationProvider dateAdapter={AdapterJalali}>
            <DatePicker
                value={value}
                label={label}
                inputFormat="yyyy/MM/dd"
                closeOnSelect={true}
                views={['month', 'day']}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                slotProps={{
                    textField: {
                        helperText: 'MM/DD/YYYY',
                    },
                }}
                renderInput={(params) => <TextField {...params}  sx={{width:"100%"}} />}

            />
        </LocalizationProvider>
    );
}