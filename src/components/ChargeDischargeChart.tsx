import { Card, CardContent, Typography, Box } from '@mui/material';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

const series = [
  { name: 'Charge', data: [0, 0.3, 0.6, 0.9, 1.1, 1.2, 1.1, 0.9, 0.7, 0.5, 0.3, 0.1, 0] },
  { name: 'Battery', data: [0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.5, 0.45, 0.4, 0.35, 0.3] },
];
const categories = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM'];

const options: ApexOptions = {
  chart: { type: 'area', stacked: true, toolbar: { show: false } },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 2 },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.6,
      opacityTo: 0.2,
    },
  },
  colors: ['#ffc107', '#4caf50'],
  xaxis: { categories, labels: { style: { colors: '#b0bec5' } } },
  yaxis: {
    min: 0,
    max: 1.3,
    labels: { formatter: (v) => v.toFixed(1) + ' kW', style: { colors: '#b0bec5' } },
  },
  grid: { borderColor: 'rgba(255,255,255,0.08)' },
  legend: { show: false },
  tooltip: { theme: 'dark' },
};

export function ChargeDischargeChart() {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          CHARGE / DISCHARGE [W]
        </Typography>
        <Box sx={{ height: 220 }}>
          <ReactApexChart options={options} series={series} type="area" height={220} />
        </Box>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 1 }}>
          <Typography variant="body2">5.4 kWh · 1.8 kWh (67%)</Typography>
          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <BatteryFullIcon sx={{ color: '#4caf50', fontSize: 16 }} /> Battery Charge 1.6 kWh (30%)
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            Today: 5.4 kWh · Autonomy: 1.9 Days <AccessTimeIcon sx={{ fontSize: 14 }} />
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
