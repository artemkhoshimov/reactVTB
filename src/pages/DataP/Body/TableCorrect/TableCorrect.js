import React from "react";
import { useTable } from 'react-table';
import style from './tableCorrect.module.css'



const TableCorrect = (props) => {


    const columns = React.useMemo(() => [
        {
            Header: ' ',
            columns: [
                {
                    Header: 'id',
                    accessor: 'id',
                },
                {
                    Header: 'branch_flg',
                    accessor: 'branch_flg',
                },
                {
                    Header: 'business_size_cd',
                    accessor: 'business_size_cd',
                },
                {
                    Header: 'counterparty_name',
                    accessor: 'counterparty_name',
                },
                {
                    Header: 'effective_from_date',
                    accessor: 'effective_from_date',
                },
                {
                    Header: 'effective_to_date',
                    accessor: 'effective_to_date',
                },
                {
                    Header: 'inn_num',
                    accessor: 'inn_num',
                },
                {
                    Header: 'is_bank_flg',
                    accessor: 'is_bank_flg',
                },
                {
                    Header: 'okato_cd',
                    accessor: 'okato_cd',
                },
                {
                    Header: 'oktmo_cd',
                    accessor: 'oktmo_cd',
                },
            ],
        },
    ],
        []
    )

    const data = React.useMemo(() => [
        {
            id: '1',
            branch_flg: 'True',
            business_size_cd: 'крупный',
            counterparty_name: '"ОАО" ТЕСТЦЕХПРОМОРГ',
            effective_from_date: '2020-03-21',
            effective_to_date: '2024-03-25 ',
            inn_num: '4556123',
            is_bank_flg: 'false',
            okato_cd: '561759',
            oktmo_cd: '858203'
        },
        {
            id: '2',
            branch_flg: 'True',
            business_size_cd: 'крупный',
            counterparty_name: '"ОАО" ПРОМКРОММАГ',
            effective_from_date: '2020-03-21',
            effective_to_date: '2024-03-25 ',
            inn_num: '4556123',
            is_bank_flg: 'false',
            okato_cd: '561759',
            oktmo_cd: '858203'
        },
        {
            id: '3',
            branch_flg: 'True',
            business_size_cd: 'крупный',
            counterparty_name: '"ОАО" МИНКРОМОРГ',
            effective_from_date: '2020-03-21',
            effective_to_date: '2024-03-25 ',
            inn_num: '4556123',
            is_bank_flg: 'false',
            okato_cd: '561759',
            oktmo_cd: '858203'
        },
        {
            id: '3',
            branch_flg: 'false',
            business_size_cd: 'крупный',
            counterparty_name: '"ООО" НОРТОРГСВЯЗЬ',
            effective_from_date: '2020-03-21',
            effective_to_date: '2024-03-22 ',
            inn_num: '455123',
            is_bank_flg: 'false',
            okato_cd: '531759',
            oktmo_cd: '818203'
        },
        {
            id: '3',
            branch_flg: 'false',
            business_size_cd: 'крупный',
            counterparty_name: '"ОАО" ВНЕШДОРСВЯЗЬ',
            effective_from_date: '2020-03-21',
            effective_to_date: '2024-03-25 ',
            inn_num: '4556123',
            is_bank_flg: 'false',
            okato_cd: '561759',
            oktmo_cd: '858203'
        }
    ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })


    return (
        <table className={style.table} {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th className={style.tableContentHeader} {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody  {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr  {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td className={style.tableContentBody}  {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}








export default TableCorrect