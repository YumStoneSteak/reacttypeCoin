import React from "react";
import { useQuery } from "react-query";
import { fetchCoinPrice } from "../../api/api";
import ReactApexChart from "react-apexcharts";
import { useParams } from "react-router-dom";
import ICoinPrice from "../../interface/ICoinPrice";

const PriceTab = () => {
  const { coinId } = useParams();
  const { isLoading, data } = useQuery<ICoinPrice[]>(
    ["fetchCoinPrice", coinId],
    () => fetchCoinPrice(coinId!)
  );

  return (
    <div>
      {isLoading ? (
        //<LoadingAnimation msg="loading chart" />
        "loading Price"
      ) : (
        <ReactApexChart
          type="candlestick"
          series={[
            {
              name: "data",
              data: data
                ? data.map((price) => [
                    price.time_open,
                    parseFloat(price.open),
                    parseFloat(price.high),
                    parseFloat(price.low),
                    parseFloat(price.close),
                  ])
                : [],
            },
          ]}
          options={{
            chart: {
              height: 500,
              width: 500,
              background: "transpatent",
              //toolbar: { show: false },
              animations: {
                enabled: true,
                easing: "easeinout",
                speed: 800,
                animateGradually: {
                  enabled: true,
                  delay: 150,
                },
                dynamicAnimation: {
                  enabled: true,
                  speed: 350,
                },
              },
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

export default PriceTab;
