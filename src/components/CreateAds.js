import { useState } from "react";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import MediaCard from "./MediaCard";

const CreateAds = () => {
  const [selectedAdType, setSelectedAdType] = useState("");

  return (
    <div className="page-layout item-flex">
      <h3>Create Ads</h3>
      <Grid container spacing={5} sx={{ paddingY: "32px" }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            "@media (min-width: 900px)": {
              "& .MuiPaper-root": {
                marginLeft: "auto",
              },
            },
          }}
        >
          <MediaCard
            title={"Text Ad"}
            adType={"text"}
            selectedAdType={selectedAdType}
            setSelectedAdType={setSelectedAdType}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MediaCard
            title={"Media Ad"}
            adType={"media"}
            selectedAdType={selectedAdType}
            setSelectedAdType={setSelectedAdType}
          />
        </Grid>
      </Grid>
      <div className="text-end">
        {selectedAdType ? (
          <Link
            to={
              selectedAdType === "text"
                ? "/text-ads-fill-data"
                : "/media-ads-fill-data"
            }
            className="primary-btn"
          >
            Next
          </Link>
        ) : (
          <Button className="primary-btn" disabled>
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default CreateAds;
