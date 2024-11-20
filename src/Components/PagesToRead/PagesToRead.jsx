import { useLoaderData } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const chartSetting = {
    yAxis: [
        {
            label: 'Pages',
        },
    ],
    width: 700,
    height: 400,
    sx: {
        [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-20px, 0)',
        },
    },
};

export default function PagesToRead() {
    const books = useLoaderData();
    console.log(books)
    const readListData = localStorage.getItem('readList');
    const [matchedData, setMatchedData] = useState([]);

    useEffect(() => {
        if (readListData) {
            const matchingBooks = books.filter((book) =>
                readListData.includes(book.bookId)
            );

            const mappedData = matchingBooks.map(book => ({
                bookName: book.bookName,  // Using book title as the x-axis label
                pages: book.totalPages   // Assuming each book has a 'pages' property
            }));

            setMatchedData(mappedData);
        }
    }, [books, readListData]);

    return (
        <div className='flex justify-center items-center'>
            <BarChart
                dataset={matchedData}  // Use matchedData as the dataset
                xAxis={[{ scaleType: 'band', dataKey: 'bookName' }]}
                series={[
                    { dataKey: 'pages', label: 'Pages', valueFormatter: (value) => `${value} pages` }
                ]}
                {...chartSetting}
            />
        </div>
    );
}
