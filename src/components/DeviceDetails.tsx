import { Card, CardContent, Typography, Box } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

const details = [
  { label: 'PV', value: '85.2V' },
  { label: 'CV', value: '11.6A' },
  { label: 'Bat: Battery', value: '28.9V' },
  { label: 'Pat: Battery', value: '34.5A' },
];

export function DeviceDetails() {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1, mb: 1 }}>
          <Typography variant="overline" color="text.secondary">
            DEVICE DETAILS
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography variant="caption" sx={{ color: 'primary.main' }}>MPPT CHARGE CONTROLLER</Typography>
            <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'primary.main' }} />
            <SettingsIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
          </Box>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
          {details.map((d) => (
            <Box key={d.label} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 0.5 }}>
              <Typography variant="body2" color="text.secondary">{d.label}</Typography>
              <Typography variant="body2" fontWeight={600}>{d.value}</Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
