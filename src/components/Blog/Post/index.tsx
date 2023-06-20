import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Direction,
  Typography,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import i18n from "i18next";
import "react-i18next";
import { useTranslation } from "react-i18next";
import coverImage from "../../../assets/card-image.png";
import { BlogPost } from "../../../types";

interface PostProps {
  post: BlogPost;
}

const Post = (props: PostProps) => {
  const { language } = i18n;

  const { t } = useTranslation();
  const navigate = useNavigate();
  const details = props.post.localizedData[language as unknown as "he" | "en"];

  return (
    <div style={{ direction: document.dir as Direction }}>
      <StyledPostWrapper>
        <Button
          variant="text"
          sx={{ mb: 3, textTransform: "none", color: "inherit" }}
          onClick={() => {
            navigate(-1);
          }}
        >
          {t("back")}
        </Button>

        </StyledPostWrapper>
      <Card sx={{ direction: document.dir }}>
        <CardMedia
          sx={{ height: 140 }}
          image={coverImage}
          title="the post subject"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {details.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {details.content}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default Post;

const StyledPostWrapper = styled("span")`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: start;
`;
