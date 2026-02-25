import { Box, Container, Grid } from '@mui/material';
import { Header } from './Header';
import { SummaryCards } from './SummaryCards';
import { SolarPowerOutputChart } from './SolarPowerOutputChart';
import { ChargeDischargeChart } from './ChargeDischargeChart';
import { AlertsChartPanel } from './AlertsChartPanel';
import { EnergyBalanceChart } from './EnergyBalanceChart';
import { BatteryStatusList } from './BatteryStatusList';
// import { DeviceDetails } from './DeviceDetails';
import { WindAlertsPanel } from './WindAlertsPanel';
import { TemperaturePanel } from './TemperaturePanel';

export function Dashboard() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', pb: 3 }}>
      <Header />
      <Container maxWidth="xl" sx={{ mt: 2 }}>
        <SummaryCards />

        <Grid container spacing={2} >
          {/* Left column - charts */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Grid container spacing={2} style={{ height: '100%' }}>
              <Grid size={{ xs: 12 }}>
                <SolarPowerOutputChart />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <ChargeDischargeChart />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <AlertsChartPanel />
              </Grid>
            </Grid>
          </Grid>

          {/* Right column - status panels */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }}>
                <EnergyBalanceChart />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <BatteryStatusList />
              </Grid>
              {/* <Grid size={{ xs: 12 }}>
                <DeviceDetails />
              </Grid> */}
              <Grid size={{ xs: 12 }}>
                <WindAlertsPanel />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Bottom full-width panel */}
        <Box sx={{ mt: 2 }}>
          <TemperaturePanel />
        </Box>
      </Container>
    </Box>
  );
}
