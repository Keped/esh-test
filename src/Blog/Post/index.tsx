import { Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
interface PostProps {
  post: {
    pid: string;
    title: string;
    content: string;
    createdAt: string;
    byLine: string;
  };
}

const Post = ({ post }: PostProps) => {
  const navigate = useNavigate();
  return (
    <Paper
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "flex-start",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          navigate(-1);
        }}
      >
        {" "}
        Back
      </Button>
      <h1>{post.title}</h1>
      <h6>
        {post.createdAt} {post.byLine}
      </h6>
      {post.content}
    </Paper>
  );
};

export default Post;
