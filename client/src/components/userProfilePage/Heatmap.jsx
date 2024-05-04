import React from "react";
import Tooltip from "@uiw/react-tooltip";
import HeatMap from "@uiw/react-heat-map";

const value = [
  { date: "2024/01/11", count: 2 },
  ...[...Array(17)].map((_, idx) => ({
    date: `2024/01/${idx + 10}`,
    count: idx,
  })),
  ...[...Array(17)].map((_, idx) => ({
    date: `2024/02/${idx + 10}`,
    count: idx,
  })),
  { date: "2024/04/12", count: 2 },
  { date: "2024/05/01", count: 5 },
  { date: "2024/05/02", count: 5 },
  { date: "2024/05/03", count: 1 },
  { date: "2024/05/04", count: 11 },
  { date: "2024/05/08", count: 32 },
];

const Demo = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-[910px]">
        <HeatMap
          value={value}
          startDate={new Date("2024/01/01")}
          endDate={new Date("2024/12/31")}
          rectSize={15}
          legendCellSize={15}
          style={{
            color: "white",
            width: "100%",
            minHeight: "180px",
            fontSize: "12px",
            "--rhm-rect": "#4a6283",
          }}
          // rectRender={(props, data) => (
          //   <Tooltip placement="top" content={`count: ${data.count || 0}`}>
          //     <rect {...props} />
          //   </Tooltip>
          // )}
        />
      </div>
    </div>
  );
};
export default Demo;
