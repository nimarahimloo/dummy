import React, {useState} from 'react';
import {FormProvider, RHFTextField} from "../components/hook-form";
import {Grid, Stack} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import * as Yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import JalaliDatePicket from "../components/JalaliDatePicket";


/**
 * Information Form
 * @returns {JSX.Element}
 * @constructor
 */
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
        <Stack mb="2em" mt="2em">
            <Grid container spacing={5}>
                <Grid md={4} xs={12} item>
                    <RHFTextField name="first_name" label="نام"/>
                </Grid>
                <Grid md={4} xs={12} item>
                    <RHFTextField name="last_name" label="نام خانوادگی"/>
                </Grid>
                <Grid md={4} xs={12} item>
                    <JalaliDatePicket label="تاریخ تولد" value={birthDate} setValue={setBirthDate} startAdornment="انتخاب تاریخ تولد"/>
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