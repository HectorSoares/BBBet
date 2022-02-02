
import '@aws-amplify/ui/dist/style.css'
import { Box,  CssBaseline, Grid,  Tab, Tabs,  } from '@mui/material';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import TocIcon from '@mui/icons-material/Toc';
import { useEffect, useState } from 'react';
import AutocompleteBet from '../../../atoms/autocomplete';
import TabPanel from '../../../organisms/tab-panel';
import BetTable from '../../../molecules/bet-table';
import BetInfo from '../../../organisms/bet-info';
import Brother from '../../../../domain/model/Brother';
import Week from '../../../../domain/model/manager/Week';
import User from '../../../../domain/model/User';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/reducers';
import { setUser } from '../../identificate-page/store/actions';
import { setBrothers, setListBetManager } from '../../bet-page/store/actions';
import { setListUser } from '../../competition-page/store/actions';
import { Auth } from 'aws-amplify';
import { returnActiveWeek } from '../../../../util/functions';
import SimpleBackdrop from '../../../atoms/backdrop';



export default function ResultsPage() {
  const dispatch = useDispatch();

    const brothers: Brother[] | undefined = useSelector((state: RootState) => state.betPage.brothers );
    const weeks: Week[] | undefined = useSelector((state: RootState) => state.betPage.weeks );
    const user: User | undefined = useSelector((state: RootState) => state.user.user );
    const users: User[] | undefined = useSelector((state: RootState) => state.listUser.users );

    const [value, setValue] = useState<number>(0);
    const [loading,setLoading] = useState<boolean>(false);
    const [activeWeek,setActiveWeek] = useState<Week | undefined>(returnActiveWeek(weeks));

    const [week, setWeek] = useState<string | undefined>(activeWeek?.week);

    useEffect(function () {
      setActiveWeek(returnActiveWeek(weeks));
    }, [weeks]);

    useEffect(function () {
  
    async function setData(){
      
      if(!users || !user || !brothers || !weeks){
        setLoading(true);
        dispatch(setUser((await Auth.currentAuthenticatedUser().then(user => user)).username));
        dispatch(await setListBetManager());
        dispatch(await setBrothers());
        dispatch(await setListUser());
        setLoading(false);
      }
    }
    setData();
  
  }, [dispatch]);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
      <div>
        <CssBaseline /> 
        <SimpleBackdrop open ={loading}/>
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
            <Grid sx={{width: '200px'}}>
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
               <BetTable week={week}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <BetInfo week={week}/>
            </TabPanel>
        </Box>
    </div>
  );
}
function setActiveWeek(arg0: any) {
  throw new Error('Function not implemented.');
}
