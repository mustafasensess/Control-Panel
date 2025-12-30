import { fakerTR as faker } from "@faker-js/faker";
import { Link } from "react-router-dom";
import {Box, Grid, Paper, Typography, Select, MenuItem, FormControl} from "@mui/material";
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { Gauge, RadarChart } from "@mui/x-charts";
import { useDates } from "../contexts/DateContext";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



function createRandomPost() {
    return { title: faker.person.firstName() }
}

function StatusBox() {

    const { dateColumns, selectedDateIndex, setSelectedDateIndex } = useDates();

    const handleDateChange = (event, newIndex) => {
        if (newIndex !== null) {
            setSelectedDateIndex(newIndex);
        }
    };

    const colors = {
        borderOK: '#4caf50',
        borderDown: '#ef5350',
        content: 'black',
        chart: '#1976d2'
    };


    const dashboardItems = [
        {
            id: 1,
            title: faker.food.dish(),
            size: 8,
            isDown: false,
            component: (
                <PieChart
                    series={[{
                        data: [
                            { id: 0, value: 35, label: 'Kurumsal', color: '#8b5cf6' },
                            { id: 1, value: 45, label: 'Bireysel', color: '#ec4899' },
                            { id: 2, value: 20, label: 'Diğer', color: '#14b8a6' },
                        ],
                        innerRadius: 30,
                        paddingAngle: 2,
                    }]}
                    height={160}
                />
            )
        },
        {
            id: 2,
            title: faker.commerce.department(),
            size: 8,
            isDown: true,
            component: (
                <RadarChart
                    height={150}
                    series={[{ data: [120, 98, 86, 99, 85, 65] }]}
                    radar={{
                        max: 120,
                        metrics: Array.from({ length: 6 }, () => createRandomPost().title),
                    }}
                />
            )
        },
        {
            id: 3,
            title: faker.book.title(),
            size: 6,
            isDown: false,
            component: (
                <Gauge
                    width={200}
                    height={150}
                    value={75}
                    startAngle={-110}
                    endAngle={110}
                    sx={{
                        [`& .css-b9rdr6-MuiGauge-valueArc`]: {
                            fill: '#52b202',
                        },
                    }}
                    text={({ value, valueMax }) => `${value} / ${valueMax}`}
                />
            )
        },
        {
            id: 4,
            title: faker.book.author(),
            size: 4,
            isDown: false,
            component: (
                <LineChart
                    xAxis={[{ data: [1, 2, 3, 4, 5, 6], label: 'Aylar' }]}
                    series={[{
                        data: [20, 50, 45, 80, 70, 100],
                        color: colors.chart,
                        area: true,
                    }]}
                    height={180}
                    margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
                />
            )
        },
        {
            id: 5,
            title: faker.book.genre(),
            size: 6,
            isDown: true,
            component: (
                <BarChart
                    series={[{ data: [65, 50, 80, 90] }]}
                    xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
                    height={180}
                    colors={["#ec4899"]}
                    borderRadius={5}
                />
            )
        },
        {
            id: 6,
            title: "Vertical Logistic",
            size: 8,
            isDown: false,
            component: (
                <LineChart
                    xAxis={[{ data: [1, 2, 3, 4, 5, 6], label: 'Aylar' }]}
                    series={[{
                        data: [20, 50, 45, 80, 70, 100],
                        color: colors.chart,
                        area: true,
                    }]}
                    height={180}
                    margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
                />
            )
        }
    ];

    const getCardStyle = (isDown = false) => {
        const borderColor = isDown ? colors.borderDown : colors.borderOK;
        return {
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 3,
            border: `1px solid ${borderColor}`,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            backgroundColor: '#fff',
            height: '100%',
            '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: `0px 12px 24px ${isDown ? 'rgba(239, 83, 80, 0.2)' : 'rgba(76, 175, 80, 0.2)'}`
            }
        };
    };

    return (

            <Paper
                elevation={0}
                sx={{
                    p: 6,
                    pb: 10,
                    borderRadius: '24px',
                    border: 'none',
                    boxShadow: '0px 10px 30px rgba(0,0,0,0.08)',
                    backgroundColor: '#ffffff',
                    minHeight: 'calc(90vh - 80px)',


                }}
            >
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 2,
                    mb: 4
                }}>


                    <Typography variant="h4" sx={{ mb: 1, fontWeight: 'bold', color: '#1a1a1a' }}>
                        Kontrol Paneli
                    </Typography>


                    <Box sx={{ minWidth: 100 }}>
                        <FormControl fullWidth size="small">
                            <Select
                                value={selectedDateIndex}
                                onChange={(e) => handleDateChange(e, e.target.value)}
                                displayEmpty
                                IconComponent={KeyboardArrowDownIcon}
                                sx={{
                                    bgcolor: '#f5f7fa',
                                    borderRadius: '10px',
                                    fontWeight: 600,
                                    color: '#6c757d',
                                    fontSize: '0.9rem',
                                    boxShadow: 'none',
                                    '.MuiOutlinedInput-notchedOutline': { border: 'none' },
                                    '&:hover': {
                                        bgcolor: '#eaeff5',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        border: '1px solid #1976d2'
                                    },
                                }}
                                MenuProps={{
                                    PaperProps: {
                                        sx: {
                                            borderRadius: '10px',
                                            mt: 1,
                                            maxHeight: 300,
                                            boxShadow: '0px 4px 20px rgba(0,0,0,0.1)'
                                        }
                                    }
                                }}
                            >
                                {dateColumns.map((date, index) => (
                                    <MenuItem
                                        key={index}
                                        value={index}
                                        sx={{
                                            fontSize: '0.9rem',
                                            fontWeight: 500,
                                            mx: 1,
                                            borderRadius: '8px',
                                            '&.Mui-selected': {
                                                bgcolor: 'rgba(25, 118, 210, 0.08)',
                                                color: '#1976d2',
                                                fontWeight: 600
                                            },
                                            '&:hover': {
                                                bgcolor: '#f5f5f5'
                                            }
                                        }}
                                    >
                                        {date}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </Box>


                <Grid container
                      columnSpacing={2}
                      rowSpacing={8}
                >
                    {dashboardItems.map((item) => (
                        <Grid item xs={12} md={item.size} key={item.id}>
                            <Box
                                component={Link}
                                to="/server"
                                sx={{ textDecoration: 'none', display: 'block', height: '100%' }}
                            >
                                <Paper sx={getCardStyle(item.isDown)}>
                                    <Typography
                                        variant="h6"
                                        sx={{ color: colors.content, fontWeight: 'bold', mb: 2 }}
                                    >
                                        {item.isDown ? '📉' : '📈'} {item.title}
                                    </Typography>

                                    <Box sx={{
                                        flexGrow: 1,
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        {item.component}
                                    </Box>
                                </Paper>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Paper>

    );
}

export default StatusBox;