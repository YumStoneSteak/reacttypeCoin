import { Outlet, useMatch, useParams } from "react-router-dom";
import styled from "styled-components";
import LoadingAnimation from "../../components/LoadingAnimation";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoinInfo, fetchCoinPrice } from "../../api/api";
import { Helmet } from "react-helmet";
import {
  Container,
  Description,
  Header,
  Img,
  Overview,
  OverviewItem,
  Title,
} from "../../style/GlobalStyleComponents";

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
  background-color: ${(props) => props.theme.bgAccentColor};
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

const Coin = () => {
  const { coinId } = useParams() as unknown as RouteParams;
  const isChartTap = useMatch("/:coinId/chart");
  const isPriceTap = useMatch("/:coinId/price");

  const {
    isLoading: isLoadingInfo,
    data: infoData,
    error: infoError,
  } = useQuery(["fetchCoinInfo", coinId], () => fetchCoinInfo(coinId));

  const {
    isLoading: isLoadingPrice,
    data: priceData,
    error: priceError,
  } = useQuery(["fetchCoinPrice", coinId], () => fetchCoinPrice(coinId), {
    //refetchInterval: 5000,
  });

  const OverviewPriceItems: string[] = ["open", "close", "high", "low"];

  let LoadingMSG = "";
  if (isLoadingInfo || isLoadingPrice) {
    LoadingMSG = "Loading...";
  } else if (infoError) {
    LoadingMSG = "Error occurred while fetching coin information.";
  } else if (priceError) {
    LoadingMSG = "Error occurred while fetching coin prices.";
  }

  return (
    <Container>
      {isLoadingInfo || isLoadingPrice || infoError || priceError ? (
        <LoadingAnimation msg={LoadingMSG} />
      ) : (
        <>
          <Helmet>
            <title>
              {infoData?.name ? `Coin : ${infoData?.name}` : "loading..."}
            </title>
            <link
              rel="icon"
              type="image/png"
              href={`https://cryptocurrencyliveprices.com/img/${coinId}.png`}
              sizes="16x16"
            />
          </Helmet>
          <Header>
            <Title>
              <Img
                src={`https://cryptocurrencyliveprices.com/img/${coinId}.png`}
                alt="coin img"
              />
              {coinId.split("-")[1].toUpperCase() ?? "404 error"}
            </Title>
          </Header>
          <Overview>
            <OverviewItem>
              <span>Rank</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol</span>
              <span>{infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Price</span>
              <span>${priceData[0]?.open ?? "N/A"}</span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
          <Overview>
            {OverviewPriceItems.map((item, index) => (
              <OverviewItem key={index}>
                <span>{item}</span>
                {<span>{priceData?.[0][item] ?? "N/A"}</span>}
              </OverviewItem>
            ))}
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
