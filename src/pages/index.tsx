import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from "react";
import { Box } from '@mui/material';

interface Rows{
      id: number,
      name:string,
      username: string,
      email: string,
      address: {
          street: string,
          suite: string,
          city: string,
          zipcode: string,
          geo: {
              lat: string,
              lng: string
          }
      },
      phone: string,
      website: string,
      company: {
          name: string,
          catchPhrase: string,
          bs: string
      }
  }

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Home: React.FC<any>=({data})=> {

  return (
    <Box sx={{ width: "100%" ,padding:"20px 40px"}}>
      {" "}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Username</StyledTableCell>
              <StyledTableCell align="right">Phone</StyledTableCell>
              <StyledTableCell align="right">Website</StyledTableCell>
              <StyledTableCell align="right">City</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row:Rows) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.username}</StyledTableCell>
                <StyledTableCell align="right">{row.phone}</StyledTableCell>
                <StyledTableCell align="right">{row.website}</StyledTableCell>
                <StyledTableCell align="right">{row.address.city}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export async function getServerSideProps() {
  
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const data = await res.json()

  return { props: { data } }
}

export default Home;