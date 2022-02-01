

export const Column = [
    {
        Header: '#',
        accessor: 'InvoiceId',

    },
    {
        Header: 'Action',
        accessor: 'Action',
        Cell: () => {
            return (
                <>
                    <span role='button' className="svg-icon svg-icon-primary svg-icon-1"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path opacity="0.3"
                            d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
                            fill="black" />
                        <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="black" />
                    </svg></span>&nbsp;&nbsp;
                    <span role='button'
                        className="svg-icon svg-icon-warning svg-icon-1"><svg xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path opacity="0.3"
                                d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                                fill="black" />
                            <path
                                d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                                fill="black" />
                        </svg>
                    </span>&nbsp;&nbsp;
                    <span role="button" data-bs-toggle="popover" data-bs-dismiss="true" data-bs-placement="top" title="Error Code: No Error" className="svg-icon svg-icon-danger svg-icon-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="black" />
                        <rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="black" />
                        <rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="black" />
                    </svg></span>
                </>
            )
        }
    },
    {
        Header: 'Recevied Date',
        accessor: row => new Date(row.ReceivedDate).toLocaleString(),

    },
    {
        Header: 'Vendor Id',
        accessor: 'VendorId',
    },
    {
        Header: 'Vendor',
        accessor: 'VendorName',
    },
    {
        Header: 'Invoice Date',
        accessor: (row) => new Date(row.InvoiceDate).toLocaleDateString(),
    },
    {
        Header: 'Inv #',
        accessor: 'InvoiceNumber',
    }, {
        Header: 'Due Amount',
        accessor: (row) => `$ ${row.AmountDue.toFixed(2)}`,
    }, {
        Header: 'PO',
        accessor: 'PurchaseNumber',
    }, {
        Header: 'PO Status',
        accessor: 'poStatus',
    }, {
        Header: 'Terms',
        accessor: 'terms',

    }, {
        Header: 'Assignment',
        accessor: 'assignment',
    }, {
        Header: 'Updated',
        accessor: 'updated',
    }, {
        Header: 'Currency',
        accessor: 'currency',
    }, {
        Header: 'Total',
        accessor: (row: { TotalAmount: number }) => `$ ${row.TotalAmount.toFixed(2)}`,

    }
]

