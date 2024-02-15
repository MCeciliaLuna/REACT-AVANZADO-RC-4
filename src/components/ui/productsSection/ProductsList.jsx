import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useContext, useEffect } from 'react';
import { ProductContext } from '../../../contexts/ProductContext';
import styles from '../../../../styles.module.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function ProductList() {
  const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    const { state, getAllProducts } = useContext(ProductContext)
  

  useEffect(() => {
    getAllProducts()
  }, [])
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableBody>
          {state.products.map((product) => (
            <StyledTableRow key={product.id}>
              <StyledTableCell className={styles.rowProduct} align="right">{product.id}</StyledTableCell>
              <StyledTableCell align="right">
                <img src={product.images[0]} className={styles.imageProduct} alt="product image" />
                </StyledTableCell>
              <StyledTableCell className={styles.rowProduct} align="right"><b>{product.title}</b></StyledTableCell>
              <StyledTableCell className={styles.rowProduct} align="right"><i>{product.brand}</i></StyledTableCell>
              <StyledTableCell className={styles.rowProduct} align="right">{product.category}</StyledTableCell>
              <StyledTableCell className={styles.rowProduct} align="right"><b>${product.price}</b></StyledTableCell>
              <StyledTableCell className={styles.rowProduct} align="right">📦: {product.stock}</StyledTableCell>
              <StyledTableCell className={styles.rowProduct} align="right">⭐ {product.rating}</StyledTableCell>
              <StyledTableCell className={styles.rowProduct} align="right">✏️ | ❌</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
    </TableContainer>
  );
}
