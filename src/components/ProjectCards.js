import {
  Button,
  Card,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

const StyledButton = styled(Button)({
  backgroundColor: "pink",
});

function ProjectCards(props) {
  return (
    <>
      {props.urls.map((item) => (
        <Card key={item.id} sx={{maxWidth:345}}>
          <CardMedia
            component="img"
            height="194"
            image={item.previewImg}
            alt="previewImage"
          />
          <CardContent>
            <Typography variant="h5">{item.name}</Typography>
            <Typography variant="body1">{item.description}</Typography>
            <StyledButton variant="contained" href={item.url}>
              View Project
            </StyledButton>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default ProjectCards;
