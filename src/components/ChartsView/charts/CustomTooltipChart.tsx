import { LineChart } from 'simple-react-linechart';
import { CustomToolTipData } from 'simple-react-linechart/dist/cjs/types/src/components/LineChart/types';

const CustomTooltipLineChart = () => {
const lineSets = [
    {
    label: "2023",
    data: [
        { x: 1, y: 200 },
        { x: 2, y: 140 },
        { x: 3, y: 120 },
        { x: 4, y: 130 },
        { x: 5, y: 98 },
        { x: 6, y: 160 },
        { x: 7, y: 205 },
        { x: 8, y: 25 },
        { x: 9, y: 130 },
        { x: 10, y: 160 },
        { x: 11, y: 180 },
        { x: 12, y: 250 },
      ],
       strokeColor: "#FF6384",
       backgroundColorLine: "rgba(206, 0, 58, 0.2)", 
    }
];

const xAxisLabels = ["Ene", "Feb", "Mar", "Abr", "May", 
"Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

const customToolTip = (point:CustomToolTipData) => {
    const {label, value, xLabel } = point;
    const month = xLabel
    const valueY = value.y;
    return (
        <div className="bg-[#363636] flex flex-col justify-center items-center text-[10px] text-white rounded-full w-[60px] h-[60px] overflow-hidden shadow-md">
            <p className=''>{label}</p>
            <p>{month}</p>
            <p>{valueY}</p>
        </div>
    )
}

return (
    <div className='sm:border sm:h-[350px] bg-[#363636] p-2  h-[230px] sm:p-5 flex flex-col items-center  rounded-md relative '>
    <p className=' text-xs left-6 mb-5 text-white'>Custom Tooltip</p>
    <LineChart
        lineSets={lineSets} 
        xAxisLabels={xAxisLabels}
        lineToShowPointInfo={0}
        customToolTip={customToolTip}
        horizontalGuides={{ 
        count: 5, 
        stroke: 1,
        color: "#ccccccfa",
        dashed: true, 
        }}
    />
    </div>
);
};

export default CustomTooltipLineChart;

export const CustomTooltipLineCode = `
import { LineChart } from 'simple-react-linechart';
import { CustomToolTipData } from 'simple-react-linechart/dist/cjs/types/src/components/LineChart/types';

const CustomTooltipLineChart = () => {
const lineSets = [
    {
    label: "2023",
    data: [
        { x: 1, y: 200 },
        { x: 2, y: 140 },
        { x: 3, y: 120 },
        { x: 4, y: 130 },
        { x: 5, y: 98 },
        { x: 6, y: 160 },
        { x: 7, y: 205 },
        { x: 8, y: 25 },
        { x: 9, y: 130 },
        { x: 10, y: 160 },
        { x: 11, y: 180 },
        { x: 12, y: 250 },
      ],
       strokeColor: "#FF6384",
       backgroundColorLine: "rgba(206, 0, 58, 0.2)", 
    }
];

const xAxisLabels = ["Ene", "Feb", "Mar", "Abr", "May", 
"Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

const customToolTip = (point:CustomToolTipData) => {
    const {label, value, xLabel } = point;
    const month = xLabel
    const valueY = value.y;
    return (
        <div className="bg-[#363636] flex flex-col justify-center items-center text-[10px] text-white rounded-full w-[60px] h-[60px] overflow-hidden shadow-md">
            <p className=''>{label}</p>
            <p>{month}</p>
            <p>{valueY}</p>
        </div>
    )
}

return (
    <div className='border sm:h-[350px] h-[230px] p-5  bg-[#2c2c2c] flex flex-col items-center justify-center  rounded-md relative '>
    <p className='absolute text-xs left-6 top-2'>Custom Tooltip</p>
    <LineChart
        lineSets={lineSets} 
        xAxisLabels={xAxisLabels}
        lineToShowPointInfo={0}
        customToolTip={customToolTip}
        horizontalGuides={{ 
        count: 5, 
        stroke: 1,
        color: "#ccccccfa",
        dashed: true, 
        }}
    />
    </div>
);
};

export default CustomTooltipLineChart;`

