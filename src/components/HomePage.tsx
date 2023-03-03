import millify from "millify";
import { FC } from "react";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import CryptoCurrencies from "./CryptoCurrencies";
import News from "./News";

const HomePage: FC = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const { stats } = data?.data || {};

  if (isFetching) {
    return <p>Loading.....</p>;
  }

  return (
    <div>
      <h2>Home Page</h2>

      <h3>Global Cryto Stats</h3>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        <div
          style={{
            border: "1px solid black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>Total cryptocurrencies</p>
          <p>{millify(stats?.total)}</p>
        </div>
        <div
          style={{
            border: "1px solid black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>Total Exchanges</p>
          <p>{millify(stats?.totalExchanges)}</p>
        </div>
        <div
          style={{
            border: "1px solid black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>Total Market Cap</p>
          <p>{millify(stats?.totalMarketCap)}</p>
        </div>
        <div
          style={{
            border: "1px solid black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>Total 24 Volume</p>
          <p>{millify(stats?.total24hVolume)}</p>
        </div>
        <div
          style={{
            border: "1px solid black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>Total Markets</p>
          <p>{millify(stats?.totalMarkets)}</p>
        </div>
      </section>

      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3>Top 10 Cryptocurrencies in the world</h3>
        <p>
          <Link to={"/cryptocurrencies"}>Show More</Link>
        </p>
      </section>

      <CryptoCurrencies simplified />

      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3>Top 10 Crypto news in the world</h3>
        <p>
          <Link to={"/cryptonews"}>Show More</Link>
        </p>
      </section>

      <News simplified />
    </div>
  );
};

export default HomePage;
