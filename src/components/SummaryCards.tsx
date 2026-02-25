import { Card, CardContent, Typography, Box, LinearProgress, Grid, Divider } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import PowerIcon from '@mui/icons-material/Power';
import Battery4BarIcon from '@mui/icons-material/Battery4Bar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ShieldIcon from '@mui/icons-material/Shield';

const cards = [
  {
    icon: <WbSunnyIcon sx={{ color: '#ffc107', fontSize: 28 }} />,
    title: 'SOLAR POWER',
    value: '1.08 kW',
    sub: '1.081 max @ 12:40 PM',
    extra: 'Last before: AM - -17°30',
    extraIcon: 'clock',
    thinYellowLine: true,
    progress: null,
    progressLabel: null,
    batteryBar: null,
  },
  {
    icon: <WbTwilightIcon sx={{ color: '#ffc107', fontSize: 28 }} />,
    title: 'DAILY YIELD',
    value: '5.4 kWh',
    sub: null,
    extra: 'Area: 1.68 kW /M - 117°30',
    extraIcon: 'shield',
    thinYellowLine: false,
    progress: 95,
    progressColor: '#ffc107',
    progressLabel: '95%',
    batteryBar: null,
  },
  {
    icon: <PowerIcon sx={{ color: 'rgba(255,255,255,0.9)', fontSize: 28 }} />,
    title: 'LOAD POWER',
    value: '148 W',
    sub: null,
    extra: 'Open: 1.68 W /8: -17°90',
    extraIcon: 'clock',
    thinYellowLine: false,
    progress: 99,
    progressColor: '#2196f3',
    progressLabel: '99%',
    batteryBar: null,
  },
  {
    icon: <Battery4BarIcon sx={{ color: '#4caf50', fontSize: 28 }} />,
    title: 'BATTERY STATUS',
    value: '76%',
    sub: 'Up to 1.9 Days',
    extra: null,
    extraIcon: null,
    thinYellowLine: false,
    progress: null,
    progressLabel: null,
    batteryBar: 76,
  },
];

/** Status bar width for card 1 (Solar Power) – shorter yellow line */
const FIRST_CARD_STATUS_BAR_WIDTH = '38%';
/** Status bar width for cards 2–3 (Daily Yield, Load Power) */
const STATUS_BAR_WIDTH = '56%';

function BatteryLevelBar({ value }: { value: number }) {
  const segments = 10;
  const filled = Math.min(segments, Math.floor((value / 100) * segments));
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'stretch',
        gap: 0.35,
        mt: 1.25,
        width: '100%',
      }}
    >
      {Array.from({ length: segments }).map((_, i) => (
        <Box
          key={i}
          sx={{
            flex: 1,
            height: 18,
            borderRadius: 0.5,
            minWidth: 0,
            background: i < filled
              ? 'linear-gradient(180deg, rgba(255,255,255,0.25) 0%, #4caf50 40%, #2e7d32 100%)'
              : 'rgba(255,255,255,0.1)',
            boxShadow: i < filled ? 'inset 0 1px 0 rgba(255,255,255,0.2)' : 'none',
          }}
        />
      ))}
    </Box>
  );
}

export function SummaryCards() {
  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      {cards.map((c) => (
        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={c.title}>
          <Card sx={{ height: '100%', borderRadius: 2 }}>
            <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
              {/* Header: icon + title */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, mb: 1 }}>
                {c.icon}
                <Typography
                  variant="overline"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    fontSize: '0.75rem',
                  }}
                >
                  {c.title}
                </Typography>
              </Box>

              {/* Primary value */}
              <Typography variant="h5" sx={{ fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, color: 'text.primary' }}>
                {c.value}
              </Typography>

              {/* Status bar row: same width bar in cards 1–3 (use first card’s bar width) */}
              {c.thinYellowLine && c.sub && (
                <>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      mt: 1,
                      width: '100%',
                    }}
                  >
                    <Box
                      sx={{
width: FIRST_CARD_STATUS_BAR_WIDTH,
                      height: 3,
                        borderRadius: 0,
                        bgcolor: '#ffc107',
                        flexShrink: 0,
                      }}
                    />
                    <Typography variant="body2" color="text.primary" sx={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
                      {c.sub}
                    </Typography>
                  </Box>
                  <Divider sx={{ mt: 1, borderColor: 'rgba(255,255,255,0.12)' }} />
                </>
              )}

              {/* Progress bar with label (Daily Yield, Load Power) - same bar width as card 1 */}
              {c.progress != null && (
                <>
                  <Box sx={{ mt: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: STATUS_BAR_WIDTH, flexShrink: 0 }}>
                      <LinearProgress
                        variant="determinate"
                        value={c.progress}
                        sx={{
                          height: 6,
                          borderRadius: 0,
                          bgcolor: 'rgba(255,255,255,0.12)',
                          '& .MuiLinearProgress-bar': {
                            bgcolor: c.progressColor,
                            borderRadius: 0,
                          },
                        }}
                      />
                    </Box>
                    {c.progressLabel != null && (
                      <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500, flexShrink: 0 }}>
                        {c.progressLabel}
                      </Typography>
                    )}
                  </Box>
                  <Divider sx={{ mt: 1, borderColor: 'rgba(255,255,255,0.12)' }} />
                </>
              )}

              {/* Secondary text (below bar or value) - not for Solar Power (sub is on yellow line) */}
              {c.sub && !c.thinYellowLine && (
                <Typography variant="body2" color="text.secondary" sx={{ mt: c.progress != null ? 0.5 : 1.25, lineHeight: 1.4 }}>
                  {c.sub}
                </Typography>
              )}

              {/* Battery: divider above, then 10-segment bar */}
              {c.batteryBar != null && (
                <>
                  <Divider sx={{ mt: 1.25, mb: 0, borderColor: 'rgba(255,255,255,0.12)' }} />
                  <BatteryLevelBar value={c.batteryBar} />
                </>
              )}

              {/* Extra line with icon (clock or shield) */}
              {c.extra && (
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    mt: 0.75,
                  }}
                >
                  {c.extraIcon === 'clock' && <AccessTimeIcon sx={{ fontSize: 14 }} />}
                  {c.extraIcon === 'shield' && <ShieldIcon sx={{ fontSize: 14 }} />}
                  {c.extra}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
