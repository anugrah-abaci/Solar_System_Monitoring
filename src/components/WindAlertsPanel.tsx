import { Card, CardContent, Typography, Box, Divider } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AirIcon from '@mui/icons-material/Air';

const alerts = [
  { icon: <CheckCircleIcon sx={{ color: '#4caf50', fontSize: 18 }} />, text: 'Normal', fault: false },
  { icon: <CheckCircleIcon sx={{ color: '#4caf50', fontSize: 18 }} />, text: 'Battery Over Voltage Fault', fault: false },
  { icon: <LightbulbIcon sx={{ color: '#4caf50', fontSize: 18 }} />, text: 'PV Input Over Voltage Fault', fault: false },
  { icon: <WarningAmberIcon sx={{ color: 'error.main', fontSize: 18 }} />, text: 'Temperature Cutoff Fault', fault: true },
];

export function WindAlertsPanel() {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
          <AirIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
          <Typography variant="overline" color="text.secondary">
            Wind
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 0.5 }}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Box
                key={i}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  bgcolor: i <= 3 ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.15)',
                }}
              />
            ))}
          </Box>
        </Box>
        <Box sx={{ bgcolor: 'rgba(0,0,0,0.2)', borderRadius: 1, p: 1, mb: 1 }}>
          {alerts.map((a) => (
            <Box key={a.text} sx={{ display: 'flex', alignItems: 'center', gap: 1, py: 0.5 }}>
              {a.icon}
              <Typography variant="body2" >
                {a.text}
              </Typography>
            </Box>
          ))}
          <Divider orientation="horizontal" flexItem />
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', m: 2 }}>
            INCHTEMPERATUR: 46°C / 115 °F
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
