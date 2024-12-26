import { Icon } from "@iconify/react";
import { Box, Container, Divider, Grid2 as Grid, Typography } from '@mui/material'
import React from 'react'

const Projects = () => {
  return (
    <Container id="Projects" maxWidth="lg" sx={{ mt: 10, height: "80vh" }}>
        <Grid container spacing={4} sx={{ height: "100%" }}>
            <Grid item size={{ sm: 12, md: 5 }}>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
               <Typography variant='h2'>01</Typography>
               <Typography variant='h5' sx={{fontWeight: '700'}}>PG Management software</Typography>
               <Typography variant='subtitle2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, 
                laudantium atque tenetur ipsa corrupti esse enim ad ipsam porro quam repudiandae recusandae 
                exercitationem voluptatem magnam reprehenderit, neque cum? Eligendi, minus.</Typography>
                <Typography>Javascript, React.js, Node.js, Express.js, Mongodb, MUI, git</Typography>
                </Box>
                <Divider sx={{my: 2}}/>
                <Box sx={{display: 'flex', gap:2}}>
                    <Box sx={{width: 35, height: 35, backgroundColor: '#EDEADE', display: 'flex', justifyContent:'center',alignItems: 'center', borderRadius: '50%'}}>
                        <Icon icon="hugeicons:arrow-up-right-01" width="70%" />
                    </Box>
                    <Box sx={{width: 35, height: 35, backgroundColor: '#EDEADE', display: 'flex',justifyContent:'center',alignItems: 'center', borderRadius: '50%'}}>
                        <Icon icon="mdi:github" width="70%" />
                    </Box>
                </Box>
            </Grid>
            <Grid item size={{ sm: 12, md:  7}}>
                dffdf
            </Grid>
        </Grid>
    </Container>
  )
}

export default Projects