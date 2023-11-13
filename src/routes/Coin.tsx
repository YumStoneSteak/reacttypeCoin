import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import LoadingAnimation from "../components/LoadingAnimation";
import btcData from "../data/btcData.json";
import ICoinInfo from "../interface/ICoinInfo";
import ICoinPrice from "../interface/ICoinPrice";

const Container = styled.div`
  max-width: 700px;
  padding: 0px 10px;
  margin: 50px auto 0px auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: ${(props) => props.theme.accentColor};
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
    font-size: 15px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  margin: 20px 0px;
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
        </>
      )}
    </Container>
  );
};

export default Coin;
