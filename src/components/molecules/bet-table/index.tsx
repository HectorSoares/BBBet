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
import TableSortLabel from "@mui/material/TableSortLabel";
import Week from "../../../domain/model/manager/Week";
import BetResults from "../../../domain/model/results/BetResults";
import {
  detectMob,
  getComparator,
  returnActiveBet,
  stableSort,
} from "../../../util/functions";
import HeadCell from "../../../domain/model/HeadCell";
import { useEffect, useState } from "react";

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
  const [order, setOrder] = useState<any>("asc");
  const [orderBy, setOrderBy] = useState<any>("id");
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

  const [headCells, setHeadCells] = useState<Array<HeadCell> | undefined>(
    undefined
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

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: any
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const createSortHandler =
    (property: any) => (event: React.MouseEvent<unknown>) => {
      handleRequestSort(event, property);
    };

  useEffect(
    function () {
      const setHeadCellsFunction = async () => {
        if (week) {
          setHeadCells([
            {
              id: "id",
              numeric: false,
              orderly: true,
              disablePadding: true,
              isVisible: true,
              label: "Nome",
            },
            {
              id: "leader",
              numeric: false,
              orderly: false,
              disablePadding: true,
              isVisible: !!week?.bets.find((b) => b.leader),
              label: simpleQuestions.leader,
            },
            {
              id: "angel",
              numeric: false,
              orderly: false,
              disablePadding: false,
              isVisible: !!week?.bets.find((b) => b.angel),
              label: simpleQuestions.angel,
            },
            {
              id: "bigPhone",
              numeric: false,
              orderly: false,
              disablePadding: false,
              isVisible: !!week?.bets.find((b) => b.bigPhone),
              label: simpleQuestions.bigPhone,
            },
            {
              id: "angelImmunized",
              numeric: false,
              orderly: false,
              disablePadding: false,
              isVisible: !!week?.bets.find((b) => b.angelImmunized),
              label: simpleQuestions.angelImmunized,
            },
            {
              id: "firstIndicated",
              numeric: false,
              orderly: false,
              disablePadding: false,
              isVisible: !!week?.bets.find((b) => b.firstIndicated),
              label: simpleQuestions.firstIndicated,
            },
            {
              id: "secondIndicated",
              numeric: false,
              orderly: false,
              disablePadding: false,
              isVisible: !!week?.bets.find((b) => b.secondIndicated),
              label: simpleQuestions.secondIndicated,
            },
            {
              id: "thirdIndicated",
              numeric: false,
              orderly: false,
              disablePadding: false,
              isVisible: !!week?.bets.find((b) => b.thirdIndicated),
              label: simpleQuestions.thirdIndicated,
            },
            {
              id: "fourthIndicated",
              numeric: false,
              orderly: false,
              disablePadding: false,
              isVisible: !!week?.bets.find((b) => b.fourthIndicated),
              label: simpleQuestions.fourthIndicated,
            },
            {
              id: "fifthIndicated",
              numeric: false,
              orderly: false,
              disablePadding: false,
              isVisible: !!week?.bets.find((b) => b.fifthIndicated),
              label: simpleQuestions.fifthIndicated,
            },
            {
              id: "eliminatedParticipant",
              numeric: false,
              orderly: false,
              disablePadding: false,
              isVisible: !!week?.bets.find((b) => b.eliminatedParticipant),
              label: simpleQuestions.eliminatedParticipant,
            },
            {
              id: "eliminationPercentage",
              numeric: true,
              orderly: true,
              disablePadding: false,
              isVisible: !!week?.bets.find((b) => b.eliminationPercentage),
              label: simpleQuestions.eliminationPercentage,
            },
          ]);
        }
      };
      setHeadCellsFunction();
    },
    [week]
  );

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <TableContainer
        component={Paper}
        sx={{ maxHeight: 500, width: detectMob() ? "100%" : "70%" }}
      >
        <Table
          stickyHeader
          sx={{ width: "100%" }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              {headCells?.map((headCell) => (
                <>
                  {headCell.isVisible && (
                    <>
                      {headCell.orderly ? (
                        <StyledTableCell
                          key={headCell.id}
                          style={{
                            position:
                              headCell.id == "id" ? "sticky" : undefined,
                            left: 0,
                            zIndex: 900,
                          }}
                        >
                          <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : "asc"}
                            onClick={createSortHandler(headCell.id)}
                          >
                            {headCell.label}
                          </TableSortLabel>
                        </StyledTableCell>
                      ) : (
                        <StyledTableCell key={headCell.id}>
                          {headCell.label}
                        </StyledTableCell>
                      )}
                    </>
                  )}
                </>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              stableSort(
                users.map((u) => {
                  return {
                    eliminationPercentage:
                      u.bets[weekId]?.eliminationPercentage,
                    ...u,
                  };
                }),
                getComparator(order, orderBy)
              ).map((row) => (
                <StyledTableRow key={row.firstName}>
                  <StyledTableCell
                    style={{
                      position: "sticky",
                      left: 0,
                      backgroundColor: "white",
                    }}
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
    </Grid>
  );
}
