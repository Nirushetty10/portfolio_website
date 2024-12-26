import React, { useState } from 'react'
import { Box, Button, Container, Grid2 as Grid, Tab, Tabs, Typography } from '@mui/material'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { Email } from '@mui/icons-material';
import { Icon } from "@iconify/react";

const aboutDetails1 = {
    Name : "Niranjan",
    Experience : "2 years",
    Freelancee : "Available"
}

const aboutDetails2 = {
    Phone : 8217663279,
    Email : "nirushetty582@gmail.com",
    Languages : "English,Hindi, Kannada and Tulu"
}

const education = [
    { year : '2015 - 2019' , cource: 'Bachelor of Engineering', source: 'JNNCE, Shimoga'},
    { year : 2021 , cource: 'MERN Full Stack', source: 'Jspiders, RajajiNagar'},
    { year : 2021 , cource: 'Master React.js', source: 'Udemy'},
    { year : 2022 , cource: 'Master Node.js', source: 'Udemy'},
    { year : 2022 , cource: 'Master Node.js', source: 'Udemy'},
    // { year : 2022 , cource: 'Master Node.js', source: 'Udemy'},
]

const experience = [
    { year : 'April-2023 to present' ,experience: '1.9 years', designation: 'Associate Software Engineer', company: 'Appstec ERP solutions pvt ltd, Bangalore'},
]

const skillsIcon = [
    "logos:html-5","logos:css-3","vscode-icons:file-type-js-official",
    "devicon:react","devicon:nodejs-wordmark","logos:mongodb","logos:git",
    "simple-icons:mui"
]

const renderAboutMeSection = () => {
    return (
        <Box sx={{display : 'flex', flexDirection : 'column', gap: 2}}>
            <Box sx={{display:'flex', alignItems: 'center', gap:2}}>
        <Typography variant='h6'>About Me</Typography>
        <Icon icon="tdesign:personal-information-filled" width="30" height="30" />
        </Box>
            <Typography variant='subtitle2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Asperiores necessitatibus porro voluptas gdht dhf fhd dfnh shf dfhb dfbdnf dbfdj f</Typography>
            <Box sx={{display : 'flex', gap:10}}>
              <Box sx={{display : 'flex', flexDirection : 'column', gap: 2}}>
                 <Typography>Name : {aboutDetails1.Name}</Typography>
                 <Typography>Experience : {aboutDetails1.Experience}</Typography>
                 <Typography>Freelance : {aboutDetails1.Freelancee}</Typography>
              </Box>
              <Box sx={{display : 'flex', flexDirection : 'column', gap: 2}}>
                 <Typography>Phone : {aboutDetails2.Phone}</Typography>
                 <Typography>Email : {aboutDetails2.Email}</Typography>
                 <Typography>Languages : {aboutDetails2.Languages}</Typography>
              </Box>
            </Box>
        </Box>
    )
}

const renderEducationSection = () => {
    return (
        <Box sx={{display : 'flex', flexDirection : 'column', gap: 2}}>
        <Box sx={{display:'flex', alignItems: 'center', gap:2}}>
        <Typography variant='h6'>My Education</Typography>
        <Icon icon="flat-color-icons:graduation-cap" width="40" height="40" />
        </Box>
        <Typography variant='subtitle2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Asperiores necessitatibus porro voluptas gdht dhf fhd dfnh shf dfhb dfbdnf dbfdj f</Typography>
        <Grid container spacing={2} sx={{ height: "300px", overflowY : 'auto'}} >
        { education.map((item)=> {
           return <Grid item size={{ sm: 12, md: 6 }} sx={{maxHeight: '50%', borderRadius: '10px',p: 2,backgroundColor: '#EDEADE'}}>
           <Box height='100%' sx={{display : 'flex', flexDirection: 'column', gap:2}}>
             <Typography variant='subtitle2' sx={{height: '15%'}}>{item.year}</Typography>
             <Typography variant='h6' sx={{height: '70%'}}>{item.cource}</Typography>
             <Typography variant='subtitle2' sx={{height: '15%'}}>{item.source}</Typography>
           </Box>
         </Grid>
        })}
        </Grid>
    </Box>
    )
}

const renderSkillsSection = () => {
    return (
        <Box sx={{display : 'flex', flexDirection : 'column', gap: 2}}>
        <Box sx={{display:'flex', alignItems: 'center', gap:2}}>
        <Typography variant='h6'>Skills</Typography>
        <Icon icon="fluent:window-dev-tools-24-filled" width="30" height="30" />
        </Box>
        <Grid container spacing={2} sx={{mt:5,height: "300px", overflowY : 'auto'}} >
        { skillsIcon.map((item)=> {
           return <Grid item size={{ sm: 4, md: 3 }} sx={{
            backgroundColor: '#EDEADE',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxHeight: '50%',
            borderRadius:'10px'
            }}>
           <Icon icon={item} width="80" height="80" />
         </Grid>
        })}
        </Grid>
    </Box>
    )
}

const renderExperienceSection = () => {
    return (
        <Box sx={{display : 'flex', flexDirection : 'column', gap: 2}}>
        <Box sx={{display:'flex', alignItems: 'center', gap:2}}>
        <Typography variant='h6'>My Experience</Typography>
        <Icon icon="fxemoji:oldpersonalcomputer" width="30" height="30" />
        </Box>
        <Typography variant='subtitle2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Asperiores necessitatibus porro voluptas gdht dhf fhd dfnh shf dfhb dfbdnf dbfdj f</Typography>
        <Grid container spacing={2} sx={{ height: "300px", overflowY: 'auto'}} >
        { experience.map((item)=> {
           return <Grid item size={{ sm: 12, md: 6 }} sx={{maxHeight: '50%',borderRadius: '10px',p: 2,backgroundColor: '#EDEADE'}}>
           <Box height='100%' sx={{display : 'flex', flexDirection: 'column', gap:2}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
             <Typography variant='subtitle2' sx={{height: '15%'}}>{item.year}</Typography>
             <Typography variant='subtitle2' sx={{height: '15%'}}>{item.experience}</Typography>
             </Box>
             <Typography variant='h6' sx={{height: '70%'}}>{item.designation}</Typography>
             <Typography variant='subtitle2' sx={{height: '15%'}}>{item.company}</Typography>
           </Box>
         </Grid>
        })}
        </Grid>
    </Box>
    )
}

const Resume = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

  return (
    <Container id="Resume" maxWidth="lg" sx={{ mt: 10, height: "80vh" }}>
      <Grid container spacing={4} sx={{ height: "100%" }}>
        <Grid item size={{ sm: 12, md: 4 }}>
            <Box sx={{display : 'flex', flexDirection : 'column', gap: 2, alignItems: 'center'}}>
            <Typography variant='h5'>Why hire me?</Typography>
            <Typography variant='subtitle2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Asperiores necessitatibus porro voluptas
            </Typography>
            <Box sx={{width : '100%'}}>
            <Tabs
        orientation="vertical"
        // variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="About Me" sx={{...(value === 0 && {backgroundColor : '#2C363F'}), '&.Mui-selected': { color: '#fff' }}}/>
        <Tab label="Education" sx={{...(value === 1 && {backgroundColor : '#2C363F'}), '&.Mui-selected': { color: '#fff' }}}/>
        <Tab label="Experience" sx={{...(value === 2 && {backgroundColor : '#2C363F'}), '&.Mui-selected': { color: '#fff' }}}/>
        <Tab label="Skills" sx={{...(value === 3 && {backgroundColor : '#2C363F'}), '&.Mui-selected': { color: '#fff' }}}/>
      </Tabs>
            </Box>
            <Button
              variant="contained"
              endIcon={<CloudDownloadIcon color="#fff" />}
              sx={{ width : '70%', bgcolor: "#2C363F", mt: 4 }}
            >
              Download Resume
            </Button>
            </Box>
        </Grid>
        <Grid item size={{ sm: 12, md: 8 }}>
          {value === 0 && renderAboutMeSection()}
          {value === 1 && renderEducationSection()}
          {value === 2 && renderExperienceSection()}
          {value === 3 && renderSkillsSection()}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Resume