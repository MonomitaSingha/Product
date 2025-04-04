// import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';



export default function Teacher() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container sx={{ color: 'text.primary' }}>
                <Grid size={4}>
                    <Typography>Filled</Typography>
                </Grid>
                <Grid size={8}>
                    <DeleteIcon />
                    {/* <DeleteForeverIcon /> */}
                </Grid>
            </Grid>

        </Box>
    );
}
