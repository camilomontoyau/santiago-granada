
import CrudActionButton from './crudButtonAction';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
const style = {
  title:{
    textAlign: 'center'
  },
  buttons:{
    justifyContent: 'space-around'
  }
}

/**
 * Provide modal dialog to showing element data
 * @param {object} item element that will be show in the dialog
 * @param {function} handleAction function that provide the action to execute 
 * @param {string} buttonColor 
 * @param {string} operation define how will work the dialog
 */
const CrudDialog = ({ item, handleAction, buttonColor, operation }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAction(event.target);
    handleClose();
  }

  
  return (
    <>
      <CrudActionButton
        handleClick={handleOpen}
        buttonIcon={operation}
        buttonColor={buttonColor}
      />
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" style={style.title}>
          {operation} character
        </DialogTitle>
        <DialogContent>
          <form id="dialogForm" onSubmit={handleSubmit}>
            {
              Object.keys(item).map((field, index) => {
                return (
                  <TextField
                    autoFocus
                    margin="dense"
                    key={index}
                    id={field + index}
                    label={field}
                    defaultValue={ operation !== 'create'? item[field]:''}
                    disabled={field === "id" ? true : false}
                    type="text"
                    fullWidth
                  />
                )

              })
            }
          </form>
        </DialogContent>
        <DialogActions style={style.buttons}>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button form={'dialogForm'} type={'submit'} color="primary">
            {operation}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default CrudDialog;