import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const LocalizeButton = () => {
  const {i18n} = useTranslation();
  return (
    <Button
      variant="text"
      color="inherit"
      onClick={() => {
        i18n.changeLanguage(i18n.language === "he" ? "en" : "he");
        document.dir = i18n.language === "he" ? "rtl" : "ltr";
      }}
    >
      {(i18n.language === "he" ? "en" : "עב").toLocaleUpperCase()}
    </Button>
  );
};

export default LocalizeButton;
