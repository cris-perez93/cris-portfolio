import { LineChart } from 'linechart-test'; 

const BigDataLineChart = () => {
    const createYearlyRandomData = () => {
        const data = [];
        let lastY = Math.random() * 100 + 100; // Inicializamos con un valor aleatorio entre 100 y 200
        let trend = 0; 
        for (let i = 0; i < 365; i++) {
          trend += (Math.random() - 0.5) * 0.2; 
      
          if (trend > 1) trend = 1;
          if (trend < -1) trend = -1;
          const deltaY = trend + (Math.random() - 0.5) * 5;
          lastY += deltaY;
    
          if (lastY < 50) lastY += 5; 
          if (lastY > 350) lastY -= 5; 
      
          data.push({
            x: i,
            y: Math.max(0, Math.floor(lastY)), 
          });
        }
        return data;
      };
const lineSets = [
    {
    label: "2023",
    data: createYearlyRandomData(),
       strokeColor: "#FF6384",
    }
];

return (
    <div className='border flex flex-col items-center justify-center  sm:p-10 p-6 rounded-md relative '>
    <p className=' text-xs left-6 mb-5'>Big data chart</p>
    <LineChart
        width={850}
        hideXlabels={true}
        lineSets={lineSets} 
        lineToShowPointInfo={0}
        horizontalGuides={{
          stroke: 0
        }}
    />
    </div>
);
};

export default BigDataLineChart;
export const BigDataLineCode = `
import { LineChart } from 'simple-react-linechart'; 

const BigDataLineChart = () => {
    const createYearlyRandomData = () => {
        const data = [];
        let lastY = Math.random() * 100 + 100; // Inicializamos con un valor aleatorio entre 100 y 200
        let trend = 0; 
        for (let i = 0; i < 365; i++) {
          trend += (Math.random() - 0.5) * 0.2; 
      
          if (trend > 1) trend = 1;
          if (trend < -1) trend = -1;
          const deltaY = trend + (Math.random() - 0.5) * 5;
          lastY += deltaY;
    
          if (lastY < 50) lastY += 5; 
          if (lastY > 350) lastY -= 5; 
      
          data.push({
            x: i,
            y: Math.max(0, Math.floor(lastY)), 
          });
        }
        return data;
      };
const lineSets = [
    {
    label: "2023",
    data: createYearlyRandomData(),
       strokeColor: "#FF6384",
    }
];

return (
    <div className='border  px-10 pb-5 pt-14  rounded-md relative '>
    <p className='absolute text-xs left-6 top-3'>Big data chart</p>
    <LineChart
        hideXlabels={true}
        lineSets={lineSets} 
        lineToShowPointInfo={0}
        horizontalGuides={{
          stroke: 0
        }}
    />
    </div>
);
};

export default BigDataLineChart;
`
