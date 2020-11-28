import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Fab, MenuItem, Select } from '@material-ui/core'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import { EntityUserGroups } from '../../api/api.interface'

export function DialogAddUser() {
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
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
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                    >
                        {Object.keys(EntityUserGroups).map((el: string): JSX.Element => {
                            return <MenuItem value={EntityUserGroups[el as unknown as EntityUserGroups]} key={el}>{el}</MenuItem>
                        })}
                    </Select>
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
}
