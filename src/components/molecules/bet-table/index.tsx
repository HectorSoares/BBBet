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
    week: string;
}

export default function BetTable({week}: BetsTableProps) {
    const users: User[] | undefined = useSelector((state: RootState) => state.listUser.users );
    const brothers: Brother[] | undefined = useSelector((state: RootState) => state.betPage.brothers );

    const returnBrotherName = (id: any) => {
        if(!id || !brothers){
            return '-';
        }
        var brother = brothers.find((b) => b.id === id);
        return brother?.name || '-';
    }

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 440, maxWidth: '100%' }}>
      <Table stickyHeader sx={{ width: '1200px' }} aria-label="customized table">
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
                <StyledTableCell align="left">{returnBrotherName(row?.bets[week]?.leader)}</StyledTableCell>
                <StyledTableCell align="left">{returnBrotherName(row?.bets[week]?.angel)}</StyledTableCell>
                <StyledTableCell align="left">{returnBrotherName(row?.bets[week]?.bigPhone)}</StyledTableCell>
                <StyledTableCell align="left">{returnBrotherName(row?.bets[week]?.angelImmunized)}</StyledTableCell>
                <StyledTableCell align="left">{returnBrotherName(row?.bets[week]?.firstIndicated)}</StyledTableCell>
                <StyledTableCell align="left">{returnBrotherName(row?.bets[week]?.secondIndicated)}</StyledTableCell>
                <StyledTableCell align="left">{returnBrotherName(row?.bets[week]?.thirdIndicated)}</StyledTableCell>
                <StyledTableCell align="left">{returnBrotherName(row?.bets[week]?.fourthIndicated)}</StyledTableCell>
                <StyledTableCell align="left">{returnBrotherName(row?.bets[week]?.fifthIndicated)}</StyledTableCell>
                <StyledTableCell align="left">{returnBrotherName(row?.bets[week]?.eliminatedParticipant)}</StyledTableCell>
                <StyledTableCell align="right">{ (row?.bets[week]?.eliminationPercentage === 101 && '-' ) || row?.bets[week]?.eliminationPercentage || '-'}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
