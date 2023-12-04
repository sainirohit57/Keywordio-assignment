import { Box, useMediaQuery, useTheme } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { label: "40% Male", value: 400, color: "#eb681c" },
  { label: "35% Female", value: 350, color: "#181fde" },
  { label: "25% Unknown", value: 250, color: "#1a1919" },
];
const AdInsightsChart = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const chartSize = isMobile
    ? { width: "100%", height: "285px" }
    : { width: "100%", height: "300px" };

  return (
    <Box sx={chartSize}>
      <PieChart
        series={[
          {
            data: data,
            innerRadius: isMobile ? 50 : 100,
            outerRadius: isMobile ? 100 : 150,
            paddingAngle: 2,
            cx: isMobile ? 150 : 250,
            cy: isMobile ? 160 : 200,
          },
        ]}
        height={418}
        slotProps={{
          legend: {
            direction: isMobile ? "row" : "column",
            position: {
              vertical: isMobile ? "top" : "middle",
              horizontal: isMobile ? "left" : "right",
            },
            itemMarkWidth: isMobile ? 12 : 58,
            itemMarkHeight: isMobile ? 12 : 16,
            markGap: isMobile ? 4 : 12,
            itemGap: isMobile ? 12 : 24,
          },
        }}
      />
    </Box>
  );
};

export default AdInsightsChart;
