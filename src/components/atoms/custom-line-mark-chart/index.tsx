import { Grid, Paper, Typography } from "@mui/material";
import {
  HorizontalGridLines,
  LineMarkSeries,
  XAxis,
  XYPlot,
  YAxis,
} from "react-vis";
import "../../../../node_modules/react-vis/dist/style.css";

interface CustomLineMarkChartProps {
  data?: any;
  label?: string;
}

export default function CustomLineMarkChart({
  data,
  label,
}: CustomLineMarkChartProps) {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
      >
        <Paper elevation={4} sx={{ margin: "3px", padding: "10px" }}>
          <Typography variant="overline">{label}</Typography>

          <XYPlot
            height={300}
            width={600}
            margin={{ left: 45, right: 20, top: 10, bottom: 45 }}
            axisEnd={{ x: 19, y: 50 }}
            axisStart={{ x: 10, y: 0 }}
          >
            <HorizontalGridLines />
            <XAxis
              on0
              attr={"x"}
              tickValues={[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19,
              ]}
              title="Semanas"
            />
            <YAxis title="Pontos" />
            <LineMarkSeries
              style={{
                strokeWidth: "3px",
              }}
              data={data}
            />
            <LineMarkSeries
              style={{
                strokeWidth: "0px",
              }}
              data={[{ x: 0, y: 63 }]}
            />
            <LineMarkSeries
              style={{
                strokeWidth: "0px",
              }}
              data={[{ x: 0, y: 0 }]}
            />
          </XYPlot>
        </Paper>
      </Grid>
    </>
  );
}
