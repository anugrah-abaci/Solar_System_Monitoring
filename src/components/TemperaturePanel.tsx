import { Card, CardContent, Typography, Box, Divider } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const tempItems = [
  { date: '15 ap: 392%', barSegments: [40, 35], value: '-.6°', label: 'Battery Over Voltage', useSegments: true },
  { date: '15 ap: 302%', bar: 15, value: '-16°', label: 'Battery Over Voltage Fault', useSegments: false },
  { date: '15 ap: 202%', bar: 10, value: '-46°', label: 'Temperature Cutoff Fault', useSegments: false },
];

export function TemperaturePanel() {
  return (
    <Card>
      <CardContent>
        {/* Single row: 36°C | 940 W/R | TEMPERATURE: OK */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            justifyContent: 'space-between',
            gap: 2,
            mb: 2,
            flexWrap: 'wrap',
          }}
        >
          <Box sx={{ flex: '1 1 0', minWidth: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
            <WbSunnyIcon sx={{ color: '#FCD137', fontSize: { xs: 44, sm: 60 } }} />
            <Typography variant="h5" fontWeight={500} sx={{ lineHeight: 1.2 }}>36°C</Typography>
            <Typography variant="body2" color="text.secondary">Vorgesteuert</Typography>
          </Box>
          <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />
          <Box sx={{ flex: '1 1 0', minWidth: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
            <WbSunnyIcon sx={{ color: '#FCD137', fontSize: { xs: 44, sm: 60 } }} />
            <Typography variant="h5" fontWeight={500} sx={{ lineHeight: 1.2 }}>
              940 <Typography component="span" variant="body2" sx={{ verticalAlign: 'super', fontSize: '0.75em' }}>W/R</Typography>
            </Typography>
            <Typography variant="body2" color="text.secondary">Vormittag</Typography>
          </Box>
          <Box
            sx={{
              flex: { xs: '1 1 100%', md: '1 1 50%' },
              minWidth: { xs: 0, md: 260 },
              maxWidth: { md: '75%' },
              display: 'flex',
              flexDirection: 'column',
              gap: 1.5,
              pt: { xs: 1, sm: 0 },
              borderTop: { xs: '1px solid', borderColor: 'divider', md: 'none' },
            }}
          >
            <Typography variant="overline" color="text.secondary" sx={{ fontWeight: 600, letterSpacing: 1 }}>
              TEMPERATURE: OK
            </Typography>

            {tempItems.map((item) => (
              <Box
                key={item.label}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: { xs: 1, sm: 1.5 },
                  flexWrap: 'wrap',
                  minWidth: 0,
                }}
              >
                <Typography variant="body2" sx={{ minWidth: { xs: 70, sm: 90 }, flexShrink: 0 }}>{item.date}</Typography>
                <Box sx={{ width: 80, flexShrink: 0, height: 10, bgcolor: 'rgba(255,255,255,0.12)', borderRadius: 1, overflow: 'hidden', display: 'flex' }}>
                  {item.useSegments ? (
                    <>
                      <Box sx={{ width: `${item.barSegments![0]}%`, height: '100%', bgcolor: 'grey.700' }} />
                      <Box sx={{ width: `${item.barSegments![1]}%`, height: '100%', bgcolor: 'grey.500' }} />
                    </>
                  ) : (
                    <Box sx={{ width: `${item.bar}%`, height: '100%', bgcolor: 'warning.main', borderRadius: 1 }} />
                  )}
                </Box>
                <Typography variant="body2" sx={{ minWidth: 36, flexShrink: 0 }}>{item.value}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, minWidth: 0, flex: '1 1 auto' }}>
                  <CheckBoxOutlineBlankIcon sx={{ fontSize: 18, color: 'grey.400', flexShrink: 0 }} />
                  <Divider orientation="vertical" flexItem sx={{ mx: 0.5, display: { xs: 'none', sm: 'block' } }} />
                  <Typography variant="body2" color="text.secondary" sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

      </CardContent>
    </Card>
  );
}
