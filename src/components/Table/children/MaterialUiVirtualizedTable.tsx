import React from 'react'
import { MuiVirtualizedTableProps, MyTableHeaderProps } from '../Table.interface'
import { AutoSizer, Column, Table, TableHeaderProps, TableHeaderRowProps } from 'react-virtualized'
import styles from '../Table.module.scss'
import { UserKeys } from '../../../api/api.interface'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import { TableRowProps } from 'react-virtualized/dist/es/Table'

export class MaterialUIVirtualizedTable extends React.Component<MuiVirtualizedTableProps> {
    static defaultProps = {
        headerHeight: 48,
        rowHeight: 35,
    }

    private headerRowRenderer = ({ className, style, columns }: TableHeaderRowProps): JSX.Element => {
        return (
            <div style={{ ...style, paddingRight: 0 }}
                 className={className + ' ' + styles.tableRowHeader}>
                {columns}
            </div>
        )
    }
    private rowRenderer = ({ className, style, columns, index }: TableRowProps): JSX.Element => {
        return (
            <div style={{ ...style, paddingRight: 0 }}
                 className={className + ' ' + (!(index % 2) ? styles.tableRowEven : '')}>
                {columns}
            </div>
        )
    }
    private headerCellRenderer = (props: TableHeaderProps): JSX.Element => {
        const { label, dataKey, ...other } = props as MyTableHeaderProps
        return (
            <>
                <span>{label}</span>
                {
                    dataKey !== UserKeys.group ?
                        <ArrowDownwardIcon
                            className={
                                (this.props.sortByField === dataKey ? styles.isActive : '') + ' ' +
                                ((this.props.sortOrder === 'DESC') && (this.props.sortByField === dataKey) ? styles.isRotate : '')
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
                {({ height, width }) => (
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
                        {...tableProps}
                    >
                        {columns.map(({ dataKey, ...other }, index) => {
                            return (
                                <Column
                                    key={dataKey}
                                    headerRenderer={this.headerCellRenderer}
                                    cellRenderer={({ cellData }) => cellData}
                                    dataKey={dataKey}
                                    className={styles.tableCell}
                                    headerClassName={[styles.tableCell, styles.tableCellHeader].join(' ')}
                                    style={{ lineHeight: rowHeight + 'px' }}
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
