import { useEffect, useState } from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const Crud = ({ title, children

}) => {

    useEffect(()=>{
        console.log(children);
    },[]);
    return (
        <Container style={{maxWidth: '800px'}}>
            <Grid container spacing={3}>
                <Grid style={{textAlign: 'center'}} item xs={12} mx={6}>
                    <h1>{title}</h1>
                </Grid>
                <Grid style={{backgroundColor: 'blue'}}  item xs={12}>
                    Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </Grid>
            </Grid>
        </Container>
    );
}

export default Crud;