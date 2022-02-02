import {  Button,  Dialog, DialogActions, DialogContent, DialogTitle, Paper, PaperProps} from "@mui/material";

interface CustomDialogProps  {
    open: boolean,
    title: string,
    cancelText: string,
    submitText: string,
    children: any,
    cancelAction: Function,
    submitAction: Function,
    bet?: any
};

function PaperComponent(props: PaperProps) {
  return (
      <Paper {...props} />
  );
}


const CustomDialog = ({open, title, cancelText, submitText, children, cancelAction, submitAction, bet}: CustomDialogProps) => {

    return (
            <Dialog
                open={open}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    {title}
                </DialogTitle>
                    <DialogContent>
                        {children}
                    </DialogContent>
                <DialogActions>
                    
                    <Button autoFocus onClick={() => {cancelAction()}}>
                        {cancelText}
                    </Button>
                    <Button onClick={() => {submitAction(bet)}}>
                        {submitText}
                    </Button>
                </DialogActions>
            </Dialog>
            )


}

export default CustomDialog;