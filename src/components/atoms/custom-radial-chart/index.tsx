import { Grid, Paper, Typography } from "@mui/material";
import { RadialChart } from "react-vis";

interface CustomRadialChartProps {
  data?: any;
  label?: string;
}

export default function CustomRadialChart({
  data,
  label,
}: CustomRadialChartProps) {
  const sum = data.reduce(
    (partialSum: number, a: any) => partialSum + a.angle,
    0
  );
  const percentage = 100 / sum;

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

          <RadialChart
            data={data}
            animation={{ damping: 20, stiffness: 300 }}
            showLabels
            style={{ stroke: "#fff" }}
            labelsStyle={{ fontSize: "0.8rem" }}
            labelsAboveChildren={true}
            colorRange={[
              "red",
              "blue",
              "green",
              "yellow",
              "orange",
              "purple",
              "#9D695A",
              "#4ECDC4",
              "#734B5E",
              "#3943B7",
              "#ED9390",
              "#FF8600",
              "#7B7554",
            ]}
            radius={110}
            width={250}
            height={250}
            padAngle={() => 0.025}
          ></RadialChart>
        </Paper>
        <Paper elevation={4} sx={{ margin: "3px", padding: "10px" }}>
          <Grid
            item
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-end"
          >
            {data
              .sort(function compare(a: any, b: any) {
                if (a.angle < b.angle) return 1;
                if (a.angle > b.angle) return -1;
                return 0;
              })
              .map((d: any, index: any) => {
                return (
                  <Typography key={index}>
                    {d.label} - {(percentage * d.angle).toFixed(2)}%
                  </Typography>
                );
              })}
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}
