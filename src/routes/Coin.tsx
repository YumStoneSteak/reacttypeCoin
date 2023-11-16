import { useEffect, useState } from "react";
import { Outlet, useMatch, useParams } from "react-router-dom";
import styled from "styled-components";
import LoadingAnimation from "../components/LoadingAnimation";
import ICoinInfo from "../interface/ICoinInfo";
import ICoinPrice from "../interface/ICoinPrice";
import Price from "./Price";
import Chart from "./ChartTab";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoinInfo, fetchCoinPrice } from "../api/api";
import ChartTab from "./ChartTab";

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

const Coin = () => {
  const { coinId } = useParams() as unknown as RouteParams;

  const isChartTap = useMatch("/:coinId/chart");
  const isPriceTap = useMatch("/:coinId/price");

  const { isLoading: isLoadingInfo, data: infoData } = useQuery(
    ["fetchCoinInfo", coinId],
    () => fetchCoinInfo(coinId)
  );
  const { isLoading: isLoadingPrice, data: priceData } = useQuery(
    ["fetchCoinPrice", coinId],
    () => fetchCoinPrice(coinId)
  );

  const OverviewPriceItems: string[] = ["open", "close", "high", "low"];

  return (
    <Container>
      <Header>
        <Title>
          <Img
            src={`https://cryptocurrencyliveprices.com/img/${coinId}.png`}
            alt="coin img"
          />
          {coinId.split("-")[1].toUpperCase() ?? "404 error"}
        </Title>
      </Header>
      {isLoadingInfo || isLoadingPrice ? (
        <LoadingAnimation msg="loading..." />
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol</span>
              <span>${infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source</span>
              <span>{infoData?.open_source ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
          <Overview>
            {OverviewPriceItems.map((item, index) => (
              <OverviewItem key={index}>
                <span>{item}</span>
                <span>{priceData?.[0]?.[item] ?? "N/A"}</span>
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
