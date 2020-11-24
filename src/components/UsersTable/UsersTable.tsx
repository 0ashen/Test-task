import React from 'react'
import { createStyles, Theme, withStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'
import Paper from '@material-ui/core/Paper'
import { AutoSizer, Column, Table, TableCellRenderer, TableHeaderProps } from 'react-virtualized'
import { MuiVirtualizedTableProps, PropsReactVirtualizedTable } from './UsersTable.interface'
import { UserKeys } from '../../api/api.interface'
import styles from './UsersTable.module.scss'

export const tableStyles = (theme: Theme) =>
    createStyles({
    })


class MuiVirtualizedTable extends React.PureComponent<MuiVirtualizedTableProps> {
    static defaultProps = {
        headerHeight: 48,
        rowHeight: 30,
    }

    render() {
        const { classes, columns, rowHeight, headerHeight, ...tableProps } = this.props
        return (
            <AutoSizer style={{ width: '100%' }}>
                {({ height, width }) => (
                    <Table
                        height={height}
                        width={width}
                        rowHeight={rowHeight!}
                        headerHeight={headerHeight!}
                        className={''}
                        rowClassName={''}
                        {...tableProps}
                    >
                        {columns.map(({ dataKey, ...other }, index) => {
                            return (
                                <Column
                                    key={dataKey}
                                    headerRenderer={({ label }) => label }
                                    cellRenderer={({ cellData }) => cellData}
                                    dataKey={dataKey}
                                    className={''}
                                    {...other}
                                />
                            )
                        })}
                    </Table>
                )}
            </AutoSizer>
        )
    }
}

const VirtualizedTable = withStyles(tableStyles)(MuiVirtualizedTable)

function ReactVirtualizedTable(props: PropsReactVirtualizedTable) {
    const { users } = props
    return (
        <div className={styles.usersTableWrapper}>
            <i className={styles.caption}>Count of items: {users.length}</i>
            <Paper className={styles.paper}>
                <VirtualizedTable
                    rowCount={users.length}
                    rowGetter={({ index }) => users[index]}
                    columns={[
                        {
                            width: 100,
                            label: 'ID',
                            dataKey: UserKeys.id,
                            numeric: true,
                        },
                        {
                            width: 300,
                            label: 'Name',
                            dataKey: UserKeys.first_name,
                        },
                        {
                            width: 500,
                            label: 'Last Name',
                            dataKey: UserKeys.last_name,
                        },
                        {
                            width: 500,
                            label: 'Group',
                            dataKey: UserKeys.group,
                        },
                    ]}
                />
            </Paper>
        </div>
    )
}

export { ReactVirtualizedTable }
