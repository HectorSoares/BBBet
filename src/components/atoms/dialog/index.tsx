import {  Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, PaperProps} from "@mui/material";

interface CustomDialogProps  {
    open: boolean,
    title: string,
    cancelText: string,
    submitText: string,
    children: any
};

function PaperComponent(props: PaperProps) {
  return (
      <Paper {...props} />
  );
}


const CustomDialog = ({open, title, cancelText, submitText, children}: CustomDialogProps) => {

    return (<Dialog
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
                    
                    <Button autoFocus onClick={() => {console.log('cancel')}}>
                        {cancelText}
                    </Button>
                    <Button onClick={() => {console.log('subs')}}>
                        {submitText}
                    </Button>
                </DialogActions>
            </Dialog>)


}

export default CustomDialog;