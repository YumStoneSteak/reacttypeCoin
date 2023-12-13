import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import LoadingAnimation from "../../components/LoadingAnimation";
import { useQuery } from "react-query";
import { fetchAllCoins } from "../../api/api";
import { Helmet } from "react-helmet";
import {
  Container,
  Header,
  Title,
  fadeIn,
} from "../../style/GlobalStyleComponents";

const CoinsList = styled.ul`
  list-style-type: none;
`;

const Coin = styled.li`
  background-color: ${(props) => props.theme.bgAccentColor};
  color: ${(props) => props.theme.textColor};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
  font-size: 36px;
  border-radius: 15px;
  opacity: 0;
  animation: ${(props) =>
    css`
      ${fadeIn()} 700ms ease-in-out forwards
    `};
  transition: all 3s cubic-bezier(0.33, 1, 0.68, 1);

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

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const START_DATA_NUM = 0;
const END_DATA_NUM = 100;

const Coins = () => {
  const [coins, setCoins] = useState<ICoin[]>([]);

  const { isLoading, data } = useQuery("fetchAllCoins", fetchAllCoins);

  useEffect(() => {
    if (data) {
      data.slice(START_DATA_NUM, END_DATA_NUM).forEach((coin: ICoin) => {
        preloadImage(`https://cryptocurrencyliveprices.com/img/${coin.id}.png`);
      });

      setCoins(data.slice(START_DATA_NUM, END_DATA_NUM));
    }
  }, [data]);

  const preloadImage = (src: string) => {
    const img = new Image();
    img.src = src;
  };

  return (
    <Container>
      <Helmet>
        <title>Coins</title>
      </Helmet>
      <Header>
        <Title>Coins Currency</Title>
      </Header>
      {isLoading ? (
        <LoadingAnimation msg={"loading..."} />
      ) : (
        <CoinsList>
          {coins.map((coin, index) => (
            <Coin
              key={coin.id}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
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
