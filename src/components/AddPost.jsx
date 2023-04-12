import {
  Add,
  Cancel,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraFront,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";

const AddPost = () => {
  const [open, setOpen] = useState(false);
  const StyledModal = styled(Modal)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  });

  return (
    <>
      <Box
        position="fixed"
        bottom="10px"
        sx={{ left: { xs: "calc(50% - 30px)", sm: 30 } }}
      >
        <Tooltip title="New Post">
          <Fab color="primary" aria-label="add" onClick={(e) => setOpen(true)}>
            <Add />
          </Fab>
        </Tooltip>
      </Box>

      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={300}
          bgcolor="background.default"
          borderRadius={10}
          padding={2}
          alignContent="center"
          //   position="relative"
        >
          {/* <Close sx={{ position: "absolute", right: "calc(10%)" }} /> */}
          <Typography
            id="modal-modal-title"
            variant="h6"
            color="text.secondary"
            textAlign="center"
          >
            Create a Post
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Typography>John Doe</Typography>
          </Box>

          <TextField
            id="outlined-multiline-static"
            multiline
            placeholder="Whats on your mind?"
            rows={4}
            sx={{ display: "flex" }}
          />

          <Stack direction="row" mt={1} gap={1} mb={2}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraFront color="success" />
            <PersonAdd color="error" />
          </Stack>

          <ButtonGroup fullWidth variant="contained">
            <Button>Post</Button>
            <Button sx={{ width: "100px" }} onClick={(e) => setOpen(false)}>
              {/* <Button width="100px"> */}
              <Cancel />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddPost;