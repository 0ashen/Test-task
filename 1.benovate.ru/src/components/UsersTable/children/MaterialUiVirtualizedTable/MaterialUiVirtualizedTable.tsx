import React from 'react'
import { AutoSizer, Column, Table, TableHeaderProps, TableHeaderRowProps } from 'react-virtualized'
import styles from '../../UsersTable.module.scss'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import { TableRowProps } from 'react-virtualized/dist/es/Table'
import { MuiVirtualizedTableProps } from './MaterialUiVirtualizedTable.interface'
import { SortTypes } from '../../UsersTable.interface'
import { EntityUser } from '../../../../api/apiEntity.interface'

export class MaterialUIVirtualizedTable extends React.PureComponent<MuiVirtualizedTableProps> {
    static defaultProps = {
        headerHeight: 48,
        rowHeight: window.innerWidth > 1000 ? 35 : 80,
    }

    private headerRowRenderer = ({ className, style, columns }: TableHeaderRowProps): JSX.Element => {
        return (
            <div style={{ ...style, paddingRight: 0 }}
                 className={className + ' ' + styles.tableRowHeader}>
                {columns}
            </div>
        )
    }
    private rowRenderer = ({ className, style, columns, index, key }: TableRowProps): JSX.Element => {
        return (
            <div style={{ ...style, paddingRight: 0 }}
                 key={key}
                 className={className + ' ' + (!(index % 2) ? styles.tableRowEven : '')}>
                {columns}
            </div>
        )
    }
    private headerCellRenderer = (props: TableHeaderProps): JSX.Element => {
        const { label, dataKey } = props as { label: string; dataKey: keyof EntityUser }
        return (
            <>
                <span>{label}</span>
                {
                    dataKey !== 'group' ?
                        <ArrowDownwardIcon
                            className={
                                (this.props.sortByField === dataKey ? styles.isActive : '') + ' ' +
                                ((this.props.sortOrder === SortTypes.DESC) && (this.props.sortByField === dataKey) ? styles.isRotate : '')
                            }
                            onClick={() => this.props.sortUsers(dataKey)} />
                        : null
                }
            </>
        )
    }

    render(): JSX.Element {
        const { columns, rowHeight, headerHeight, ...tableProps } = this.props

        return (
            <AutoSizer style={{ width: '100%' }}>
                {({ height, width }: { height: number, width: number }): JSX.Element => (
                    <Table
                        height={height}
                        width={width}
                        rowHeight={rowHeight!}
                        headerHeight={headerHeight!}
                        rowClassName={styles.tableRow}
                        headerClassName={styles.tableCellHeader}
                        headerRowRenderer={this.headerRowRenderer}
                        headerStyle={{ lineHeight: headerHeight + 'px' }}
                        rowRenderer={this.rowRenderer}
                        disableHeader={window.innerWidth < 1000}
                        {...tableProps}
                    >
                        {columns.map(({ dataKey, justDesktop, label, ...other }, index) => {
                            if (justDesktop && window.innerWidth < 1000) return null
                            return (
                                <Column
                                    key={dataKey}
                                    headerRenderer={this.headerCellRenderer}
                                    cellRenderer={({ cellData }) => <><span>{label}</span><span>{cellData}</span></>}
                                    dataKey={dataKey}
                                    className={styles.tableCell}
                                    headerClassName={[styles.tableCell, styles.tableCellHeader].join(' ')}
                                    style={{ lineHeight: rowHeight + 'px' }}
                                    label={label}
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
