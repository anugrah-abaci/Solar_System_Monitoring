import { AppBar, Toolbar, Typography, IconButton, Box, Select, MenuItem, FormControl } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TuneIcon from '@mui/icons-material/Tune';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const lastUpdated = '15 April 2024, 14:25';
const siteLabel = 'Site 01 - Solar Pole / Surveillance';

export function Header() {
  return (
    <AppBar position="static" sx={{ bgcolor: 'background.paper', boxShadow: 0 }}>
      <Toolbar sx={{ flexWrap: 'wrap', gap: 1, py: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mr: 'auto' }}>
          <WbSunnyIcon sx={{ color: 'primary.main', fontSize: 32 }} />
          <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: '0.08em' }}>
            SOLAR SYSTEM MONITORING
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 0.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography variant="body2" color="text.secondary">
              Updated: {lastUpdated}
            </Typography>
            <IconButton size="small" color="inherit" aria-label="Settings">
              <SettingsIcon />
            </IconButton>
            <IconButton size="small" color="inherit" aria-label="Notifications">
              <NotificationsIcon />
            </IconButton>
            <IconButton size="small" color="inherit" aria-label="Filter">
              <TuneIcon />
            </IconButton>
          </Box>
          <FormControl size="small" sx={{ minWidth: 220 }}>
            <Select
              value={siteLabel}
              displayEmpty
              variant="standard"
              disableUnderline
              IconComponent={KeyboardArrowDownIcon}
              sx={{ color: 'text.primary' }}
            >
              <MenuItem value={siteLabel}>{siteLabel}</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
