
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
import User from '../../../domain/model/User';
import CustomRadialChart from '../../atoms/custom-radial-chart';
import Brother from '../../../domain/model/Brother';
import { questions } from '../../../util/constants';
import { useEffect, useState } from 'react';


interface BetInfoProps {
    week: string;
}

interface DataProps {
  angle: number,
  label: string,
  id: number
}

var currentDataLeader: any = [];
var currentDataAngel: any = [];
var currentDataBigPhone: any = [];
var currentDataFirstIndicated: any = [];
var currentDataSecondIndicated: any = [];
var currentDataThirdIndicated: any = [];
var currentDataFourthIndicated: any = [];
var currentDataFifthIndicated: any = [];
var currentDataEliminatedParticipant: any = [];



export default function BetInfo({week}: BetInfoProps) {
    const users: User[] | undefined = useSelector((state: RootState) => state.listUser.users );
    const brothers: Brother[] | undefined = useSelector((state: RootState) => state.betPage.brothers );

    const [dataLeader, setDataLeader]  = useState<Array<DataProps> | undefined>(undefined); 
    const [dataAngel, setDataAngel]  = useState<Array<DataProps> | undefined>(undefined);
    const [dataBigPhone, setDataBigPhone]  = useState<Array<DataProps> | undefined>(undefined);
    const [dataFirstIndicated, setDataFirstIndicated]  = useState<Array<DataProps> | undefined>(undefined);
    const [dataSecondIndicated, setDataSecondIndicated]  = useState<Array<DataProps> | undefined>(undefined);
    const [dataThirdIndicated, setDataThirdIndicated]  = useState<Array<DataProps> | undefined>(undefined);
    const [dataFourthIndicated, setDataFourthIndicated]  = useState<Array<DataProps> | undefined>(undefined);
    const [dataFifthIndicated, setDataFifthIndicated]  = useState<Array<DataProps> | undefined>(undefined);
    const [dataEliminatedParticipant, setDataEliminatedParticipant]  = useState<Array<DataProps> | undefined>(undefined);

    

    const getBrotherNameById = (id:string) => { var brother = brothers?.find((b) => b.id === id); return brother?.nickname || brother?.name };
    

    const addData = (id:any, data:any) => {
      
      if(id){
        if(data){
          var uei =  data.find((d: DataProps) => d.id === id );
          if(uei){
            uei.angle+=1;
          } else {
            data.push({angle: 1, label: getBrotherNameById(id), id})
          }
        } else {
          data= [{angle: 1, label: getBrotherNameById(id), id}]
        }
      }
      return data;
      
    }

  useEffect(function () {
  
    async function setData(){

      setDataLeader(undefined);
    setDataAngel(undefined);
    setDataBigPhone(undefined);
    setDataFirstIndicated(undefined);
    setDataSecondIndicated(undefined);
    setDataThirdIndicated(undefined);
    setDataFourthIndicated(undefined);
    setDataFifthIndicated(undefined);
    setDataEliminatedParticipant(undefined);

      users?.forEach((user) => {
      currentDataLeader = (addData(user.bets[week]?.leader, currentDataLeader));
      currentDataAngel = (addData(user.bets[week]?.angel, currentDataAngel));
      currentDataBigPhone = (addData(user.bets[week]?.bigPhone, currentDataBigPhone));
      currentDataFirstIndicated = (addData(user.bets[week]?.firstIndicated, currentDataFirstIndicated));
      currentDataSecondIndicated = (addData(user.bets[week]?.secondIndicated, currentDataSecondIndicated));
      currentDataThirdIndicated = (addData(user.bets[week]?.thirdIndicated, currentDataThirdIndicated));
      currentDataFourthIndicated = (addData(user.bets[week]?.fourthIndicated, currentDataFourthIndicated));
      currentDataFifthIndicated = (addData(user.bets[week]?.fifthIndicated, currentDataFifthIndicated));
      currentDataEliminatedParticipant = (addData(user.bets[week]?.eliminatedParticipant, currentDataEliminatedParticipant));
      
    });
    console.log(currentDataLeader, dataLeader);
    setDataLeader(currentDataLeader);
    setDataAngel(currentDataAngel);
    setDataBigPhone(currentDataBigPhone);
    setDataFirstIndicated(currentDataFirstIndicated);
    setDataSecondIndicated(currentDataSecondIndicated);
    setDataThirdIndicated(currentDataThirdIndicated);
    setDataFourthIndicated(currentDataFourthIndicated);
    setDataFifthIndicated(currentDataFifthIndicated);
    setDataEliminatedParticipant(currentDataEliminatedParticipant);
    }
    setData();
    console.log(week, dataLeader?.length);
  }, [week]);
    


  return (
      <>

        {(dataLeader?.length != 0 ) && <CustomRadialChart data={currentDataLeader} label={questions.leader}/>}
        {(dataAngel?.length != 0 ) && <CustomRadialChart data={currentDataAngel} label={questions.angel}/>}
        {(dataBigPhone?.length != 0 ) && <CustomRadialChart data={currentDataBigPhone} label={questions.bigPhone}/>}
        {(dataFirstIndicated?.length != 0 ) && <CustomRadialChart data={currentDataFirstIndicated} label={questions.firstIndicated}/>}
        {(dataSecondIndicated?.length != 0 ) && <CustomRadialChart data={currentDataSecondIndicated} label={questions.secondIndicated}/>}
        {(dataThirdIndicated?.length != 0 ) && <CustomRadialChart data={currentDataThirdIndicated} label={questions.thirdIndicated}/>}
        {(dataFourthIndicated?.length != 0 ) && <CustomRadialChart data={currentDataFourthIndicated} label={questions.fourthIndicated}/>}
        {(dataFifthIndicated?.length != 0 ) && <CustomRadialChart data={currentDataFifthIndicated} label={questions.fifthIndicated}/>}
        {(dataEliminatedParticipant?.length != 0 ) && <CustomRadialChart data={currentDataEliminatedParticipant} label={questions.eliminatedParticipant}/>}
       
      </>
  );
}
