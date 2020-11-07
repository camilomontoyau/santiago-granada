import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useEffect, useState } from "react";
import CrudActionButton from './buttonAction';

const CrudTable = ({ data }) => {
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    setLabels(Object.keys(data[0]))
  }, [data])

const handleDeleteClick = () =>{
console.log("entre");
}



  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {labels.map((label) => (
              <TableCell > {label} </TableCell>
            ))}
            <TableCell> Actions </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return (
              <TableRow key={index} align="center" >
                {
                  Object.entries(item).map((key, index) => {
                    return (<TableCell >{key[1]}</TableCell>)
                  })
                }
                <TableCell>
                 
                  <CrudActionButton
                    operation={'delete'}
                    handleClick={handleDeleteClick}
                    item={item}
                  />
                  <CrudActionButton
                    operation={'edit'}
                    handleClick={handleDeleteClick}
                    item={item}
                  />
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CrudTable;