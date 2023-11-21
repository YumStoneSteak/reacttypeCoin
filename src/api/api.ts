export const fetchAllCoins = async () => {
  const response = await fetch(`https://api.coinpaprika.com/v1/coins`);
  return await response.json();
};

export const fetchCoinInfo = async (coinId: string) => {
  const response = await fetch(
    `https://api.coinpaprika.com/v1/coins/${coinId}`
  );
  return await response.json();
};

export const fetchCoinPrice = async (coinId: string) => {
  const response = await fetch(
    //"https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=usd&days=7"
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
  );
  return await response.json();
};
