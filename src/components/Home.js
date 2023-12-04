import { Grid } from "@mui/material";
import { Tabs, TabsList, TabPanel, Tab } from "@mui/base";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import AdTable from "./AdTable";
import AdInsightsChart from "./AdInsightsChart";
import {
  chartColumns,
  chartRows,
  tableColumns,
  tableRows,
} from "../constants/constant";

const Home = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <div className="table-box">
          <div className="table-box-header">
            <h3>Ad Insights</h3>
          </div>
          <AdTable rows={tableRows} columns={tableColumns} />
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="table-box">
          <div className="table-box-header">
            <h3>Ad Insights</h3>
          </div>
          <Tabs defaultValue={1} className="custom-tabs">
            <TabsList className="tabs-list">
              <Tab value={1}>
                <DonutLargeIcon />
              </Tab>
              <Tab value={2}>
                <TableChartOutlinedIcon />
              </Tab>
            </TabsList>
            <TabPanel value={1}>
              <AdInsightsChart />
            </TabPanel>
            <TabPanel value={2}>
              <AdTable rows={chartRows} columns={chartColumns} />
            </TabPanel>
          </Tabs>
        </div>
      </Grid>
    </Grid>
  );
};

export default Home;
