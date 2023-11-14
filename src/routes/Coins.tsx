import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoadingAnimation from "../components/LoadingAnimation";
import coinsData from "../data/coinsData.json";

const Container = styled.div`
  max-width: 700px;
  margin: 50px auto 0px auto;
  padding: 0px 10px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
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

const Coin = styled.li`
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
  font-size: 36px;
  border-radius: 15px;
  transition: color 0.2s ease-in;

  a {
    display: flex;
    align-items: center;
    padding: 20px;
  }
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin: 0px 10px;
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

  useEffect(() => {
    getCoinsData();
  }, []);

  const getCoinsData = async () => {
    try {
      //const response = await fetch("https://api.coinpaprika.com/v1/coins");
      //const json = await response.json();
      const json: CoinInterface[] = Object.values(coinsData);
      setCoins(json.slice(0, 200));
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
              <Link to={`/${coin.id}/chart`}>
                {coin.rank}{" "}
                <Img
                  src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
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
