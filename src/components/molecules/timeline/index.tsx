import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers";
import User from "../../../domain/model/User";
import { Grid } from "@material-ui/core";
import Week from "../../../domain/model/manager/Week";
import CustomLineMarkChart from "../../atoms/custom-line-mark-chart";
import { useState } from "react";
import { detectMob } from "../../../util/functions";

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

export default function Timeline() {
  const users: User[] | undefined = useSelector(
    (state: RootState) => state.listUser.users
  );
  const weeks: Week[] | undefined = useSelector(
    (state: RootState) => state.betPage.weeks
  );

  const [graphData, setGraphData] = useState<any | undefined>([]);
  const [currentRow, setCurrentRow] = useState<any | undefined>(undefined);
  const arrayRank = [];

  const returnSumPointsUtilWeek = (key: number, user: any) => {
    let sum = 0;
    for (let i = 1; i <= key; i++) {
      sum = sum + (user?.bets[i]?.points || 0);
    }
    return sum;
  };

  const pointsByUser = users?.map((user: any) =>
    Object.keys(user.bets).map((key: any) => returnSumPointsUtilWeek(key, user))
  );

  if (weeks && pointsByUser) {
    weeks?.forEach((w: Week, index: any) => {
      if (index + 1 < weeks.length) {
        arrayRank[index] = pointsByUser
          ?.map((p: any) => p[index])
          .sort(function compare(a, b) {
            if (a < b) return 1;
            if (a > b) return -1;
            return 0;
          });
      }
    });
  }

  const returnDataGraph = (row: any) => {
    return Object.keys(row.bets).map((k: string) => {
      return { x: parseInt(k), y: row.bets[k].points || 0 };
    });

    // var positionsArray = arrayRank.map((rankWeek:any, i:any) => rankWeek.findIndex((p:number) => row.bets[i+1]?.points == p));
    // var data = positionsArray.map((p:number,i:number) =>  {
    //   return {x: i+1, y: p+1}
    // });
    // console.log(data, arrayRank);
    // return data;
  };

  const onCellClickTable = (row: any) => {
    setGraphData(returnDataGraph(row));
    setCurrentRow(row);
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
                <StyledTableCell
                  align="left"
                  style={{
                    position: "sticky",
                    left: 0,
                    zIndex: 900,
                  }}
                >
                  Nome
                </StyledTableCell>
                {weeks?.map((row, index) => (
                  <StyledTableCell key={index} align="left">
                    {index + 1}° Rodada
                  </StyledTableCell>
                ))}
                <StyledTableCell align="left">Total</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users?.map((row, index) => (
                <StyledTableRow key={row.firstName}>
                  <StyledTableCell
                    style={{
                      position: "sticky",
                      left: 0,
                      backgroundColor: index % 2 == 0 ? "#f5f5f5" : "white",
                    }}
                    component="th"
                    scope="row"
                    onClick={() => onCellClickTable(row)}
                  >
                    {row.id}
                  </StyledTableCell>
                  {weeks?.map((_rowWeek, i) => (
                    <StyledTableCell
                      key={i}
                      align="left"
                      onClick={() => onCellClickTable(row)}
                    >
                      {row?.bets[i + 1]?.points || 0}
                    </StyledTableCell>
                  ))}
                  <StyledTableCell
                    align="left"
                    onClick={() => onCellClickTable(row)}
                  >
                    {row?.totalPoints}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <CustomLineMarkChart
        label={`Pontuação por semana - ${currentRow?.id || ""}`}
        data={graphData}
      />
    </Grid>
  );
}
