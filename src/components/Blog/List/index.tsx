import { useCallback, useMemo } from "react";
import { BlogPost } from "../../../types";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import cardImage from "../../../assets/card-image.png";
import { useNavigate } from "react-router-dom";

interface ListProps {
  posts: BlogPost[];
}

const List = ({ posts }: ListProps) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const theme = useTheme();

  const navtoCard = useCallback(
    (id: string) => {
      navigate(`/blog/${id}`);
    },
    [navigate]
  );

  const listItems = useMemo(() => {
    return posts.map((datum) => {
      
        return (
          <Card key={datum.id} sx={{ maxWidth: 345 }}>
            <CardActionArea
              onClick={() => {
                navtoCard(datum.id);
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={cardImage}
                alt="post subject"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ direction: theme.direction }}
                >
                  {
                    datum.localizedData[i18n.language as unknown as "he" | "en"]
                      .title
                  }
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
    });
  }, [posts, theme.direction, navtoCard, i18n.language]);

  return <>{listItems}</>;
};

export default List;
