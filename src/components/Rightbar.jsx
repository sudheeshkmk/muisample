import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { itemData } from "../assets/images";

const Rightbar = () => {
  return (
    <Box p={2} flex={2} sx={{ display: { xs: "none", sm: "flex" } }}>
      <Box position="fixed" width={"500"}>
        <Typography variant="h6" fontWeight="100">
          Online Users
        </Typography>

        <AvatarGroup max={4} sx={{ justifyContent: "left" }}>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://material-ui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/5.jpg"
          />
        </AvatarGroup>

        <Typography variant="h6" fontWeight="100" mt={2}>
          Latest Updates
        </Typography>

        <ImageList
          sx={{ width: 500, height: 164 }}
          cols={3}
          rowHeight={164}
          // gap={1}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default Rightbar;
