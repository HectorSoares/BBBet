
import { Paper } from "@material-ui/core";
import CustomDialog from "../../atoms/dialog";

interface BetConclusionModalProps  {
    open: boolean,
    closeModal: Function,
};

const BetConclusionModal = ({open, closeModal}: BetConclusionModalProps) => {
  
  return (    
            <CustomDialog open={open} title={'Aposta concluída'} cancelText={''} submitText={'OK'} cancelAction={closeModal} submitAction={closeModal} >
                
                    <img src={require("./JoaoChupaBola-bet.png")} alt="JoaoChupaBola-bet.png" width="300" height="300" />
                
            </CustomDialog>
)}

export default BetConclusionModal;