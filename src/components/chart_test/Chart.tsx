import React, { useEffect } from 'react'
import { useRef } from 'react'
import { createChart, CrosshairMode, IChartApi } from 'lightweight-charts'

import { ChartSt } from './MainChartStyle';
import { priceData } from './PriceData';
import { volumeData } from './VolumData';

function Chart() {
    const chartContainerRef = useRef<any>(null);
    const chart = useRef<IChartApi>();
    //const resizeObserver = useRef<any>();

    useEffect(() => {
        chart.current = createChart(chartContainerRef.current, {
            width: 1080,
            height: 760,
            layout: {
                backgroundColor: "rgba(0, 0, 0, .9)",
                textColor: "rgba(255, 255, 255, .6)"
            },
            grid: {
                vertLines:{
                    color: 'rgba(197, 203, 206, 0.5)',
                },
                horzLines:{
                    color: 'rgba(197, 203, 206, 0.5)',
                }
            },
            crosshair:{
                mode: CrosshairMode.Magnet
            },
            rightPriceScale: {
                borderColor: 'rgba(197, 203, 206, 0.8)',
            },
            timeScale:{
                borderColor: 'rgba(197, 203, 206, 0.8)',
            }
        });
        const color = {
            upColor: "rgba(255, 0, 0, .7)",
            downColor: "rgba(0,0,255,.5)"
        }
        const candleSeries = chart.current.addCandlestickSeries({
            upColor: color.upColor,
            downColor: color.downColor,
            borderUpColor: color.upColor,
            borderDownColor: color.downColor,
            wickUpColor: color.upColor,
            wickDownColor: color.downColor,
        });
        //setData 옵션 => time, open, high, low, close
        candleSeries.setData(priceData);

        // const volumeSeries = chart.current.addHistogramSeries({
        //     color: '#182233',
        //     lineWidth: 2,
        //     priceFormat: {
        //         type: 'volume',
        //     },
        //     overlay: true,
        //     lastValueVisible: true,
        //     scaleMargins: {
        //         top: 0.8,
        //         bottom: 0,
        //     },
        // });
        // volumeSeries.setData(volumeData);
    }, []);

    // useEffect(() => {
    //     resizeObserver.current = new ResizeObserver
    //     return () => {
            
    //     }
    // }, []);
    

    return (
        <ChartSt.Container ref={chartContainerRef}/>

    );
}

export default React.memo(Chart);