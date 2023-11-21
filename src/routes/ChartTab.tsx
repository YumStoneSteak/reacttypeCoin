import React from "react";
import { useQuery } from "react-query";
import { fetchCoinPrice } from "../api/api";
import ReactApexChart from "react-apexcharts";
import { useParams } from "react-router-dom";
import ICoinPrice from "../interface/ICoinPrice";
import LoadingAnimation from "../components/LoadingAnimation";

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const ChartTab = () => {
  const { coinId } = useParams();
  const { isLoading, data } = useQuery<ICoinPrice[]>(
    ["fetchCoinPrice", coinId],
    () => fetchCoinPrice(coinId!)
  );

  return (
    <div>
      {isLoading ? (
        //<LoadingAnimation msg="loading chart" />
        "loading chart"
      ) : (
        <ReactApexChart
          type="line"
          series={[
            {
              name: "data",
              data: data?.map((price) => parseFloat(price.close)) as number[],
            },
          ]}
          options={{
            chart: {
              height: 500,
              width: 500,
              background: "transpatent",
              //toolbar: { show: false },
            },
            xaxis: {
              categories: data?.map((price) => price.time_close),
              type: "datetime",
            },
            theme: {
              mode: "dark",
            },
            colors: ["#ff7b4f"],
            stroke: {
              curve: "smooth",
            },
          }}
        />
      )}
    </div>
  );
};

export default ChartTab;
