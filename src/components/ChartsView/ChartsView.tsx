import "linechart-test/dist/cjs/assets/index-UvnS4ki5.css";
import LineCode from "./codes/LineCode";
import SimpleLine, { SimpleLineCode } from "./charts/SimpleLineChart";
import MultipleLine, { MultipleLineCode } from "./charts/MultipleLineChart";
import CustomTooltipLineChart, {
  CustomTooltipLineCode,
} from "./charts/CustomTooltipChart";
import BigDataLineChart, { BigDataLineCode } from "./charts/BigDataLineChart";
import { useTranslation } from "react-i18next";

const ChartsView = () => {
  const {t} = useTranslation();
  return (
    <div
      className="
     w-full flex-col m-auto  flex gap-10 justify-center items-center    rounded-md  "
    >
      <div className=" w-full ">
        <div className="mt-10 flex flex-col items-center sm:items-start gap-1.5">
          <p>{t('projects.chart.install')}</p>
          <div className="bg-gray-100 py-2 px-2 w-max rounded-md shadow-md">
            <p className="text-sm">npm install simple-react-linechart</p>
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-col gap-10 rounded-md  ">
       
          <div className="flex  flex-col justify-center gap-5">
            <div className="w-full">
              <SimpleLine />
            </div>
            <div className="w-full">
              <LineCode component={SimpleLineCode} />
            </div>
          </div>
          <div className="flex   flex-col justify-center gap-5">
            <MultipleLine />
            <div className="w-full">
              <LineCode component={MultipleLineCode} />
            </div>
          </div>
       
       
        <div className=" flex  flex-col gap-2 w-full">
          <div className="flex flex-col justify-center gap-5 ">
            <CustomTooltipLineChart />
            <div className="w-full">
              <LineCode component={CustomTooltipLineCode} />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-5">
            <BigDataLineChart />
            <div className="w-full">
              <LineCode component={BigDataLineCode} />
            </div>
          </div>
     
        </div>
      </div>
    </div>
  );
};

export default ChartsView;
