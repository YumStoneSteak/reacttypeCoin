import { useEffect, useState } from "react";
import { Outlet, Route, Routes, useMatch, useParams } from "react-router-dom";
import styled from "styled-components";
import LoadingAnimation from "../components/LoadingAnimation";
import btcData from "../data/btcData.json";
import ICoinInfo from "../interface/ICoinInfo";
import ICoinPrice from "../interface/ICoinPrice";
import Price from "./Price";
import Chart from "./Chart";
import { Link } from "react-router-dom";

const Container = styled.div`
  max-width: 700px;
  margin: 50px auto 0px auto;
  padding: 0px 10px;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 48px;
  font-weight: bold;
`;

const CoinsList = styled.ul`
  list-style-type: none;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin: 0px 10px;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;

  span:first-child {
    margin-bottom: 5px;
    font-size: 15px;
    font-weight: 400;
    text-transform: uppercase;
  }
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  margin: 20px 0px;
`;

const LinkTab = styled(Link)<{ isActive: boolean }>`
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  font-size: 25px;
  font-weight: 400;
  text-transform: uppercase;
  padding: 10px 0px;
  width: 50%;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  text-decoration: none;
  margin-right: 20px;

  &:hover {
    color: ${(props) => props.theme.accentColor};
  }

  &:last-child {
    margin-right: 0;
  }
`;

interface RouteParams {
  coinId: string;
}

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Coin = () => {
  const { coinId } = useParams() as unknown as RouteParams;
  const [loading, setLoading] = useState<boolean>(true);
  const [info, setInfo] = useState<ICoinInfo>();
  const [priceInfo, setPriceInfo] = useState<undefined | ICoinPrice[]>();
  const isChartTap = useMatch("/:coinId/chart");
  const isPriceTap = useMatch("/:coinId/price");
  console.log("isChartTap", isChartTap);
  useEffect(() => {
    getCoinData();
  }, []);

  const getCoinData = async () => {
    try {
      // const infoData = await (
      //   await fetch("https://api.coinpaprika.com/v1/coins/btc-bitcoin")
      // ).json();
      setInfo(btcData);

      const priceData = await (
        await fetch(
          `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
        )
      ).json();
      setPriceInfo(priceData);

      setLoading(false);
    } catch (error) {
      const priceError = [
        {
          time_open: 0,
          time_close: 0,
          open: "error",
          high: "error",
          low: "error",
          close: "error",
          volume: "error",
          market_cap: 0,
        },
      ];
      setPriceInfo(priceError);
    }
  };

  return (
    <Container>
      <Header>
        <Title>
          <Img
            src={`https://cryptocurrencyliveprices.com/img/${coinId}.png`}
            alt="coin img"
          />
          {info?.name ?? "404 error"}
        </Title>
      </Header>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{info?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${info?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source:</span>
              <span>{info?.open_source ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>{info?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>high:</span>
              <span>{priceInfo?.[0]?.high}</span>
            </OverviewItem>
            <OverviewItem>
              <span>low:</span>
              <span>{priceInfo?.[0]?.low}</span>
            </OverviewItem>
          </Overview>

          <Tabs>
            <LinkTab to={`/${coinId}/chart`} isActive={!!isChartTap}>
              Chart
            </LinkTab>
            <LinkTab to={`/${coinId}/price`} isActive={!!isPriceTap}>
              Price
            </LinkTab>
          </Tabs>

          {/* Nested Routing */}
          <Outlet />
        </>
      )}
    </Container>
  );
};

export default Coin;
