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



interface BetsTableProps {
    week: Week;
}

export default function BetTable({week}: BetsTableProps) {
    var weekId = week?.week;
    var activeBet = returnActiveBet(week);
    const user: User | undefined = useSelector((state: RootState) => state.user.user );

    const users: User[] | undefined = useSelector((state: RootState) => state.listUser.users );
    const brothers: Brother[] | undefined = useSelector((state: RootState) => state.betPage.brothers );

    const returnBrotherName = (id: any, betIndex: string) => {
        if(!id || !brothers) return '-';    
        if(activeBet && activeBet[betIndex] && !user?.admin ) return '?';
        var brother = brothers.find((b) => b.id === id);
        return brother?.name || '-';
    }

  const returnEliminationPercentage = (bet: BetResults) => {
    if(activeBet?.eliminationPercentage && !user?.admin) return '?';
    if(!bet?.eliminationPercentage || bet?.eliminationPercentage === 101) return '-';
    return bet?.eliminationPercentage;
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
      <TableContainer component={Paper} sx={{maxHeight: 500, width: '100%' }}>
        <Table stickyHeader sx={{ width: '100%' }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nome</StyledTableCell>
              <StyledTableCell align="left">{simpleQuestions.leader}</StyledTableCell>
              <StyledTableCell align="left">{simpleQuestions.angel}</StyledTableCell>
              <StyledTableCell align="left">{simpleQuestions.bigPhone}</StyledTableCell>
              <StyledTableCell align="left">{simpleQuestions.angelImmunized}</StyledTableCell>
              <StyledTableCell align="left">{simpleQuestions.firstIndicated}</StyledTableCell>
              <StyledTableCell align="left">{simpleQuestions.secondIndicated}</StyledTableCell>
              <StyledTableCell align="left">{simpleQuestions.thirdIndicated}</StyledTableCell>
              <StyledTableCell align="left">{simpleQuestions.fourthIndicated}</StyledTableCell>
              <StyledTableCell align="left">{simpleQuestions.fifthIndicated}</StyledTableCell>
              <StyledTableCell align="left">{simpleQuestions.eliminatedParticipant}</StyledTableCell>
              <StyledTableCell align="left">{simpleQuestions.eliminationPercentage}</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((row) => (
              <StyledTableRow key={row.firstName}>
                <StyledTableCell style={{ zIndex: 900 }} component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                  <StyledTableCell align="left">{returnBrotherName(row?.bets[weekId]?.leader, 'leader')}</StyledTableCell>
                  <StyledTableCell align="left">{returnBrotherName(row?.bets[weekId]?.angel, 'angel')}</StyledTableCell>
                  <StyledTableCell align="left">{returnBrotherName(row?.bets[weekId]?.bigPhone, 'bigPhone')}</StyledTableCell>
                  <StyledTableCell align="left">{returnBrotherName(row?.bets[weekId]?.angelImmunized, 'angelImmunized')}</StyledTableCell>
                  <StyledTableCell align="left">{returnBrotherName(row?.bets[weekId]?.firstIndicated, 'firstIndicated')}</StyledTableCell>
                  <StyledTableCell align="left">{returnBrotherName(row?.bets[weekId]?.secondIndicated, 'secondIndicated')}</StyledTableCell>
                  <StyledTableCell align="left">{returnBrotherName(row?.bets[weekId]?.thirdIndicated, 'thirdIndicated')}</StyledTableCell>
                  <StyledTableCell align="left">{returnBrotherName(row?.bets[weekId]?.fourthIndicated, 'fourthIndicated')}</StyledTableCell>
                  <StyledTableCell align="left">{returnBrotherName(row?.bets[weekId]?.fifthIndicated, 'fifthIndicated')}</StyledTableCell>
                  <StyledTableCell align="left">{returnBrotherName(row?.bets[weekId]?.eliminatedParticipant, 'eliminatedParticipant')}</StyledTableCell>
                  <StyledTableCell align="right">{returnEliminationPercentage(row?.bets[weekId])}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
    </Grid>
  );
}
