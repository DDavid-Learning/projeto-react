import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Formulario: React.FC = () =>{
 //teste
    const formik = useFormik ({
        initialValues: {
            name: '',
            email: '',
            senha: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('O campo Nome é obrigatório'),
            email: Yup.string().email('Digite um email válido').required('O campo Email é obrigatório'),
            senha: Yup.string().min(6, 'A senha deve ter no mínimo 6').required('O campo Senha é obrigatório'),
        }),
        onSubmit: (valeus) =>{
            console.log(valeus);
        },
    });

    return (
        <Grid
        container
        spacing={10}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{minHeight: '100vh'}}
        >

        
        <form onSubmit={formik.handleSubmit}>
            
            <Grid item style={{ marginBottom: '16px' }}>
            <TextField
                id="name"
                name="name"
                label="Nome"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                className="Input"
            />
            </Grid>

            <Grid item style={{ marginBottom: '16px' }}>
            <TextField
                id="senha"
                name="senha"
                label="Senha"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.senha}
                error={formik.touched.senha && Boolean(formik.errors.senha)}
                helperText={formik.touched.senha && formik.errors.senha}
                className="Input"
            />
            </Grid>

            <Grid item style={{ marginBottom: '16px' }}>
            <TextField
                id="email"
                name="email"
                label="E-mail"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                className="Input"
            />
            </Grid>

            <Grid item>
            <Button type="submit" variant="contained" color="primary" className="butao">
                Envair
                </Button>
            </Grid>
            </form>
        </Grid>
    );
};

export default Formulario;
