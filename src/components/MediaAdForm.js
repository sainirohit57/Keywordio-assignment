import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MediaAdForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/form-submitted");
  };
  return (
    <div className="page-layout">
      <h3>Create Text & Media</h3>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={4}
          sx={{
            paddingY: "32px",
          }}
        >
          <Grid item xs={12} md={6}>
            <div className="form-layout mb-24px">
              <label htmlFor="heading-01" className="form-label">
                Heading 01
              </label>
              <input
                type="text"
                id="heading-01"
                className="form-control"
                placeholder="Add a heading that would makes users interested"
                required
              />
            </div>
            <div className="form-layout">
              <label htmlFor="heading-02" className="form-label">
                Heading 02
              </label>
              <input
                type="text"
                id="heading-02"
                className="form-control"
                placeholder="Add a heading that would makes users interested"
                required
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="form-layout">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                id="description"
                rows="5"
                className="form-control custom-textarea"
                placeholder="Add primary text to help users understand more about your products, services or offers"
                required
              ></textarea>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="form-layout">
              <label htmlFor="landscapeImg" className="form-label">
                Landscape Marketing Image (1:9:1)
              </label>
              <input
                type="text"
                id="landscapeImg"
                className="form-control"
                placeholder="Add a URL of the Image you want to use for the ad"
                required
              />
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="form-layout">
              <label htmlFor="portraitImg" className="form-label">
                Portrait Marketing Image (4:5)
              </label>
              <input
                type="text"
                id="portraitImg"
                className="form-control"
                placeholder="Add a URL of the Image you want to use for the ad"
                required
              />
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="form-layout">
              <label htmlFor="squareImg" className="form-label">
                Square Marketing Image (1:1)
              </label>
              <input
                type="text"
                id="squareImg"
                className="form-control"
                placeholder="Add a URL of the Image you want to use for the ad"
                required
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="form-layout">
              <label htmlFor="videoURL" className="form-label">
                Video URL
              </label>
              <input
                type="text"
                id="videoURL"
                className="form-control"
                placeholder="Add the URL of the video you want to use for the ad"
                required
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="form-layout">
              <label htmlFor="businessName" className="form-label">
                Business Name
              </label>
              <input
                type="text"
                id="businessName"
                className="form-control"
                placeholder="Add your business name"
                required
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="form-layout">
              <label htmlFor="buttonLabel" className="form-label">
                Button Label
              </label>
              <select
                id="buttonLabel"
                className="form-select"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a label that best suits your ad
                </option>
                <option value={10}>Option 01</option>
                <option value={10}>Option 02</option>
                <option value={10}>Option 03</option>
              </select>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="form-layout">
              <label htmlFor="websiteURL" className="form-label">
                Website URL
              </label>
              <input
                type="text"
                id="websiteURL"
                className="form-control"
                placeholder="Add the URL of the landing page you want to redirect users to"
                required
              />
            </div>
          </Grid>
        </Grid>
        <div className="text-end">
          <Button
            className="secondary-btn mr-16px"
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
          <Button className="primary-btn" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MediaAdForm;
