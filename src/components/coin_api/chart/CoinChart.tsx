import React from 'react';
import { BoxPlotChart } from '@toast-ui/chart';
import { useRef } from 'react';

function CoinChart() {
    const data = {
        categories: ['Budget', 'Income', 'Expenses', 'Debt'],
        series: [
            {
            name: '2020',
            data: [
                [1000, 2500, 3714, 5500, 7000],
                [1000, 2750, 4571, 5250, 8000],
                [3000, 4000, 4714, 6000, 7000],
                [1000, 2250, 3142, 4750, 6000]
            ],
            outliers: [
                [0, 14000],
                [2, 10000],
                [3, 9600]
            ],
            },
            {
            name: '2021',
            data: [
                [2000, 4500, 6714, 11500, 13000],
                [3000, 5750, 7571, 8250, 9000],
                [5000, 8000, 8714, 9000, 10000],
                [7000, 9250, 10142, 11750, 12000]
            ],
            outliers: [[1, 14000]]
            },
        ],
    }
    const options = {
        theme: {
            series: {
              colors: ['#EE4266', '#FFD23F'],
              barWidth: 40,
              barWidthRatios: {
                barRatio: 1,
                minMaxBarRatio: 0.8,
              },
              dot: {
                radius: 5,
                borderWidth: 3,
                borderColor: '#000000',
                useSeriesColor: true,
              },
              rect: {
                borderWidth: 2,
                borderColor: '#000000',
              },
              line: {
                whisker: {
                  lineWidth: 2,
                  color: '#000000',
                },
                maximum: {
                  lineWidth: 2,
                  color: '#000000',
                },
                minimum: {
                  lineWidth: 2,
                  color: '#000000',
                },
                median: {
                  lineWidth: 2,
                  color: '#000000',
                },
              },
              hover: {
                color: '#96D6ED',
                rect: { borderColor: '#00ff00', borderWidth: 2 },
                dot: { radius: 6 },
                shadowColor: 'rgba(0, 0, 0, 0.7)',
                shadowOffsetX: 4,
                shadowOffsetY: 4,
                shadowBlur: 6,
                line: {
                  whisker: {
                    lineWidth: 2,
                    color: '#00ff00',
                  },
                  maximum: {
                    lineWidth: 2,
                    color: '#00ff00',
                  },
                  minimum: {
                    lineWidth: 2,
                    color: '#00ff00',
                  },
                  median: {
                    lineWidth: 2,
                    color: '#00ff00',
                  },
                },
              }
            }
        }
    }
    const chartRef = useRef<HTMLDivElement>(null);
    // const chart = new BoxPlotChart({
    //     ,
    //     data,
    //     options
    // });
    return (
        <div ref={chartRef}>

        </div>
    )
}

export default React.memo(CoinChart);
