import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = ({easy, medium, hard}) => {
  const [chartState, setChartState] = useState({
    series: [easy, medium, hard],
    options: {
      dataLabels: {
        enabled: false
      },
      labels: ['easy', 'medium', 'hard'],
      legend: {
        // position: 'right',
        // offsetY: 0,
        // height: 230,
        show: false
      },
      colors: ['#228B22', '#F0C808', '#FF5733'],
    }
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={chartState.options} series={chartState.series} type="donut" width={330} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
