import { Typography } from "@mui/material";
import CustomDialog from "../../atoms/dialog";

interface BetConclusionModalProps {
  open: boolean;
  closeModal: any;
}

const BetConclusionModal = ({ open, closeModal }: BetConclusionModalProps) => {
  return (
    <CustomDialog
      open={open}
      title={"Aposta concluída"}
      cancelText={""}
      submitText={"OK"}
      cancelAction={closeModal}
      submitAction={closeModal}
    >
      <img
        src={require("./JoaoChupaBola-bet.png")}
        alt="JoaoChupaBola-bet.png"
        width="250"
        height="250"
      />
      <br />
      <Typography variant="caption">Você pode apostar novamente!</Typography>
      <br />
      <Typography variant="caption">A aposta será sobrescrita.</Typography>
    </CustomDialog>
  );
};

export default BetConclusionModal;
