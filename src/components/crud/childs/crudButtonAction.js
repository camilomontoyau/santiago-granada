import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

/**
 * Reusable button component
 * @param {function} handleClick handler for the button event
 * @param {string} buttonIcon 
 * @param {string} buttonColor 
 * 
 */
const ButtonAction = ({ handleClick, buttonIcon, buttonColor}) => {
const style ={
  button:{
    margin: '5px'
  }
}
  return (
    <Fab
      size={'small'}
      color={buttonColor}
      onClick={handleClick}
      style={style.button}
    >
      {
        buttonIcon === 'edit' ? <EditIcon />
          :
          (buttonIcon === 'create' ? <AddCircleOutlinedIcon /> : <DeleteOutlineIcon />)
      }
    </Fab>
  );
}

export default ButtonAction;