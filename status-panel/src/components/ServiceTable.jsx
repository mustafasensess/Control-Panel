import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import CancelIcon from '@mui/icons-material/Cancel';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {useServices} from "../contexts/ServiceContext.jsx";
import {useDates} from "../contexts/DateContext.jsx";


const getStatusIcon = (status) => {
    switch (status) {
        case 'OK':
            return <CheckCircleIcon sx={{color: '#75FB4C', fontSize: 20}}/>;
        case 'WARNING':
            return <ErrorIcon sx={{color: '#fbbc04', fontSize: 20}}/>;
        case 'DOWN':
            return <CancelIcon sx={{color: '#d93025', fontSize: 20}}/>;
        default:
            return <RemoveCircleOutlineIcon sx={{color: '#666', fontSize: 20}}/>;
    }
};

function ServiceTable() {

    const {rows} = useServices();
    const {dateColumns} = useDates();

    return (
        <div style={{width: '100%'}}>
            <TableContainer
                component={Paper}
                sx={{
                    backgroundColor: 'transparent',
                    backgroundImage: 'none',
                    boxShadow: 'none',
                    border: '1px solid #444',
                    borderRadius: '8px'
                }}
            >
                <Table sx={{minWidth: 650}} aria-label="status table">


                    <TableHead>
                        <TableRow>

                            <TableCell sx={{color: '#888', borderColor: '#444', fontWeight: 'bold', fontSize: '13px'}}>
                                Hizmetler
                            </TableCell>


                            {dateColumns.map((date, index) => (
                                <TableCell
                                    key={index}
                                    align="center"
                                    sx={{
                                        color: '#888',
                                        borderColor: '#444',
                                        fontWeight: 'bold',
                                        fontSize: '13px',
                                        minWidth: '80px'
                                    }}
                                >
                                    {date}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>


                    <TableBody>
                        {rows.map((service) => (
                            <TableRow
                                key={service.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >

                                <TableCell
                                    component="th"
                                    scope="row"
                                    sx={{color: 'black', borderColor: '#444', fontWeight: 500}}
                                >
                                    {service.name}
                                </TableCell>

                                {service.history.map((status, index) => (
                                    <TableCell key={index} align="center" sx={{borderColor: '#444'}}>
                                        {getStatusIcon(status)}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default ServiceTable;