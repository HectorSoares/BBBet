
import '@aws-amplify/ui/dist/style.css'
import { Box,  CssBaseline, Grid,  Tab, Tabs,  } from '@mui/material';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import TocIcon from '@mui/icons-material/Toc';
import { useState } from 'react';
import AutocompleteBet from '../../../atoms/autocomplete';
import TabPanel from '../../../organisms/tab-panel';
import BetsTable from '../../../molecules/bets-table';



export default function ResultsPage() {

    const [value, setValue] = useState<number>(0);
    const [week, setWeek] = useState<string>('1');

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
      <div>
        <CssBaseline />

        
        
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
            <Grid sx={{width: '180px'}}>
                <AutocompleteBet items={['1','2','3','4']} label={'Semana'} onChange={setWeek}/>
            </Grid>            

            <Box sx={{ borderBottom: 1, borderColor: 'divider',display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%' }}
                >
          
            <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">            
                <Tab icon={<TocIcon />} aria-label="table" />
                <Tab icon={<DataSaverOffIcon />} aria-label="graphs" />            
            </Tabs>            
          </Box>
          <TabPanel value={value} index={0}>
               <BetsTable week={week}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
        </Box>
    </div>
  );
}
