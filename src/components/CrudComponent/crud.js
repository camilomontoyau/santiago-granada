import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CrudTable from './childs/crudTable';

/**
 * Reusable crud component
 * @param {string} title title that will be show in the top of the page
 * @param {array} data array of objects
 * @param {function} updateData function that provide the update operation for the main data
 * @param {function} handleDelete function that provide the delete operation on the database
 * @param {function} handleUpdate function that provide the update operation on the database
 * @param {function} handleCreate function that provide the create operation on the database
 */
const Crud = ({ title, data, updateData, handleDelete, handleUpdate, handleCreate }) => {

  const style = {
    container: {
      maxWidth: '800px'
    },
    title: {
      textAlign: 'center'
    }
  }

  return (
    <Container style={style.container}>
      <Grid container spacing={3}>
        <Grid style={style.title} item xs={12} mx={6}>
          <h1>{title}</h1>
        </Grid>
        <Grid item xs={12}>
          <CrudTable
            data={data}
            updateData={updateData}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            handleCreate={handleCreate}
          />
        </Grid>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Crud;