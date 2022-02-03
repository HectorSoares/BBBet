
import { Typography } from '@mui/material';
import { useState } from 'react';
import {Hint, RadialChart} from 'react-vis';


interface CustomRadialChartProps {
    data?: any;
    label?: string;
}

export default function CustomRadialChart({data, label}: CustomRadialChartProps) {

    const [value, setValue] = useState(false);

  return (
      <>
    <Typography>{label}</Typography>
    <RadialChart
        data={data}
        animation={{ damping: 20, stiffness: 300 }}
        showLabels
        style={{ stroke: "#fff" }}
        labelsStyle={{fontSize:'0.8rem'}}
        labelsAboveChildren={true}
        colorRange={['#9D695A','#4ECDC4','#734B5E', '#3943B7','#ED9390', '#FF8600', '#7B7554']}
        radius={100}
        width={220}
        height={220}
        padAngle={() => 0.02} >
        {value && <Hint value={value} orientation={'bottomright'} />}
        </RadialChart>
        </>
  );
}
