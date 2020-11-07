import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const ButtonAction = ({ handleClick, operation, item}) => {
    return (
        <Fab
            size={'small'}
            color={ 'secondary'}
            onClick={handleClick(item.id)}
        >
            {operation == 'edit' ? <EditIcon /> : <DeleteOutlineIcon />}
        </Fab>
        )
}

export default ButtonAction;