import { Box } from "@material-ui/core";
import { Avatar, Grid,   Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "../../../../domain/model/User";
import Crown from "../../../../icons/Crown";
import { RootState } from "../../../../store/reducers";
import SimpleBackdrop from "../../../atoms/backdrop";
import { setUser } from "../../identificate-page/store/actions";
import { setListUser } from "../store/actions";


const CompetitionPage = () => {

  const dispatch = useDispatch();

  const users: User[] | undefined = useSelector((state: RootState) => state.listUser.users );
  const user: User | undefined = useSelector((state: RootState) => state.user.user );
  const [loading,setLoading] = useState<boolean>(false);

  const returnRelationPositionPoints = () => {
    var points = users?.map(u => u.totalPoints);
    var uniquePoints = points?.filter(function(item, pos) {
      return points?.indexOf(item) === pos;
      }).sort();
      return uniquePoints?.reverse().map((p, i) => {return {i,p}});
      
  }

  var relationPositionPoints: Array<{i:number, p:number}> = returnRelationPositionPoints() || [];


    useEffect(function () {
    
      async function setData(){
        setLoading(true);
        if(!users || !user){
          dispatch(setUser((await Auth.currentAuthenticatedUser().then(user => user)).username));
          dispatch(await setListUser());
        }
        setLoading(false);
      }
      setData();
    
    }, [dispatch]);

  const returnImage = (id: string) => {
    var img;
    console.log('id', id);
    try {
        img = require(`../midia/${id}.jpg`);
        return img;
      } catch (e) {
        console.log(e);
        img = require(`../midia/default.jpg`);
        return img;
      }
  }



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

          {users?.sort(function compare(a, b) {
                  if (a.totalPoints < b.totalPoints) return 1;
                  if (a.totalPoints > b.totalPoints) return -1;
                  return 0;
              }).map((item, index) => {
          return (

            <Grid container

              direction="row"
              justifyContent="center"
              alignItems="center">
                <Paper key={index} elevation={3} sx={{
                padding: '5px',
                  height: '53px',
                  width: '53px',
                  alignItems: 'center',
                  backgroundColor: index <= 2 ? '#e5fdedb0' : '#fff',
                  border: item.id === user?.id ? '#00f8ff4d' : 'none',
                  borderStyle: item.id === user?.id ?'solid' : 'none',
                  borderWidth: '1px',
                  margin: '5px'}}>      
            <Avatar alt="Remy Sharp" src={returnImage(item.id)} />
            </Paper>
            <Paper key={index} elevation={3} sx={{
             padding: '15px',
              width: '350px',
              alignItems: 'center',
              backgroundColor: index <= 2 ? '#e5fdedb0' : '#fff',
              border: item.id === user?.id ? '#00f8ff4d' : 'none',
              borderStyle: item.id === user?.id ?'solid' : 'none',
              borderWidth: '1px'}}>              
              <Grid container

              direction="row"
              justifyContent="space-between"
              alignItems="center">
                  
                  <Typography> {(relationPositionPoints?.find(r => r.p === item.totalPoints)).i + 1 }°  </Typography>                  
                  <Typography> {(((item.firstName === item.lastName) ? item.firstName : item.firstName + ' ' + item.lastName) || item.id || 'sem nome').toUpperCase()} {index === 0 && <Crown/>} </Typography>
                  <Typography> {item.totalPoints}  </Typography>
              </Grid>              
            </Paper>
            </Grid>
          );
        })}

          
        </Box>
      
    </>
  );
};

export default CompetitionPage;