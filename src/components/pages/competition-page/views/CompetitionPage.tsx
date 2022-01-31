import { Box } from "@material-ui/core";
import { Grid, Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "../../../../domain/model/User";
import { RootState } from "../../../../store/reducers";
import SimpleBackdrop from "../../../atoms/backdrop";
import { setListUser } from "../store/actions";


const CompetitionPage = () => {

  const dispatch = useDispatch();


  const users: User[] | undefined = useSelector((state: RootState) => state.listUser.users );
  const [loading,setLoading] = useState<boolean>(false);


    useEffect(function () {
    
      async function setData(){
        setLoading(true);
        dispatch(await setListUser());
        setLoading(false);
      }
      setData();
    
    }, [dispatch]);



  return (
    <>
    <SimpleBackdrop open ={loading}/>
    <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >

          {users?.sort((u) => u.totalPoints).map((item, index) => {
          
          return (
            <>
            <Paper elevation={3} sx={{mb: '5px', padding: '15px', width: '300px', alignItems: 'center', backgroundColor: index <= 2 ? '#e5fded' : '#fff' }}>

              <Grid container
              direction="row"
              justifyContent="space-between"
              alignItems="center">
                  <Typography> {index+1}°  </Typography>
                  <Typography> {(item.firstName || item.id || 'sem nome').toUpperCase()} </Typography>
                  <Typography> {item.totalPoints}  </Typography>
              </Grid>
              
            </Paper>


            </>
          );
        })}

          
        </Box>
      
    </>
  );
};

export default CompetitionPage;