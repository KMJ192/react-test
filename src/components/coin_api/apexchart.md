# Apexchart - candlestick chart

- react-apexcharts 라이브러리 필요
- 라이브러리에서 chart컴포넌트를 import하여 사용
- docs => https://apexcharts.com/docs/options

```tsx
import ReactApexChart from "react-apexcharts";
<ReactApexChart
  options={options}
  series={chartData.series}
  type="candlestick"
  height={350}
/>;
```

option에서 chart를 꾸밀 수 있음
option은 ApexOptions타입

```tsx
export interface ApexOptions {
  annotations?: ApexAnnotations;
  chart?: ApexChart;
  colors?: any[];
  dataLabels?: ApexDataLabels;
  fill?: ApexFill;
  grid?: ApexGrid;
  labels?: string[];
  legend?: ApexLegend;
  markers?: ApexMarkers;
  noData?: ApexNoData;
  plotOptions?: ApexPlotOptions;
  responsive?: ApexResponsive[];
  series?: ApexAxisChartSeries | ApexNonAxisChartSeries;
  states?: ApexStates;
  stroke?: ApexStroke;
  subtitle?: ApexTitleSubtitle;
  theme?: ApexTheme;
  title?: ApexTitleSubtitle;
  tooltip?: ApexTooltip;
  xaxis?: ApexXAxis;
  yaxis?: ApexYAxis | ApexYAxis[];
}
```

# annotations

```tsx
type ApexAnnotations = {
  position?: string;
  yaxis?: YAxisAnnotations[];
  xaxis?: XAxisAnnotations[];
  points?: PointAnnotations[];
  texts?: TextAnnotations[];
  images?: ImageAnnotations[];
};
```
