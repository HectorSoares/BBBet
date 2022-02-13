import { Box, TextField} from "@material-ui/core";
import Brother from "../../../domain/model/Brother";
import Bet from "../../../domain/model/manager/Bet";
import BetResults from "../../../domain/model/results/BetResults";
import { questions } from "../../../util/constants";
import SelectMultiple from "../../atoms/select-multiple";

interface ResultsFormProps  {
    lastBet?: Bet,
    brothers?: Brother[],
    setBet?: any,
};

const defaultBetResult = {
    leader: undefined,
    angel: undefined,
    bigPhone: undefined,
    angelImmunized: undefined,
    firstIndicated: undefined,
    secondIndicated: undefined,
    thirdIndicated: undefined,
    fourthIndicated: undefined,
    fifthIndicated: undefined,
    backForth: undefined,
    eliminatedParticipant: undefined,
    eliminationPercentage: undefined  
}

const ResultsForm = ({lastBet, brothers, setBet}: ResultsFormProps) => {

  var bet: BetResults = defaultBetResult;

  const onChangeEliminationPercentage = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    bet.eliminationPercentage = parseFloat(event.target.value.replace(',', '.'));
    setBet(bet);
  }

  
  const onChangeHandle = (value: any, 
    betIndex: 'leader'|'angel'|'bigPhone'|'firstIndicated'|'secondIndicated'|'thirdIndicated'|'fourthIndicated'|'fifthIndicated'|'eliminatedParticipant'|'eliminationPercentage') => {    
     
    bet[betIndex] = value.map((m: Brother) => m.id);
    setBet(bet);
  }
  
  return (    
  
            <Box component="form" onSubmit={() => {}}  sx={{ 
              mt: 1, 
              width: '100%' }}>
            {
              lastBet?.leader &&
              <SelectMultiple
              items={brothers}
              label={questions.leader}
              onChange={onChangeHandle}
              betIndex={'leader'}
              />}
            {
              lastBet?.angel &&
              <SelectMultiple
              items={brothers}
              label={questions.angel}
              onChange={onChangeHandle}
              betIndex={'angel'}
              />}
            {
              lastBet?.bigPhone &&
              <SelectMultiple
              items={brothers}
              label={questions.bigPhone}
              onChange={onChangeHandle}
              betIndex={'bigPhone'}
              />}
            {
              lastBet?.angelImmunized &&
              <SelectMultiple
              items={brothers}
              label={questions.angelImmunized}
              onChange={onChangeHandle}
              betIndex={'angelImmunized'}
              />}
            {
              lastBet?.firstIndicated &&
              <SelectMultiple
              items={brothers}
              label={questions.firstIndicated}
              onChange={onChangeHandle}
              betIndex={'firstIndicated'}
              />}
            {
            lastBet?.secondIndicated &&
             <SelectMultiple
              items={brothers}
              label={lastBet.secondIndicatedText || questions.secondIndicated}
              onChange={onChangeHandle}
              betIndex={'secondIndicated'}
              />}
            {
            lastBet?.thirdIndicated &&
             <SelectMultiple
              items={brothers}
              label={lastBet.thirdIndicatedText || questions.thirdIndicated}
              onChange={onChangeHandle}
              betIndex={'thirdIndicated'}
              />}
            {
            lastBet?.fourthIndicated &&
             <SelectMultiple
              items={brothers}
              label={lastBet.fourthIndicatedText || questions.fourthIndicated}
              onChange={onChangeHandle}
              betIndex={'fourthIndicated'}
              />}
            {
            lastBet?.fifthIndicated &&
             <SelectMultiple
              items={brothers}
              label={lastBet.fifthIndicatedText || questions.fifthIndicated}
              onChange={onChangeHandle}
              betIndex={'fifthIndicated'}
              />}
            {
              lastBet?.backForth &&
              <SelectMultiple
              items={brothers}
              label={questions.backForth}
              onChange={onChangeHandle}
              betIndex={'backForth'}
              />}
            {
            lastBet?.eliminatedParticipant &&
             <SelectMultiple
              items={brothers}
              label={questions.eliminatedParticipant}
              onChange={onChangeHandle}
              betIndex={'eliminatedParticipant'}
              />}
            {
            lastBet?.eliminationPercentage &&
              <TextField  
                label={questions.eliminationPercentage} 
                variant="outlined"
                onChange={onChangeEliminationPercentage()}
                 >
                 </TextField>
              }
            </Box>
)}

export default ResultsForm;