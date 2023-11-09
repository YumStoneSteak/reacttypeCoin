import { log } from "console";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoadingBox from "../components/LoadingAnimation";
import LoadingAnimation from "../components/LoadingAnimation";

const Container = styled.div`
  height: 100vh;
  max-width: 500px;
  padding: 0px 10px;
  margin: 0 auto;
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

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 10px;
  font-size: 48px;
  border-radius: 15px;

  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
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

const Coins = () => {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const coinData = async () => {
    try {
      const response = await fetch(
        "https://proxy.cors.sh/https://api.coinpaprika.com/v1/coins"
      );
      const json = await response.json();
      setCoins(json.slice(0, 100));
    } catch (error) {
      const errorDummy = [
        {
          id: "error",
          name: "&rarr; error no data",
          symbol: "error",
          rank: 1,
          is_new: true,
          is_active: true,
          type: "error",
        },
      ];
      setCoins(errorDummy);
    }

    setLoading(false);
  };

  useEffect(() => {
    coinData();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Coins Currency</Title>
      </Header>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <CoinsList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`}>
                <Img
                  src={`https://coinicons-api.vercel.app/${coin.symbol.toLowerCase()}`}
                  alt="coin img"
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
};

export default Coins;
