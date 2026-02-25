import { Card, CardContent, Typography, Box } from '@mui/material';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PowerIcon from '@mui/icons-material/Power';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

// First: curve from the start (0.1) → up → straight at 0.35. Second: curve from 0.14 → up → straight at 1.21.
const series = [
  {
    name: 'Battery Charge',
    data: [0.08, 0.09, 0.10, 0.21, 0.26, 0.38, 0.35, 0.35, null, null, null, null, null],
  },
  {
    name: 'Charge',
    data: [0.14, 0.35, 0.55, 0.8, 1.05, 1.10, 1.15, 1.15, null, null, null, null, null],
  },
];

const categories = [
  '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM',
  '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM',
];

const options: ApexOptions = {
  chart: {
    type: 'area',
    stacked: false,
    toolbar: { show: false },
    zoom: { enabled: false },
    background: 'transparent',
  },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 2 },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.65,
      opacityTo: 0.15,
    },
  },
  colors: ['#4caf50', '#ffb300'],
  xaxis: {
    categories,
    tickAmount: 4,
    labels: {
      style: { colors: '#b0bec5' },
      offsetY: 4,
    },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    min: 0,
    max: 1.3,
    tickAmount: 4,
    labels: {
      formatter: (v: number) => {
        const ticks = [0, 0.2, 0.5, 1.2, 1.3];
        const closest = ticks.reduce((a, b) =>
          Math.abs(a - v) < Math.abs(b - v) ? a : b
        );
        return `${closest.toFixed(1)} kW`;
      },
      style: { colors: '#b0bec5' },
      offsetX: -4,
    },
  },
  grid: {
    borderColor: 'rgba(255,255,255,0.08)',
    xaxis: { lines: { show: true } },
    yaxis: { lines: { show: true } },
    padding: { left: 48, right: 140 },
  },
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
        <Box sx={{ position: 'relative', height: 240 }}>
          <Box sx={{ height: 240 }}>
            <ReactApexChart options={options} series={series} type="area" height={240} />
          </Box>
          {/* Small power label stays at top-right */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 8,
            }}
          >
            <Typography variant="caption" color="text.secondary" sx={{ fontSize: 11 }}>
              1.0W
            </Typography>
          </Box>
          {/* Sun + metrics overlay – shifted to the middle-right of the graph */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '62%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
            }}
          >
            {/* Sun icon to the left of all metric icons – nudged up */}
            <Box sx={{ mt: -1.5, lineHeight: 0 }}>
              <WbSunnyIcon sx={{ color: '#ffeb3b', fontSize: 34, filter: 'drop-shadow(0 0 8px rgba(255, 235, 59, 0.8))' }} />
            </Box>
            {/* Two columns: left = icon + label, right = single column (1.8, 1.6, 0.2); rows aligned */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
              {/* Row 1: 5.4 kWh | 1.8 kWh (67%) */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, minWidth: 140 }}>
                  <BatteryFullIcon sx={{ color: '#ffb300', fontSize: 26 }} />
                  <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    5.4 kWh
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'nowrap' }}>
                  1.8 kWh (67%)
                </Typography>
              </Box>
              {/* Row 2: Battery Charge | 1.6 kWh (30%) */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, minWidth: 140 }}>
                  <BatteryChargingFullIcon sx={{ color: '#4caf50', fontSize: 26 }} />
                  <Typography variant="body2" sx={{ color: 'text.primary' }}>
                    Battery Charge
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'nowrap' }}>
                  1.6 kWh (30%)
                </Typography>
              </Box>
              {/* Row 3: 0 kWh | 0.2 kWh (3%) */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, minWidth: 140 }}>
                  <PowerIcon sx={{ color: 'text.secondary', fontSize: 24 }} />
                  <Typography variant="body2" sx={{ color: 'text.primary' }}>
                    0 kWh
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'nowrap' }}>
                  0.2 kWh (3%)
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Summary bar: Today + Autonomy */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 1.5,
            mt: 1.5,
            pt: 1,
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <AccessTimeIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
            <Typography variant="body2" sx={{ color: 'text.primary' }}>
              Today: 5.4 kWh
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <CheckCircleIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
            <Typography variant="body2" sx={{ color: 'text.primary' }}>
              Autonomy: 1.9 Days
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
