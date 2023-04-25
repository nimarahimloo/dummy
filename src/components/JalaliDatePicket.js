import React from 'react';
import AdapterJalali from "@date-io/date-fns-jalali";
import {MobileDatePicker} from "@mui/x-date-pickers";
import {InputAdornment, TextField} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";

export default function JalaliDatePicket({label , value , setValue , startAdornment}) {
    return (
        <LocalizationProvider dateAdapter={AdapterJalali}>
            <MobileDatePicker
                value={value}
                label={label}
                inputFormat="yyyy/MM/dd"
                closeOnSelect={true}
                views={['month', 'day']}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={({inputRef, inputProps, InputProps}) => (
                    <>
                        <TextField {...inputProps} sx={{width:"100%"}} InputProps={{
                            ...InputProps,
                            startAdornment: (
                                <InputAdornment position="start">{startAdornment}
                                </InputAdornment>
                            ),
                        }}/>
                        {InputProps?.endAdornment}
                    </>
                )}
            />
        </LocalizationProvider>
    );
}