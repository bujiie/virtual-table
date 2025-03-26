import { Table } from '@workday/canvas-kit-react/table';

import '@workday/canvas-tokens-web/css/base/_variables.css';
import '@workday/canvas-tokens-web/css/brand/_variables.css';
import '@workday/canvas-tokens-web/css/system/_variables.css';

import './CkTable.scss';

export type CkTableHeader = {
    key: string;
    label: string;
    sortable?: boolean;
    flexGrow?: number;
};

export type CkTableProps<T extends { [key: string]: any }> = {
    headers: CkTableHeader[];
    data: T[];
};

const CkTable = <T extends { [key: string]: any }>({ headers, data }: CkTableProps<T>) => {
    return (
        <div className='cktable__container'>
            <Table className='cktable'>
                <Table.Head>
                    <Table.Row>
                        {headers.map(header => (
                            <Table.Header key={header.key}>{header.label}</Table.Header>
                        ))}
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    {data.map((datum, index) => (
                        <Table.Row key={index}>
                            <Table.Cell>{datum.date}</Table.Cell>
                            <Table.Cell>{datum.time}</Table.Cell>
                            <Table.Cell>{datum.prediction}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
};

export default CkTable;
