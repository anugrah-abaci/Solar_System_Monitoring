import { Card, CardContent, Typography, Box, Divider } from '@mui/material';
import AirIcon from '@mui/icons-material/Air';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

const series = [
  { name: 'W', data: [0, 455, 10000, 1000, -3000, -4550] },
];
const categories = ['6 AM', '12 PM', '4 PM', '12 PM', '6 PM'];

const options: ApexOptions = {
  chart: { type: 'area', stacked: false, toolbar: { show: false }, background: 'transparent' },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 2 },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 1.0,
      opacityTo: 0.08,
    },
  },
  colors: ['#ff9800', '#64b5f6'],
  plotOptions: {
    area: {
      fillTo: 'origin',
    },
  },
  annotations: {
    yaxis: [
      {
        y: 0,
        borderColor: '#90a4ae',
        borderWidth: 1,
        strokeDashArray: 0,
      },
    ],
  },
  xaxis: {
    categories,
    labels: { style: { colors: '#b0bec5' } },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    opposite: true,
    labels: {
      style: { colors: '#b0bec5' },
      formatter: (val: number) => `${val} W`,
    },
    axisBorder: { show: false },
    crosshairs: { show: false },
  },
  grid: {
    borderColor: 'rgba(255,255,255,0.08)',
    xaxis: { lines: { show: false } },
    yaxis: { lines: { show: true } },
    padding: { left: 0, right: 48 },
  },
  legend: { show: false },
  tooltip: { theme: 'dark', y: { formatter: (v: number) => `${v} W` } },
};

export function AlertsChartPanel() {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          ALERTS & NOTIFICATIONS
        </Typography>
        <Divider orientation="horizontal" flexItem />
        <Box sx={{ position: 'relative', height: 180 }}>
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              top: 8,
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              px: 1.5,
              py: 0.75,
              borderRadius: 1,
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <AirIcon sx={{ fontSize: 22, color: '#ffc107' }} />
              <Typography variant="caption" sx={{ fontSize: 10, lineHeight: 1 }}>AN</Typography>
            </Box>
            <Box>
              <Typography variant="body2" fontWeight={600}>5% °C</Typography>
              <Typography variant="caption" color="text.secondary">Cabinet: 40°C</Typography>
            </Box>
          </Box>
          <ReactApexChart options={options} series={series} type="area" height={180} />
        </Box>
        <Divider orientation="horizontal" flexItem />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1, mt: 1 }}>
          <Typography variant="body2">
            Today&apos;s Yield: <Box component="span" fontWeight={500}>5.4 kWh</Box>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <WarningAmberIcon sx={{ fontSize: 16 }} />
            Autonomy: <Box component="span" fontWeight={500} color="text.primary">1.9 Days</Box>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
