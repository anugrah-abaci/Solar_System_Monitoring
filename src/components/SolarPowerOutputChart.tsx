import { Card, CardContent, Typography, Box, Divider } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CircleIcon from '@mui/icons-material/Circle';
import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

// Dummy solar output curve: steep midday peak touching 1.14 kW
const series = [
  {
    name: 'kW',
    // 6 AM → 6 PM, steep rise to 1.14 at 12 PM then sharp fall
    data: [0.0, 0.02, 0.08, 0.25, 0.58, 0.95, 1.14, 0.92, 0.62, 0.35, 0.15, 0.05, 0.0],
  },
];

// Only show key ticks on the x‑axis like the design
const categories = [
  '6 AM',
  '7 AM',
  '8 AM',
  '9 AM',
  '10 AM',
  '11 AM',
  '12 PM',
  '1 PM',
  '2 PM',
  '3 PM',
  '4 PM',
  '5 PM',
  '6 PM',
];

const options: ApexOptions = {
  chart: {
    type: 'area',
    toolbar: { show: false },
    zoom: { enabled: false },
    background: 'transparent',
    dropShadow: {
      enabled: true,
      top: 10,
      left: 0,
      blur: 12,
      color: '#ffc107',
      opacity: 0.25,
    },
  },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 3 },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.85,
      opacityTo: 0.05,
      stops: [0, 40, 100],
      colorStops: [
        { offset: 0, color: '#ffea00', opacity: 1 },
        { offset: 40, color: '#ffc107', opacity: 0.9 },
        { offset: 100, color: '#ff9800', opacity: 0.1 },
      ],
    },
  },
  colors: ['#ffeb3b'],
  xaxis: {
    categories,
    tickAmount: 4,
    labels: {
      style: { colors: Array(categories.length).fill('#b0bec5') },
      offsetY: 4,
    },
    axisBorder: { show: false },
    axisTicks: { show: false },
    crosshairs: {
      show: true,
      stroke: {
        color: 'rgba(255,255,255,0.25)',
        width: 1,
        dashArray: 0,
      },
    },
  },
  yaxis: {
    min: 0,
    max: 1.3,
    tickAmount: 4,
    labels: {
      formatter: (v: number) => {
        const points = [0, 0.5, 0.7, 1.1, 1.3];
        const idx = Math.round((v / 1.3) * (points.length - 1));
        const val = points[Math.min(Math.max(idx, 0), points.length - 1)];
        return `${val === 0 ? '0.0' : val.toFixed(1)} kW`;
      },
      style: { colors: '#b0bec5' },
      offsetX: -4,
    },
  },
  grid: {
    borderColor: 'rgba(255,255,255,0.14)',
    xaxis: { lines: { show: true } },
    yaxis: { lines: { show: true } },
    strokeDashArray: 0,
    padding: { left: 48, right: 16 },
  },
  tooltip: {
    theme: 'dark',
    x: { show: true },
    y: {
      formatter: (v) => `${v.toFixed(2)} kW`,
    },
  },
};

export function SolarPowerOutputChart() {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          SOLAR POWER OUTPUT
        </Typography>
        <Box sx={{ position: 'relative', height: 220 }}>
          <ReactApexChart options={options} series={series} type="area" height={220} />
          {/* Sun at 12 PM x-axis: plot center = left padding + half plot width; ~56% of container */}
          <Box
            sx={{
              position: 'absolute',
              top: 14,
              left: '55%',
              transform: 'translateX(-50%)',
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              filter: 'drop-shadow(0 0 10px rgba(255, 235, 59, 0.9))',
            }}
          >
            <WbSunnyIcon sx={{ color: '#ffeb3b', fontSize: 30 }} />
          </Box>
        </Box>
        <Divider sx={{ my: 1.5 }} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 1.5,
            fontSize: 13,
          }}
        >

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CircleIcon sx={{ fontSize: 10, color: 'text.secondary' }} />
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Current: <Box component="span" sx={{ fontWeight: 700 }}>1.08 kW</Box>
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
            <AccessTimeIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">
              Today Max: <Box component="span" sx={{ fontWeight: 700, color: 'text.primary' }}>1.14 kW</Box> @ 12:40 PM
            </Typography>
            <KeyboardArrowDownIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
