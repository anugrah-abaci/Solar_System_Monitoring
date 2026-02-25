import { Box, Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const items = [
  { primary: 'Solar Power', status: 'OK' },
  { primary: 'Battery', status: 'OK' },
  { primary: 'Inverter', status: 'OK' },
  { primary: 'System Logs', status: 'No Alarms' },
];
const details = [
  { label: 'PV', value: '85.2V' },
  { label: 'Bat: Battery', value: '28.9V' },
  { label: 'CV', value: '11.6A' },
  { label: 'Pat: Battery', value: '34.5A' },
];
export function BatteryStatusList() {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="overline" color="text.secondary">
            BATTERY STATUS
          </Typography>
          <SettingsIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
        </Box>
        <Divider orientation="horizontal" flexItem />
        <List dense disablePadding>
          {items.map((item) => (
            <ListItem key={item.primary} disablePadding sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <CheckCircleIcon sx={{ color: '#4caf50', fontSize: 20 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
                    <Typography variant="body2">{item.primary}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {item.status}
                    </Typography>
                  </Box>
                }
              />
              <ChevronRightIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
            </ListItem>
          ))}
        </List>
        <Divider orientation="horizontal" flexItem />

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1, mb: 1 }}>
          <Typography variant="overline" color="text.secondary">
            DEVICE DETAILS
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          </Box>
        </Box>
        <Divider orientation="horizontal" flexItem />
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'nowrap', py: 1.5 }}>
          <Typography variant="caption">MPPT CHARGE CONTROLLER</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'primary.main', flexShrink: 0 }} />
            <SettingsIcon sx={{ fontSize: 18, color: 'text.secondary', flexShrink: 0 }} />
          </Box>
        </Box>
        <Divider orientation="horizontal" flexItem />

        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
          {details.map((d) => (
            <Box key={d.label} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', py: 0.5 }}>
              <Typography variant="body2" color="text.secondary">{d.label} : &nbsp;</Typography>
              <Typography variant="body2" fontWeight={600}>{d.value}</Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
