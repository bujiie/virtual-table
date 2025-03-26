import { ColumnDef, flexRender, getCoreRowModel, getSortedRowModel, Row, useReactTable } from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useMemo, useRef } from 'react';

import './VirtualizedTable.scss';

export type VirtualizedTableHeader = {
    key: string;
    label: string;
    sortable?: boolean;
    flexGrow?: number;
};

export type VirtualizedTableProps<T extends { [key: string]: any }> = {
    headers: VirtualizedTableHeader[];
    data: T[];
};

export const VirtualizedTable = <T extends { [key: string]: any }>({ headers, data }: VirtualizedTableProps<T>) => {
    const tableContainerRef = useRef<HTMLDivElement>(null);

    const columns = useMemo(
        () =>
            headers.map<ColumnDef<T>>(header => ({
                accessorKey: header.key,
                header: header.label,
                cell: info => info.getValue(),
                enableSorting: header.sortable ?? false,
            })),
        [headers]
    );

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        debugTable: true
    });

    const { rows } = table.getRowModel();

    const virtualizer = useVirtualizer<HTMLDivElement, HTMLTableRowElement>({
        count: rows.length,
        estimateSize: () => 35,
        getScrollElement: () => tableContainerRef.current,
        measureElement: element => element?.getBoundingClientRect().height,
        overscan: 5
    });

    return (
        <div ref={tableContainerRef} className='virtualized-table__container'>
            <table className='virtualized-table'>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id} style={{ width: "100%" }} colSpan={header.colSpan}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody style={{ height: `${virtualizer.getTotalSize()}px` }}>
                    {virtualizer.getVirtualItems().map(virtualRow => {
                        const row = rows[virtualRow.index] as Row<T>;
                        return (
                            <tr
                                className='virtualized-table__row'
                                data-index={virtualRow.index}
                                key={row.id}
                                ref={node => virtualizer.measureElement(node)}
                                style={{ transform: `translateY(${virtualRow.start}px)` }}>
                                {row.getVisibleCells().map(cell => {
                                    return (
                                        <td
                                            key={cell.id}
                                            style={{ width: "100%" }}
                                            className='virtualized-table__cell'>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default VirtualizedTable;
