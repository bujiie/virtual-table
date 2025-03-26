import { ReactElement } from 'react';
import VirtualizedTable from './component/virtualized/table/VirtualizedTable';

type FakeData = {
    date: string;
    time: string;
    prediction: string;
};

const fakeData: FakeData[] = [
    { date: 'Saturday Jan 06', time: '01:00 AM', prediction: '0.000000' },
    { date: 'Saturday Jan 06', time: '02:00 AM', prediction: '1.000000' },
    { date: 'Saturday Jan 06', time: '03:00 AM', prediction: '2.000000' },
    { date: 'Saturday Jan 06', time: '04:00 AM', prediction: '3.000000' },
    { date: 'Saturday Jan 06', time: '05:00 AM', prediction: '4.000000' },
    { date: 'Saturday Jan 06', time: '06:00 AM', prediction: '5.000000' },
    { date: 'Saturday Jan 06', time: '07:00 AM', prediction: '6.000000' },
    { date: 'Saturday Jan 06', time: '08:00 AM', prediction: '7.000000' },
    { date: 'Saturday Jan 06', time: '09:00 AM', prediction: '8.000000' },
    { date: 'Saturday Jan 06', time: '10:00 AM', prediction: '9.000000' },
    { date: 'Saturday Jan 06', time: '11:00 AM', prediction: '10.000000' },
    { date: 'Saturday Jan 06', time: '12:00 PM', prediction: '11.000000' },
    { date: 'Saturday Jan 06', time: '01:00 PM', prediction: '12.000000' },
    { date: 'Saturday Jan 06', time: '02:00 PM', prediction: '13.000000' },
    { date: 'Saturday Jan 06', time: '03:00 PM', prediction: '14.000000' },
    { date: 'Saturday Jan 06', time: '04:00 PM', prediction: '15.000000' },
    { date: 'Saturday Jan 06', time: '05:00 PM', prediction: '16.000000' },
    { date: 'Saturday Jan 06', time: '06:00 PM', prediction: '17.000000' },
    { date: 'Saturday Jan 06', time: '07:00 PM', prediction: '18.000000' },
    { date: 'Saturday Jan 06', time: '08:00 PM', prediction: '19.000000' },
    { date: 'Saturday Jan 06', time: '09:00 PM', prediction: '20.000000' },
    { date: 'Saturday Jan 06', time: '10:00 PM', prediction: '21.000000' },
    { date: 'Saturday Jan 06', time: '11:00 PM', prediction: '22.000000' },
    { date: 'Sunday Jan 07', time: '12:00 AM', prediction: '23.000000' },
    { date: 'Sunday Jan 07', time: '01:00 AM', prediction: '24.000000' },
    { date: 'Sunday Jan 07', time: '02:00 AM', prediction: '25.000000' },
    { date: 'Sunday Jan 07', time: '03:00 AM', prediction: '26.000000' },
    { date: 'Sunday Jan 07', time: '04:00 AM', prediction: '27.000000' },
    { date: 'Sunday Jan 07', time: '05:00 AM', prediction: '28.000000' },
    { date: 'Sunday Jan 07', time: '06:00 AM', prediction: '29.000000' },
    { date: 'Sunday Jan 07', time: '07:00 AM', prediction: '30.000000' },
    { date: 'Sunday Jan 07', time: '08:00 AM', prediction: '31.000000' },
    { date: 'Sunday Jan 07', time: '09:00 AM', prediction: '32.000000' },
    { date: 'Sunday Jan 07', time: '10:00 AM', prediction: '33.000000' },
    { date: 'Sunday Jan 07', time: '11:00 AM', prediction: '34.000000' },
    { date: 'Sunday Jan 07', time: '12:00 PM', prediction: '35.000000' },
    { date: 'Sunday Jan 07', time: '01:00 PM', prediction: '36.000000' },
    { date: 'Sunday Jan 07', time: '02:00 PM', prediction: '37.000000' },
    { date: 'Sunday Jan 07', time: '03:00 PM', prediction: '38.000000' },
    { date: 'Sunday Jan 07', time: '04:00 PM', prediction: '39.000000' },
    { date: 'Sunday Jan 07', time: '05:00 PM', prediction: '40.000000' },
    { date: 'Sunday Jan 07', time: '06:00 PM', prediction: '41.000000' },
    { date: 'Sunday Jan 07', time: '07:00 PM', prediction: '42.000000' },
    { date: 'Sunday Jan 07', time: '08:00 PM', prediction: '43.000000' },
    { date: 'Sunday Jan 07', time: '09:00 PM', prediction: '44.000000' },
    { date: 'Sunday Jan 07', time: '10:00 PM', prediction: '45.000000' },
    { date: 'Sunday Jan 07', time: '11:00 PM', prediction: '46.000000' },
    { date: 'Monday Jan 08', time: '12:00 AM', prediction: '47.000000' },
    { date: 'Monday Jan 08', time: '01:00 AM', prediction: '48.000000' },
    { date: 'Monday Jan 08', time: '02:00 AM', prediction: '49.000000' },
    { date: 'Monday Jan 08', time: '03:00 AM', prediction: '50.000000' },
    { date: 'Monday Jan 08', time: '04:00 AM', prediction: '51.000000' },
    { date: 'Monday Jan 08', time: '05:00 AM', prediction: '52.000000' },
    { date: 'Monday Jan 08', time: '06:00 AM', prediction: '53.000000' },
    { date: 'Monday Jan 08', time: '07:00 AM', prediction: '54.000000' },
    { date: 'Monday Jan 08', time: '08:00 AM', prediction: '55.000000' },
    { date: 'Monday Jan 08', time: '09:00 AM', prediction: '56.000000' },
    { date: 'Monday Jan 08', time: '10:00 AM', prediction: '57.000000' },
    { date: 'Monday Jan 08', time: '11:00 AM', prediction: '58.000000' },
    { date: 'Monday Jan 08', time: '12:00 PM', prediction: '59.000000' },
    { date: 'Monday Jan 08', time: '01:00 PM', prediction: '60.000000' },
    { date: 'Monday Jan 08', time: '02:00 PM', prediction: '61.000000' },
    { date: 'Monday Jan 08', time: '03:00 PM', prediction: '62.000000' },
    { date: 'Monday Jan 08', time: '04:00 PM', prediction: '63.000000' },
    { date: 'Monday Jan 08', time: '05:00 PM', prediction: '64.000000' },
    { date: 'Monday Jan 08', time: '06:00 PM', prediction: '65.000000' },
    { date: 'Monday Jan 08', time: '07:00 PM', prediction: '66.000000' },
    { date: 'Monday Jan 08', time: '08:00 PM', prediction: '67.000000' },
    { date: 'Monday Jan 08', time: '09:00 PM', prediction: '68.000000' },
    { date: 'Monday Jan 08', time: '10:00 PM', prediction: '69.000000' },
    { date: 'Monday Jan 08', time: '11:00 PM', prediction: '70.000000' }
];

const fakeHeaders = [
    {
        key: 'date',
        label: 'Date',
        sortable: true,
        flexGrow: 1
    },
    {
        key: 'time',
        label: 'Time',
        sortable: true,
        flexGrow: 1
    },
    {
        key: 'prediction',
        label: 'Prediction',
        sortable: true,
        flexGrow: 4
    }
];

const App = (): ReactElement => {
    return (
        <div className='app'>
            <VirtualizedTable<FakeData> headers={fakeHeaders} data={fakeData} />
        </div>
    );
};

export default App;
