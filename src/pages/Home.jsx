import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import image from "../assets/my-image.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion } from "motion/react"
import FramerMotion from "../components/FramerMotion";

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
                Hi, I'm Niranjan ks
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
              I’m a MERN Full Stack Web Developer
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
              A passionate Developer with a strong foundation in building
              dynamic web applications. I specialize in creating efficient,
              scalable solutions using MongoDB, Express.js, React, and Node.js.
              Explore my work and journey here.
            </Typography>
            </motion.div>
          </Box>
          <Box sx={{ mt: 8 }}>
            <Button
              variant="contained"
              endIcon={<WhatsAppIcon color="green" />}
              sx={{ bgcolor: "#2C363F" }}
            >
              LET'S TALK
            </Button>
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
