import React from "react";
import { useQuery } from "react-query";
import { fetchCoinPrice } from "../api/api";
import ReactApexChart from "react-apexcharts";
import { useParams } from "react-router-dom";
import ICoinPrice from "../interface/ICoinPrice";

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
            },
            theme: {
              mode: "dark",
            },
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
