import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Fab, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import { EntityUserGroups } from '../../api/apiEntity.interface'
import { DialogAddUserProps } from './DialogAddUser.interface'
import { AppState } from '../../App/App.interface'
import { sortToSubArraysProcedure } from '../../pages/UsersOverview/UsersOverview'

export function DialogAddUser(props: DialogAddUserProps) {

    const [open, setOpen] = React.useState(false)
    const [department, setDepartment] = React.useState<EntityUserGroups | ''>('')
    const [name, setName] = React.useState<string>('')
    const [lastName, setLastName] = React.useState<string>('')

    const handleOpenDialog = () => {
        setOpen(true)
        setDepartment('')
        setName('')
        setLastName('')
    }
    const handleCloseDialog = (checkValidation: boolean = false) => () => {
        if (!checkValidation) {
            setOpen(false)
            return
        }
        if (handleValidation().name && handleValidation().name) {
            props.setUsersState((state: AppState): AppState => {
                const newUsersList = [
                    {
                        id: state.usersAll.length + 1,
                        first_name: name,
                        last_name: lastName,
                        group: department || null,
                    },
                    ...state.usersAll,
                ]
                return {
                    ...state,
                    usersAll: newUsersList,
                    usersSortedByGroup: sortToSubArraysProcedure(newUsersList),
                }
            })
            setOpen(false)
        }
    }

    const handleSelectDepartmentChange = (event: React.ChangeEvent<{ name?: string | undefined; value: unknown; }>): void => {
        setDepartment(event.target.value as EntityUserGroups)
    }

    const handleSelectNameChange = (event: React.ChangeEvent<{ value: string }>): void => {
        setName(event.target.value)
    }

    const handleSelectLastNameChange = (event: React.ChangeEvent<{ value: string }>): void => {
        setLastName(event.target.value)
    }

    const handleValidation = () => {
        return { name: !!(name.length), lastName: !!(lastName.length) }
    }


    return (
        <>
            <Fab variant="extended"
                 color="secondary"
                 onClick={handleOpenDialog}
            >
                <PersonAddIcon />
                <b>Add user</b>
            </Fab>
            <Dialog open={open}
                    fullWidth
                    onClose={handleCloseDialog()}
                    aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    Add user
                </DialogTitle>
                <DialogContent>
                    <TextField autoFocus
                               margin="dense"
                               id="name"
                               label="Name"
                               type="text"
                               fullWidth
                               required
                               value={name}
                               error={!handleValidation().name}
                               onChange={handleSelectNameChange}
                    />
                    <TextField margin="dense"
                               id="lastName"
                               label="Last name"
                               type="text"
                               fullWidth
                               required
                               value={lastName}
                               error={!handleValidation().lastName}
                               onChange={handleSelectLastNameChange}
                    />

                    <FormControl fullWidth
                                 margin="dense">
                        <InputLabel id="department">
                            Select department
                        </InputLabel>
                        <Select labelId="department"
                                id="department"
                                value={department}
                                onChange={handleSelectDepartmentChange}
                        >
                            <MenuItem value="">
                                None
                            </MenuItem>
                            {Object
                                .keys(EntityUserGroups)
                                .map((el: string): JSX.Element =>
                                    <MenuItem value={EntityUserGroups[el as unknown as EntityUserGroups]}
                                              key={el}>
                                        {el}
                                    </MenuItem>)
                            }
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog()}
                            color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleCloseDialog(true)}
                            variant="contained"
                            color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
