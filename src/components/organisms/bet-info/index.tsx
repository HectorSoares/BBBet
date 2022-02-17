import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers";
import User from "../../../domain/model/User";
import CustomRadialChart from "../../atoms/custom-radial-chart";
import Brother from "../../../domain/model/Brother";
import { questions } from "../../../util/constants";
import { useEffect, useState } from "react";
import { returnActiveBet, returnActiveWeek } from "../../../util/functions";
import Week from "../../../domain/model/manager/Week";
import { Grid } from "@material-ui/core";

interface BetInfoProps {
  week?: Week;
}

interface DataProps {
  angle: number;
  label: string;
  percent: number;
  id: number;
}

let currentDataLeader: any = [];
let currentDataAngel: any = [];
let currentDataBigPhone: any = [];
let currentDataFirstIndicated: any = [];
let currentDataSecondIndicated: any = [];
let currentDataThirdIndicated: any = [];
let currentDataFourthIndicated: any = [];
let currentDataFifthIndicated: any = [];
let currentDataEliminatedParticipant: any = [];

export default function BetInfo({ week }: BetInfoProps) {
  const weekId = week?.week;
  const activeBet = returnActiveBet(week);
  const users: User[] | undefined = useSelector(
    (state: RootState) => state.listUser.users
  );
  const brothers: Brother[] | undefined = useSelector(
    (state: RootState) => state.betPage.brothers
  );
  const user: User | undefined = useSelector(
    (state: RootState) => state.user.user
  );

  const [dataLeader, setDataLeader] = useState<Array<DataProps> | undefined>(
    undefined
  );
  const [dataAngel, setDataAngel] = useState<Array<DataProps> | undefined>(
    undefined
  );
  const [dataBigPhone, setDataBigPhone] = useState<
    Array<DataProps> | undefined
  >(undefined);
  const [dataFirstIndicated, setDataFirstIndicated] = useState<
    Array<DataProps> | undefined
  >(undefined);
  const [dataSecondIndicated, setDataSecondIndicated] = useState<
    Array<DataProps> | undefined
  >(undefined);
  const [dataThirdIndicated, setDataThirdIndicated] = useState<
    Array<DataProps> | undefined
  >(undefined);
  const [dataFourthIndicated, setDataFourthIndicated] = useState<
    Array<DataProps> | undefined
  >(undefined);
  const [dataFifthIndicated, setDataFifthIndicated] = useState<
    Array<DataProps> | undefined
  >(undefined);
  const [dataEliminatedParticipant, setDataEliminatedParticipant] = useState<
    Array<DataProps> | undefined
  >(undefined);

  const getBrotherNameById = (id: string) => {
    const brother = brothers?.find((b) => b.id === id);
    return brother?.nickname || brother?.name;
  };

  const addData = (id: any, data: any) => {
    if (id) {
      if (data) {
        const uei = data.find((d: DataProps) => d.id === id);
        if (uei) {
          uei.angle += 1;
        } else {
          data.push({ angle: 1, label: getBrotherNameById(id), id });
        }
      } else {
        data = [{ angle: 1, label: getBrotherNameById(id), id }];
      }
    }
    return data;
  };

  useEffect(
    function () {
      currentDataLeader = [];
      currentDataAngel = [];
      currentDataBigPhone = [];
      currentDataFirstIndicated = [];
      currentDataSecondIndicated = [];
      currentDataThirdIndicated = [];
      currentDataFourthIndicated = [];
      currentDataFifthIndicated = [];
      currentDataEliminatedParticipant = [];

      async function setData() {
        setDataLeader(undefined);
        setDataAngel(undefined);
        setDataBigPhone(undefined);
        setDataFirstIndicated(undefined);
        setDataSecondIndicated(undefined);
        setDataThirdIndicated(undefined);
        setDataFourthIndicated(undefined);
        setDataFifthIndicated(undefined);
        setDataEliminatedParticipant(undefined);
        if (weekId) {
          users?.forEach((user) => {
            currentDataLeader = addData(
              user.bets[weekId]?.leader,
              currentDataLeader
            );
            currentDataAngel = addData(
              user.bets[weekId]?.angel,
              currentDataAngel
            );
            currentDataBigPhone = addData(
              user.bets[weekId]?.bigPhone,
              currentDataBigPhone
            );
            currentDataFirstIndicated = addData(
              user.bets[weekId]?.firstIndicated,
              currentDataFirstIndicated
            );
            currentDataSecondIndicated = addData(
              user.bets[weekId]?.secondIndicated,
              currentDataSecondIndicated
            );
            currentDataThirdIndicated = addData(
              user.bets[weekId]?.thirdIndicated,
              currentDataThirdIndicated
            );
            currentDataFourthIndicated = addData(
              user.bets[weekId]?.fourthIndicated,
              currentDataFourthIndicated
            );
            currentDataFifthIndicated = addData(
              user.bets[weekId]?.fifthIndicated,
              currentDataFifthIndicated
            );
            currentDataEliminatedParticipant = addData(
              user.bets[weekId]?.eliminatedParticipant,
              currentDataEliminatedParticipant
            );
          });
        }
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
    },
    [week]
  );

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      {(!activeBet?.leader || user?.admin) &&
        dataLeader &&
        dataLeader?.length > 0 && (
          <CustomRadialChart
            data={currentDataLeader}
            label={questions.leader}
          />
        )}
      {(!activeBet?.angel || user?.admin) &&
        dataAngel &&
        dataAngel?.length > 0 && (
          <CustomRadialChart data={currentDataAngel} label={questions.angel} />
        )}
      {(!activeBet?.bigPhone || user?.admin) &&
        dataBigPhone &&
        dataBigPhone?.length > 0 && (
          <CustomRadialChart
            data={currentDataBigPhone}
            label={questions.bigPhone}
          />
        )}
      {(!activeBet?.firstIndicated || user?.admin) &&
        dataFirstIndicated &&
        dataFirstIndicated?.length > 0 && (
          <CustomRadialChart
            data={currentDataFirstIndicated}
            label={questions.firstIndicated}
          />
        )}
      {(!activeBet?.secondIndicated || user?.admin) &&
        dataSecondIndicated &&
        dataSecondIndicated?.length > 0 && (
          <CustomRadialChart
            data={currentDataSecondIndicated}
            label={questions.secondIndicated}
          />
        )}
      {(!activeBet?.thirdIndicated || user?.admin) &&
        dataThirdIndicated &&
        dataThirdIndicated?.length > 0 && (
          <CustomRadialChart
            data={currentDataThirdIndicated}
            label={questions.thirdIndicated}
          />
        )}
      {(!activeBet?.fourthIndicated || user?.admin) &&
        dataFourthIndicated &&
        dataFourthIndicated?.length > 0 && (
          <CustomRadialChart
            data={currentDataFourthIndicated}
            label={questions.fourthIndicated}
          />
        )}
      {(!activeBet?.fifthIndicated || user?.admin) &&
        dataFifthIndicated &&
        dataFifthIndicated?.length > 0 && (
          <CustomRadialChart
            data={currentDataFifthIndicated}
            label={questions.fifthIndicated}
          />
        )}
      {(!activeBet?.eliminatedParticipant || user?.admin) &&
        dataEliminatedParticipant &&
        dataEliminatedParticipant?.length > 0 && (
          <CustomRadialChart
            data={currentDataEliminatedParticipant}
            label={questions.eliminatedParticipant}
          />
        )}
    </Grid>
  );
}
