import React from "react";
import {
  Box,
  Card,
  Grid,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const CardComponent = ({ hotel }) => {
  console.log(hotel);
  return (
    <Box sx={{width:400}}>
    <Box
      sx={{
       
        background: "#c2c2c2",
        marginTop: 8,
        boxShadow: "7px 8px 15px #606060",
        ":hover": {
          boxShadow: "10px 10px 20px #606060",
          
        },
      }}
    >
      <Grid container sx={{}}>
        <Grid item>
          <Card
            sx={{
              maxWidth: 400,
              background: "#c2c2c2",
              position: "relative",
              ":hover": {
                maxWidth: 410,
                maxHeight: "auto",
              },
            }}
          >
            <CardMedia
              sx={{ height: 200 }}
              image={hotel.image}
              title="Hotels"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {hotel.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                A ready custom made banquet hall with antique feeling touched
                with nobility is highly favourable for weddings and anniversary
                or other get together events. Equipped with all modern
                sophisticated facilities, Ballroom One is ready for your next
                event to be organized with royalty.
              </Typography>
              <Typography sx={{ color: "#a92729", marginTop: 1 }}>
                Room Available {hotel.rooms_available}
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  bottom: 10,
                  right: 10,
                  display: "flex",
                }}
              >
                Rating {hotel.rating}
                <StarIcon />
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                sx={{
                  background: "#005c00",
                  color: "white",
                }}
              >
                Know More
              </Button>
              <Button
                size="small"
                sx={{
                  background: "#005c00",
                  color: "white",
                }}
              >
                View Package
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
    </Box>
  );
};
export default CardComponent;
