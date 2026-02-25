import { Card, CardContent, Typography, Box } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import SearchIcon from '@mui/icons-material/Search';
import batteryImg from '../assets/images/Battery.png';

// Full circle track (transparent fill) – maintains circular shape
const trackSeries = [0];
const trackOptions: ApexOptions = {
  chart: { type: 'radialBar', sparkline: { enabled: true } },
  plotOptions: {
    radialBar: {
      startAngle: -180,
      endAngle: 180,
      hollow: { size: '68%' },
      // track: { background: 'rgba(255,255,255,0.25)' },S
      dataLabels: { show: false },
    },
  },
  fill: {     opacity: 0.5,
   },
  stroke: { lineCap: 'butt' },
};

const primarySeries = [76];
const primaryOptions: ApexOptions = {
  chart: { type: 'radialBar', sparkline: { enabled: true } },
  plotOptions: {
    radialBar: {
      startAngle: 270,
      endAngle: 390,
      hollow: { size: '68%' },
      track: { background: 'transparent' },
      dataLabels: {
        name: { show: false },
        value: {
          offsetY: 0,
          fontSize: '32px',
          fontWeight: 700,
          color: '#ffffff',
          formatter: (v) => v + '%',
        },
      },
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'horizontal',
      gradientToColors: ['#4caf50'],
      colorStops: [
        { offset: 0, color: '#aed581', opacity: 1 },
        { offset: 100, color: '#4caf50', opacity: 1 },
      ],
    },
  },
  stroke: { lineCap: 'butt' },
  labels: [''],
};

const secondarySeries = [76];
const secondaryOptions: ApexOptions = {
  chart: { type: 'radialBar', sparkline: { enabled: true } },
  plotOptions: {
    radialBar: {
      startAngle: -0,
      endAngle: 120,
      hollow: { size: '68%' },
      track: { background: 'transparent' },
      dataLabels: {
        show: false,
      },
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'horizontal',
      gradientToColors: ['#ffb300'],
      colorStops: [
        { offset: 0, color: '#ffeb3b', opacity: 1 },
        { offset: 100, color: '#ffb300', opacity: 1 },
      ],
    },
  },
  stroke: { lineCap: 'butt' },
};

export function EnergyBalanceChart() {
  return (
    <Card sx={{ height: '100%', borderRadius: 2 }}>
      <CardContent sx={{ '&:last-child': { pb: 2 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 0.5 }}>
          <Typography variant="overline" color="text.secondary" sx={{ fontWeight: 600, letterSpacing: 1.2 }}>
            ENERGY BALANCE
          </Typography>
          <SettingsIcon sx={{ fontSize: 18 }} color="action" />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: -2 }}>
          <Box sx={{ width: '100%', maxWidth: 200, position: 'relative', mb: 2.5 }}>
            <ReactApexChart options={trackOptions} series={trackSeries} type="radialBar" height={200} />
            <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
              <ReactApexChart options={primaryOptions} series={primarySeries} type="radialBar" height={200} />
            </Box>
            <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
              <ReactApexChart options={secondaryOptions} series={secondarySeries} type="radialBar" height={200} />
            </Box>
            <Box
              sx={{
                position: 'absolute',
                left: '50%',
                top: '75%',
                transform: 'translate(-50%, calc(-50% + 12px))',
                display: 'flex',
                justifyContent: 'center',
                pointerEvents: 'none',
              }}
            >
              <Box
                component="img"
                src={batteryImg}
                alt="Battery"
                sx={{ display: 'block', height: 48, width: 'auto' }}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ mt: -1.5 }}>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            Energy: 28.9V / 38.4A
            <SearchIcon sx={{ fontSize: 14, ml: 0.25 }} color="action" />
          </Typography>
          <Box
            sx={{
              mt: 1.5,
              mb: 0,
              mx: 'auto',
              width: '100%',
              height: '1px',
              bgcolor: 'divider',
              borderRadius: 999,
            }}
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              mt: 0.75,
              flexWrap: 'wrap',
            }}
          >
            <Typography variant="body2" color="text.primary">
              Efficiency: 90%
            </Typography>
            <Box
              component="span"
              sx={{
                width: '1px',
                height: 14,
                bgcolor: 'divider',
                borderRadius: 0.5,
              }}
            />
            <Typography variant="body2" color="text.primary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <OfflineBoltIcon sx={{ fontSize: 14, color: '#f44336' }} />
              • 444 Wh
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
