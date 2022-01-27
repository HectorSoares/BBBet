import Bet from "../../../domain/model/manager/Bet";
import CustomDialog from "../../atoms/dialog";
import ResultsForm from "../../molecules/results-form";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers";
import Brother from "../../../domain/model/Brother";


interface CloseBetDialogProps  {
    open: boolean,
    title: string,
    cancelText: string,
    submitText: string,
    activeBet?: Bet,
    cancelAction: any,
    submitAction: any,
};



const CloseBetDialog = ({open, title, cancelText, submitText, activeBet, submitAction, cancelAction}: CloseBetDialogProps) => {

    const brothers: Brother[] | undefined = useSelector((state: RootState) => state.betPage.brothers );

    return (<CustomDialog
                open={open}
                title={title}
                cancelText={cancelText}
                submitText={submitText}
                submitAction={ submitAction}
                cancelAction={ cancelAction}
                >
               <ResultsForm activeBet={activeBet} brothers={brothers}/>
            </CustomDialog>
            )


}

export default CloseBetDialog;