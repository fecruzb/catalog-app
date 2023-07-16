import * as React from "react"

import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"

const Delete = ({ open, onClose, author, onConfirm }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Exclusion</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete <b>{author.name}</b>?
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button color="inherit" variant="contained" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" color="error" onClick={() => onConfirm(author)} autoFocus>
          Yes, delete
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Delete
