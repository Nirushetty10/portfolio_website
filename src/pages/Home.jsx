import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  IconButton,
  Typography,
} from "@mui/material";
import image from "../assets/my-image.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { motion } from "motion/react"
import FramerMotion from "../components/FramerMotion";
import { HomePageInfo } from "../utils/const-information";

const SOCIAL_MEDIA_INFO = [
  {icon: <LinkedInIcon style={{color: '#0073B1'}}/>, link: HomePageInfo.linkedInLink},
  {icon: <GitHubIcon style={{color: '#0e0e0e'}}/>, link: HomePageInfo.gitHubLink},
  {icon: <InstagramIcon style={{color: '#B801A0'}} />, link: HomePageInfo.instaGramLink}
]

export default function Home() {
  return (
    <Container id="home" maxWidth="lg" sx={{ mt: 10, height: "80vh" }}>
      <Grid container spacing={4} sx={{ height: "100%" }}>
        <Grid item size={{ sm: 12, md: 6 }}>
          <Box>
          <FramerMotion initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }}>
            <Box sx={{ width: 150, height: 5, mt: 8, bgcolor: "#2C363F" }} />
            </FramerMotion>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                component="h2"
                variant="subtitle2"
                color="#2C363F"
                fontWeight={800}
                fontFamily="Karla"
                sx={{ mt: 2 }}
              >
                {HomePageInfo.title1}
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0}}
              whileInView={{ opacity: 1,}}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            >
            <Typography
              component="h2"
              variant="h6"
              color="#2C363F"
              fontWeight={800}
              fontFamily="Karla"
              sx={{ mt: 2 }}
            >
              {HomePageInfo.title2}
            </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y : 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            >
            <Typography
              component="h2"
              variant="subtitle2"
              color="#2C363F"
              sx={{ mt: 4 }}
              fontWeight={800}
              fontFamily="Karla"
            >
              {HomePageInfo.description}
            </Typography>
            </motion.div>
          </Box>
          <Box sx={{ mt: 8 }}>
            <Button
              variant="contained"
              endIcon={<WhatsAppIcon color="green" />}
              sx={{ bgcolor: "#2C363F" }}
              href={`https://wa.me/${HomePageInfo.phoneNumber}?text=${HomePageInfo.whatsAppMessage}`}
            >
              {HomePageInfo.buttonText}
            </Button>
          </Box>
          <Box sx={{ mt: 8 }}>
          <Typography
              component="h2"
              variant="subtitle2"
              color="#2C363F"
              sx={{ mt: 4 }}
              fontWeight={800}
              fontFamily="Karla"
            >Follow me</Typography>
            <Box sx={{display: 'flex', gap: 2}}>
            {SOCIAL_MEDIA_INFO.map((item,index)=> {
               return <IconButton key={index} href={item.link} target="_blank" sx={{p:0}}>
                {item.icon}
               </IconButton>
            })}
            </Box>
          </Box>
        </Grid>
        <Grid item size={{ sm: 12, md: 6 }}>
          <Box
            component="img"
            src={image}
            sx={{
              width: 1,
              height: 1,
              flexShrink: 0,
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
