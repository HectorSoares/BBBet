import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { simpleQuestions } from '../../../util/constants';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
import User from '../../../domain/model/User';
import Brother from '../../../domain/model/Brother';
import { Grid } from '@material-ui/core';
import Week from '../../../domain/model/manager/Week';
import BetResults from '../../../domain/model/results/BetResults';
import { returnActiveBet } from '../../../util/functions';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#1976d2',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
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

export default function Timeline() {
    const users: User[] | undefined = useSelector((state: RootState) => state.listUser.users );
    const weeks: Week[] | undefined = useSelector((state: RootState) => state.betPage.weeks );
    
    const onCellClickTable = (row: any) => {
      console.log('clicou ehin', row.id);
    }


  return (
    <Grid container
    direction="row"
    justifyContent="center"
    alignItems="center"
    >
    <Paper sx={{ 
      width: '70%',
     overflow: 'hidden',
     
      }}>
      <TableContainer component={Paper} sx={{maxHeight: 500, width: '100%' }} >
        <Table stickyHeader sx={{ width: '100%' }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Nome</StyledTableCell>
              {weeks?.map((row, index) => (
                <StyledTableCell align="left">{index+1}° Rodada</StyledTableCell>              
                ))
                
              }
              <StyledTableCell align="left">Total</StyledTableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((row) => (
              <StyledTableRow key={row.firstName}>
                <StyledTableCell style={{ zIndex: 900 }} component="th" scope="row" onClick={() => onCellClickTable(row)}>
                  {row.id}
                </StyledTableCell>
                  { weeks?.map((rowWeek, index) => (
                    <StyledTableCell align="left" onClick={() => onCellClickTable(row)}>{row?.bets[index+1]?.points  || 0}</StyledTableCell >
                  ))}
                  <StyledTableCell align="left" onClick={() => onCellClickTable(row)}>{row?.totalPoints}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
    </Grid>
  );
}
