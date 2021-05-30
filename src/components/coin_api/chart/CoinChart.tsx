import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

let today: Date = new Date();
function CoinChart() {
  const nowTime = today.getDate;
  console.log(nowTime)
  const chartData = {
    series: [{
      name: 'coin chart',
      data: [
        {
          x: 0,
          y: [10, 10, 10, 10]
        },
      ]
    }]
  };

  const options : ApexOptions = {
    title: {
      text: 'coin chart example',
      align: 'left'
    },
    chart: {
      id: "coinChart",
      height: 350,
      type: 'candlestick',
      animations : {
        enabled : true,
        easing : 'linear',
        speed : 300,
        animateGradually: {
          enabled: true,
        },
      },
      background: '#0D0D0D',
      defaultLocale: 'en',
      foreColor: '#DBDBDB',
      locales: [{
        name:'en',
        options: {
          toolbar:{
            zoomIn : "확대",
            zoomOut : "축소",
            selectionZoom : "선택영역 확대/축소",
            pan: 'pan',
            reset: "초기화"
          }
        }
      }],
      selection: {
        fill: {
          color: '#969696'
        },
      },
      events: {
        scrolled: function(ReactApexChart, { xaxis, yaxis }: ApexOptions){
          console.log(xaxis?.max)
          if(xaxis?.max){
            xaxis.max += 10;
            console.log(xaxis.max);
          }
        }
      },
      zoom:{
        enabled: true,
        type: 'xy',
      }
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#FF0000',
          downward: '#2328FF'
        }
      }
    },
    xaxis: {
      min: 10,
      max: 66
    },
    // yaxis: {
    //   min: 6400,
    //   max: 6700
    // }
  }

  return (
      <div>
          <ReactApexChart
            options={options}
            series={chartData.series}
            type="candlestick" 
            height={350} 
          />
      </div>
  );
}

export default React.memo(CoinChart);