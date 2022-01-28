import Bet from "../../../domain/model/manager/Bet";
import CustomDialog from "../../atoms/dialog";
import ResultsForm from "../../molecules/results-form";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers";
import Brother from "../../../domain/model/Brother";
import React from "react";


interface CloseBetDialogProps  {
    open: boolean,
    title: string,
    cancelText: string,
    submitText: string,
    lastBet?: Bet,
    cancelAction: any,
    submitAction: any,
};



const CloseBetDialog = ({open, title, cancelText, submitText, lastBet, submitAction, cancelAction}: CloseBetDialogProps) => {

    const brothers: Brother[] | undefined = useSelector((state: RootState) => state.betPage.brothers );

    const [bet, setBet] = React.useState(undefined);

    return (<CustomDialog
                open={open}
                title={title}
                cancelText={cancelText}
                submitText={submitText}
                submitAction={ submitAction}
                cancelAction={ cancelAction}
                bet={bet}
                >
               <ResultsForm lastBet={lastBet} brothers={brothers} setBet={setBet}/>
            </CustomDialog>
            )


}

export default CloseBetDialog;