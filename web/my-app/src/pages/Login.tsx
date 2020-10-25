import { Paper, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React from 'react';

const Login = () => {
    return (
        <>
            <Grid container direction="row" justify="center">
                <Grid>
                    <Paper elevation={5} style={{padding: '20px'}}>
                        <Typography variant="h4" align="center">
                            로그인
                        </Typography>
                        <img src="/button/kakao.png" style={{width:'200px'}}/>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
}

export default Login;