
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
import User from '../../../domain/model/User';
import CustomRadialChart from '../../atoms/custom-radial-chart';
import Brother from '../../../domain/model/Brother';
import { questions } from '../../../util/constants';
import { useState } from 'react';


interface BetInfoProps {
    week: string;
}

interface DataProps {
  angle: number,
  label: string,
  id: number
}



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

    users?.forEach((user) => {
      setDataLeader(addData(user.bets[week]?.leader, dataLeader));
      setDataAngel(addData(user.bets[week]?.angel, dataAngel));
      setDataBigPhone(addData(user.bets[week]?.bigPhone, dataBigPhone));
      setDataFirstIndicated(addData(user.bets[week]?.firstIndicated, dataFirstIndicated));
      setDataSecondIndicated(addData(user.bets[week]?.secondIndicated, dataSecondIndicated));
      setDataThirdIndicated(addData(user.bets[week]?.thirdIndicated, dataThirdIndicated));
      setDataFourthIndicated(addData(user.bets[week]?.fourthIndicated, dataFourthIndicated));
      setDataFifthIndicated(addData(user.bets[week]?.fifthIndicated, dataFifthIndicated));
      setDataEliminatedParticipant(addData(user.bets[week]?.eliminatedParticipant, dataEliminatedParticipant));
      
    });


  return (
      <>

        {(dataLeader?.length ) && <CustomRadialChart data={dataLeader} label={questions.leader}/>}
        {(dataAngel?.length ) && <CustomRadialChart data={dataAngel} label={questions.angel}/>}
        {(dataBigPhone?.length ) && <CustomRadialChart data={dataBigPhone} label={questions.bigPhone}/>}
        {(dataFirstIndicated?.length ) && <CustomRadialChart data={dataFirstIndicated} label={questions.firstIndicated}/>}
        {(dataSecondIndicated?.length ) && <CustomRadialChart data={dataSecondIndicated} label={questions.secondIndicated}/>}
        {(dataThirdIndicated?.length ) && <CustomRadialChart data={dataThirdIndicated} label={questions.thirdIndicated}/>}
        {(dataFourthIndicated?.length ) && <CustomRadialChart data={dataFourthIndicated} label={questions.fourthIndicated}/>}
        {(dataFifthIndicated?.length ) && <CustomRadialChart data={dataFifthIndicated} label={questions.fifthIndicated}/>}
        {(dataEliminatedParticipant?.length ) && <CustomRadialChart data={dataEliminatedParticipant} label={questions.eliminatedParticipant}/>}
       
      </>
  );
}
