import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { green, red, yellow } from "@mui/material/colors";
import { simpleQuestions } from "../../../util/constants";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers";
import User from "../../../domain/model/User";
import Brother from "../../../domain/model/Brother";
import { Grid } from "@material-ui/core";
import Week from "../../../domain/model/manager/Week";
import BetResults from "../../../domain/model/results/BetResults";
import { detectMob, returnActiveBet } from "../../../util/functions";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1976d2",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface BetsTableProps {
  week: Week;
}

export default function BetTable({ week }: BetsTableProps) {
  const weekId = week?.week;
  const activeBet = returnActiveBet(week);
  const user: User | undefined = useSelector(
    (state: RootState) => state.user.user
  );
  const users: User[] | undefined = useSelector(
    (state: RootState) => state.listUser.users
  );
  const brothers: Brother[] | undefined = useSelector(
    (state: RootState) => state.betPage.brothers
  );

  const returnCellStyle = (
    flag: boolean,
    index?: string,
    answer?: number,
    arrayAnswer?: any
  ) => {
    let style = {};

    if (!flag) style = { backgroundColor: red[200] };

    if (arrayAnswer?.includes(answer)) style = { backgroundColor: yellow[200] };

    if (flag) style = { backgroundColor: green[200] };

    if (index && activeBet && activeBet[index]) style = {};
    return style;
  };

  const returnBrotherName = (id: any, betIndex: string) => {
    if (!id || !brothers) return "-";
    if (activeBet && activeBet[betIndex] && !user?.admin) return "?";
    const brother = brothers.find((b) => b.id === id);
    return brother?.nickname || brother?.name || "-";
  };

  const returnEliminationPercentage = (bet: BetResults) => {
    if (activeBet?.eliminationPercentage && !user?.admin) return "?";
    if (!bet?.eliminationPercentage || bet?.eliminationPercentage === 101)
      return "-";
    return bet?.eliminationPercentage;
  };

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Paper
        sx={{
          width: detectMob() ? "100%" : "70%",
          overflow: "hidden",
        }}
      >
        <TableContainer
          component={Paper}
          sx={{ maxHeight: 500, width: "100%" }}
        >
          <Table
            stickyHeader
            sx={{ width: "100%" }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>Nome</StyledTableCell>
                {week?.bets.find((b) => b.leader) && (
                  <StyledTableCell align="left">
                    {simpleQuestions.leader}
                  </StyledTableCell>
                )}
                {week?.bets.find((b) => b.angel) && (
                  <StyledTableCell align="left">
                    {simpleQuestions.angel}
                  </StyledTableCell>
                )}
                {week?.bets.find((b) => b.bigPhone) && (
                  <StyledTableCell align="left">
                    {simpleQuestions.bigPhone}
                  </StyledTableCell>
                )}
                {week?.bets.find((b) => b.angelImmunized) && (
                  <StyledTableCell align="left">
                    {simpleQuestions.angelImmunized}
                  </StyledTableCell>
                )}
                {week?.bets.find((b) => b.firstIndicated) && (
                  <StyledTableCell align="left">
                    {simpleQuestions.firstIndicated}
                  </StyledTableCell>
                )}
                {week?.bets.find((b) => b.secondIndicated) && (
                  <StyledTableCell align="left">
                    {simpleQuestions.secondIndicated}
                  </StyledTableCell>
                )}
                {week?.bets.find((b) => b.thirdIndicated) && (
                  <StyledTableCell align="left">
                    {simpleQuestions.thirdIndicated}
                  </StyledTableCell>
                )}
                {week?.bets.find((b) => b.fourthIndicated) && (
                  <StyledTableCell align="left">
                    {simpleQuestions.fourthIndicated}
                  </StyledTableCell>
                )}
                {week?.bets.find((b) => b.fifthIndicated) && (
                  <StyledTableCell align="left">
                    {simpleQuestions.fifthIndicated}
                  </StyledTableCell>
                )}
                {week?.bets.find((b) => b.eliminatedParticipant) && (
                  <StyledTableCell align="left">
                    {simpleQuestions.eliminatedParticipant}
                  </StyledTableCell>
                )}
                {week?.bets.find((b) => b.eliminationPercentage) && (
                  <StyledTableCell align="right">
                    {simpleQuestions.eliminationPercentage}
                  </StyledTableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {users?.map((row) => (
                <StyledTableRow key={row.firstName}>
                  <StyledTableCell
                    style={{ zIndex: 900 }}
                    component="th"
                    scope="row"
                  >
                    {row.id}
                  </StyledTableCell>
                  {week?.bets.find((b) => b.leader) && (
                    <StyledTableCell
                      align="left"
                      sx={returnCellStyle(
                        row?.bets[weekId]?.correctLeader,
                        "leader"
                      )}
                    >
                      {returnBrotherName(row?.bets[weekId]?.leader, "leader")}
                    </StyledTableCell>
                  )}
                  {week?.bets.find((b) => b.angel) && (
                    <StyledTableCell
                      align="left"
                      sx={returnCellStyle(
                        row?.bets[weekId]?.correctAngel,
                        "angel"
                      )}
                    >
                      {returnBrotherName(row?.bets[weekId]?.angel, "angel")}
                    </StyledTableCell>
                  )}
                  {week?.bets.find((b) => b.bigPhone) && (
                    <StyledTableCell
                      align="left"
                      sx={returnCellStyle(
                        row?.bets[weekId]?.correctBigPhone,
                        "bigPhone"
                      )}
                    >
                      {returnBrotherName(
                        row?.bets[weekId]?.bigPhone,
                        "bigPhone"
                      )}
                    </StyledTableCell>
                  )}
                  {week?.bets.find((b) => b.angelImmunized) && (
                    <StyledTableCell
                      align="left"
                      sx={returnCellStyle(
                        row?.bets[weekId]?.correctAngelImmunized,
                        "angelImmunized"
                      )}
                    >
                      {returnBrotherName(
                        row?.bets[weekId]?.angelImmunized,
                        "angelImmunized"
                      )}
                    </StyledTableCell>
                  )}
                  {week?.bets.find((b) => b.firstIndicated) && (
                    <StyledTableCell
                      align="left"
                      sx={returnCellStyle(
                        row?.bets[weekId]?.correctFirstIndicated,
                        "firstIndicated",
                        row?.bets[weekId]?.firstIndicated,
                        row?.bets[weekId]?.eliminatedPartiallyCorrect
                      )}
                    >
                      {returnBrotherName(
                        row?.bets[weekId]?.firstIndicated,
                        "firstIndicated"
                      )}
                    </StyledTableCell>
                  )}
                  {week?.bets.find((b) => b.secondIndicated) && (
                    <StyledTableCell
                      align="left"
                      sx={returnCellStyle(
                        row?.bets[weekId]?.correctSecondIndicated,
                        "secondIndicated",
                        row?.bets[weekId]?.secondIndicated,
                        row?.bets[weekId]?.eliminatedPartiallyCorrect
                      )}
                    >
                      {returnBrotherName(
                        row?.bets[weekId]?.secondIndicated,
                        "secondIndicated"
                      )}
                    </StyledTableCell>
                  )}
                  {week?.bets.find((b) => b.thirdIndicated) && (
                    <StyledTableCell
                      align="left"
                      sx={returnCellStyle(
                        row?.bets[weekId]?.correctThirdIndicated,
                        "thirdIndicated",
                        row?.bets[weekId]?.thirdIndicated,
                        row?.bets[weekId]?.eliminatedPartiallyCorrect
                      )}
                    >
                      {returnBrotherName(
                        row?.bets[weekId]?.thirdIndicated,
                        "thirdIndicated"
                      )}
                    </StyledTableCell>
                  )}
                  {week?.bets.find((b) => b.fourthIndicated) && (
                    <StyledTableCell
                      align="left"
                      sx={returnCellStyle(
                        row?.bets[weekId]?.correctFourthIndicated,
                        "fourthIndicated",
                        row?.bets[weekId]?.fourthIndicated,
                        row?.bets[weekId]?.eliminatedPartiallyCorrect
                      )}
                    >
                      {returnBrotherName(
                        row?.bets[weekId]?.fourthIndicated,
                        "fourthIndicated"
                      )}
                    </StyledTableCell>
                  )}
                  {week?.bets.find((b) => b.fifthIndicated) && (
                    <StyledTableCell
                      align="left"
                      sx={returnCellStyle(
                        row?.bets[weekId]?.correctFifthIndicated,
                        "fifthIndicated",
                        row?.bets[weekId]?.fifthIndicated,
                        row?.bets[weekId]?.eliminatedPartiallyCorrect
                      )}
                    >
                      {returnBrotherName(
                        row?.bets[weekId]?.fifthIndicated,
                        "fifthIndicated"
                      )}
                    </StyledTableCell>
                  )}
                  {week?.bets.find((b) => b.eliminatedParticipant) && (
                    <StyledTableCell
                      align="left"
                      sx={returnCellStyle(
                        row?.bets[weekId]?.correctEliminationParticipant,
                        "eliminatedParticipant"
                      )}
                    >
                      {returnBrotherName(
                        row?.bets[weekId]?.eliminatedParticipant,
                        "eliminatedParticipant"
                      )}
                    </StyledTableCell>
                  )}
                  {week?.bets.find((b) => b.eliminationPercentage) && (
                    <StyledTableCell
                      align="right"
                      sx={returnCellStyle(
                        row?.bets[weekId]?.correctEliminationPercentage ||
                          row?.bets[weekId]?.closerPercentage
                      )}
                    >
                      {returnEliminationPercentage(row?.bets[weekId])}
                    </StyledTableCell>
                  )}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Grid>
  );
}
