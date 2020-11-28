import { useEffect, useState } from "react";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import CrudActionButton from './CrudButtonAction';
import CrudDialog from './CrudDialog';

/**
 * Provide the main table for showing the data
 * @param {array} data array of objects
 * @param {function} updateData function that provide the update operation for the main data
 * @param {function} handleDelete function that provide the delete operation on the database
 * @param {function} handleUpdate function that provide the update operation on the database
 * @param {function} handleCreate function that provide the create operation on the database
 * 
 */
const CrudTable = ({ data, updateData, handleDelete, handleUpdate, handleCreate}) => {
  const [labels, setLabels] = useState([]);

  const formatLabel = (label) => {
    return label.toUpperCase().replace("_", " ");
  }

  const deleteElement = async (elementId) => {
    await handleDelete(elementId);
    updateData();
  }
  const updateElement = async (element) => {
    await handleUpdate(element);
    updateData();
  }
  const createElement = async (element) => {
    await handleCreate(element);
    updateData();
  }

  useEffect(() => {
    setLabels(Object.keys(data[0]));
  }, [data])

  return (
    <>
      <TableContainer component={Paper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {labels.map((label, index) => (
                <TableCell key={index} style={{ fontWeight: '700' }}> {formatLabel(label)} </TableCell>
              ))}
              <TableCell key={'action'} style={{ fontWeight: '700' }}> {formatLabel('Actions')} </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => {
              return (
                <TableRow align="center" key={index}>
                  {
                    Object.entries(item).map((key, i) => {
                      return (
                        <TableCell key={i} >
                          {key[1]}
                        </TableCell>
                      )
                    })
                  }
                  <TableCell>
                    <CrudActionButton
                      buttonIcon={'delete'}
                      buttonColor={'secondary'}
                      handleClick={() => deleteElement(item.id)}
                    />
                    <CrudDialog
                      operation={'edit'}
                      buttonColor={'primary'}
                      handleAction={updateElement}
                      item={item}
                    />
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>

        </Table>
      </TableContainer>
      <CrudDialog
        operation={'create'}
        buttonColor={'primary'}
        handleAction={createElement}
        item={data[0]}
      />
    </>
  );
}

export default CrudTable;