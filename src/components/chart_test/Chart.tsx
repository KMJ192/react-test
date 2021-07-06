import React from 'react'
import { createChart } from 'lightweight-charts'
import { useRef } from 'react'

function Chart() {
    const chartSample = useRef<any>(null);
    const makeChart = () => {
        let chart = createChart(chartSample.current, {
            width: 500,
            height: 300,
            layout: {
                backgroundColor: "#000000",
                textColor: "rgba(255, 255, 255, 0)"
            },
        });
    }

    return (
        <div ref={chartSample}>
            chart 출력
        </div>
    )
}

export default React.memo(Chart);