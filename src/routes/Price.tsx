import React from "react";
import { useQuery } from "react-query";
import { fetchCoinPrice } from "../api/api";

interface IChartProps {
  coinId?: string;
}

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Chart = (props: IChartProps) => {
  const { coinId } = props;

  return <div>Price</div>;
};

export default Chart;
