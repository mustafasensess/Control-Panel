import { Paper, Typography, Box, Divider, Button } from "@mui/material";
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function SideStatsBox() {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 3,
                minHeight: 'calc(98vh - 80px)',
                borderRadius: '24px',
                boxShadow: '0px 10px 30px rgba(0,0,0,0.08)',
                backgroundColor: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                gap: 3
            }}
        >

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Canlı Veriler</Typography>
                <Button size="small" endIcon={<ArrowForwardIcon />} sx={{ textTransform: 'none' }}>
                    Detay
                </Button>
            </Box>

            <Divider />

            <Box>
                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                    Haftalık Ziyaretçi
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>24.5k</Typography>
                <Box sx={{ height: 100, width: '100%' }}>
                    <SparkLineChart
                        data={[1, 4, 2, 5, 7, 2, 4, 6]}
                        height={100}
                        colors={['#1976d2']}
                        area
                    />
                </Box>
            </Box>

            <Box>
                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                    Cihaz Dağılımı
                </Typography>
                <PieChart
                    series={[
                        {
                            data: [
                                { id: 0, value: 60, color: '#00C49F' },
                                { id: 1, value: 40, color: '#FFBB28' },
                            ],
                            innerRadius: 40,
                            outerRadius: 80,
                            paddingAngle: 5,
                            cornerRadius: 5,
                        },
                    ]}
                    height={180}
                    slotProps={{ legend: { hidden: true } }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 1 }}>
                    <Typography variant="caption" sx={{ color: '#00C49F' }}>● Mobil</Typography>
                    <Typography variant="caption" sx={{ color: '#FFBB28' }}>● Masaüstü</Typography>
                </Box>
            </Box>

            <Box sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                    Sunucu Yükü (%)
                </Typography>
                <BarChart
                    xAxis={[{ scaleType: 'band', data: ['S1', 'S2', 'S3'] }]}
                    series={[{ data: [80, 40, 60], color: '#ff5252' }]}
                    height={170}
                    borderRadius={8}
                />
            </Box>
        </Paper>
    );
}

export default SideStatsBox;