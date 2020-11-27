import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Fab } from '@material-ui/core'
import PersonAddIcon from '@material-ui/icons/PersonAdd'

type ButtonProps = React.ComponentPropsWithoutRef<'div'>

export const DialogAddUser = React.forwardRef<HTMLDivElement, ButtonProps>(function DialogAddUser(props, ref) {
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div ref={ref}>
            <Fab variant="extended"
                 color="secondary"
                 onClick={handleClickOpen}
            >
                <PersonAddIcon />
                <b>Add user</b>
            </Fab>
            <Dialog open={open}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    Add user
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="lastName"
                        label="Last name"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}
                            color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose}
                            variant="contained"
                            color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
})
