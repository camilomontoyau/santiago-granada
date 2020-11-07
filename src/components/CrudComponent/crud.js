import { useEffect, useState } from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CrudTable from './childs/crudTable';

const Crud = ({
  crud,
  children,
  data
}) => {
  return (
    <Container style={{ maxWidth: '800px' }}>
      <Grid container spacing={3}>
        <Grid style={{ textAlign: 'center' }} item xs={12} mx={6}>
          <h1>Hola mundo</h1>
        </Grid>
        <Grid style={{ backgroundColor: 'blue' }} item xs={12}>

          <CrudTable data={data} />

        </Grid>
        <Grid item xs={12}>
            <Dialog
              buttonLabel={dialogBtnLabel}
              description={dialogDescription}
              buttonPosition={buttonPosition}
              dialogButtonLabel="Crear"
              title={"Create"}
              fields={data[0]}
              action={createAction}
            />
          </Grid>
      </Grid>
    </Container>
  );
}

export default Crud;