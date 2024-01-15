import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";

const numButtonStyle = {
  borderRadius: "50px",
  bgcolor: "#000000",
  "&:hover": { bgcolor: "#808080" },
};

const paymentSelect = ["CARD", "CASH"];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    // console.log(value); //선택된거 확인
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>&emsp;&nbsp;결제수단&emsp;&nbsp;</DialogTitle>
      <List sx={{ pt: 0 }}>
        {paymentSelect.map((payment) => (
          <ListItem disableGutters key={payment}>
            <ListItemButton onClick={() => handleListItemClick(payment)}>
              <ListItemAvatar>
                {/* <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar> */}
              </ListItemAvatar>
              <ListItemText primary={payment} />
            </ListItemButton>
          </ListItem>
        ))}
        {/* <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick("addAccount")}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItemButton>
        </ListItem> */}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function Payment(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(paymentSelect[0]);
  const { paymentFunction } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    // props.paymentFunction(value);
    paymentFunction(value);
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      {/* 현재 결제수단 확인용 */}
      <Typography variant="subtitle1" component="div">
        &emsp;&nbsp;{selectedValue}
      </Typography>

      <Button variant="contained" onClick={handleClickOpen} sx={numButtonStyle}>
        결제수단
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
