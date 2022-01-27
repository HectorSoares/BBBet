import { Box} from "@material-ui/core";
import Brother from "../../../domain/model/Brother";
import Bet from "../../../domain/model/manager/Bet";
import { questions } from "../../../util/constants";
import SelectMultiple from "../../atoms/select-multiple";


interface ResultsFormProps  {
    activeBet?: Bet,
    brothers?: Brother[]
};




const ResultsForm = ({activeBet, brothers}: ResultsFormProps) => (    
  
            <Box component="form" onSubmit={() => {}}  sx={{ 
              mt: 1, 
              width: '100%' }}>
            {
              activeBet?.leader &&
              <SelectMultiple
              items={brothers}
              label={questions.leader}
              //onChange={(item: Brother) => {setLeader(item)}}
              />}
            {
              activeBet?.angel &&
              <SelectMultiple
              items={brothers}
              label={questions.angel}
              //onChange={(item: Brother) => {setAngel(item)}}
              />}
            {
              activeBet?.bigPhone &&
              <SelectMultiple
              items={brothers}
              label={questions.bigPhone}
              //onChange={(item: Brother) => {setBigPhone(item)}}
              />}
            {
              activeBet?.firstIndicated &&
              <SelectMultiple
              items={brothers}
              label={questions.firstIndicated}
              //onChange={(item: Brother) => {setFirstIndicated(item)}}
              />}
            {
            activeBet?.secondIndicated &&
             <SelectMultiple
              items={brothers}
              label={questions.secondIndicated}
              //onChange={(item: Brother) => {setSecondIndicated(item)}}
              />}
            {
            activeBet?.thirdIndicated &&
             <SelectMultiple
              items={brothers}
              label={questions.thirdIndicated}
              //onChange={(item: Brother) => {setThirdIndicated(item)}}
              />}
            {
            activeBet?.fourthIndicated &&
             <SelectMultiple
              items={brothers}
              label={questions.fourthIndicated}
              //onChange={(item: Brother) => {setFourthIndicated(item)}}
              />}
            {
            activeBet?.fifthIndicated &&
             <SelectMultiple
              items={brothers}
              label={questions.fifthIndicated}
              //onChange={(item: Brother) => {setFifthIndicated(item)}}
              />}
            {
            activeBet?.eliminatedParticipant &&
             <SelectMultiple
              items={brothers}
              label={questions.eliminatedParticipant}
              //onChange={(item: Brother) => {setEliminatedParticipant(item)}}
              />}
            {
            activeBet?.eliminationPercentage &&
             <SelectMultiple
              items={brothers}
              label={questions.eliminationPercentage}
              //onChange={(item: Brother) => {setEliminationPercentage(item)}}
              />}
            </Box>
)

export default ResultsForm;