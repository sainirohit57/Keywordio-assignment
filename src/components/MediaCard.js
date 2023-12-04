import {
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import images from "../assets/images";

const MediaCard = ({ title, adType, selectedAdType, setSelectedAdType }) => {
  const handleClick = () => {
    setSelectedAdType(adType);
  };

  return (
    <Card className="media-card" onClick={handleClick}>
      <CardContent>
        <FormControlLabel
          control={<Checkbox checked={selectedAdType === adType} />}
        />
        <CardMedia
          component="img"
          height="194"
          image={images.textAdImg}
          alt="Paella dish"
        />
        <Typography gutterBottom component="div" className="media-card-footer">
          <Typography variant="h5" component="h5">
            Create
          </Typography>
          <Typography variant="h3" component="h3">
            {title}
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MediaCard;
