import React, {useState} from 'react';
import {FormProvider, RHFTextField} from "../components/hook-form";
import {Grid, Stack, TextField} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import AdapterJalali from "@date-io/date-fns-jalali";
import {MobileDatePicker} from "@mui/x-date-pickers";
import {LoadingButton} from "@mui/lab";
import * as Yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";

export default function Information() {
    const [birthDate, setBirthDate] = useState(new Date());

    const CompanySchema = Yup.object().shape({
        first_name: Yup.string(),
        last_name: Yup.string(),
    });

    const defaultValues = {
        first_name: '',
        last_name: '',
    }


    const methods = useForm({
        resolver: yupResolver(CompanySchema),
        defaultValues
    });

    const {
        handleSubmit,
        formState: {isSubmitting},
    } = methods;

    const onSubmit = async (data) => {
        // handle form submission
    };
    return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} mb="2em" mt="2em">
            <Grid container spacing={5}>
                <Grid lg={4} sm={12} item>
                    <RHFTextField name="first_name" label="نام"/>
                </Grid>
                <Grid lg={4} sm={12} item>
                    <RHFTextField name="last_name" label="نام خانوادگی"/>
                </Grid>
                <Grid lg={4} sm={12} item>
                    <LocalizationProvider dateAdapter={AdapterJalali}>
                        <MobileDatePicker
                            value={birthDate}
                            label="تاریخ تولد"
                            inputFormat="yyyy/mm/dd"
                            views={['month', 'day']}
                            onChange={(newValue) => {
                                setBirthDate(newValue);
                            }}
                            renderInput={({inputRef, inputProps, InputProps}) => (
                                <>
                                    <TextField {...inputProps} sx={{width:"100%"}}/>
                                    {InputProps?.endAdornment}
                                </>
                            )}
                        />
                    </LocalizationProvider>
                </Grid>
            </Grid>
        </Stack>
        <LoadingButton fullWidth size="large" type="submit" variant="contained"
                       sx={{fontWeight: "normal", fontSize: "13px"}} loading={isSubmitting}>
            ثبت
        </LoadingButton>
    </FormProvider>
    );
}