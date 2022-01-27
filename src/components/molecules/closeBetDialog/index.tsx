import Bet from "../../../domain/model/manager/Bet";
import CustomDialog from "../../atoms/dialog";


interface CloseBetDialogProps  {
    open: boolean,
    title: string,
    cancelText: string,
    submitText: string,
    activeBet?: Bet,
};


const CloseBetDialog = ({open, title, cancelText, submitText, activeBet}: CloseBetDialogProps) => {

    return (<CustomDialog
                open={open}
                title={title}
                cancelText={cancelText}
                submitText={submitText}
                >
                <>teste</>
            </CustomDialog>
            )


}

export default CloseBetDialog;