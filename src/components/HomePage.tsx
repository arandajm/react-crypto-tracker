import millify from "millify";
import { FC } from "react";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import CryptoCurrencies from "./CryptoCurrencies";
import News from "./News";
import StatsCard from "./StatsCard";
import { StarIcon } from "@chakra-ui/icons";
import { Heading } from "@chakra-ui/react";

const HomePage: FC = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const { stats } = data?.data || {};

  if (isFetching) {
    return <p>Loading.....</p>;
  }

  return (
    <div>
      <Heading as={"h3"} size="xl">
        Global Cryto Stats
      </Heading>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        <StatsCard
          title="Total cryptocurrencies"
          icon={<StarIcon color={"yellow"} />}
          stat={millify(stats?.total)}
        />
        <StatsCard
          title="Total Exchanges"
          icon={<StarIcon color={"yellow"} />}
          stat={millify(stats?.totalExchanges)}
        />
        <StatsCard
          title="Total Market Cap"
          icon={<StarIcon color={"yellow"} />}
          stat={millify(stats?.totalMarketCap)}
        />
        <StatsCard
          title="Total 24 Volume"
          icon={<StarIcon color={"yellow"} />}
          stat={millify(stats?.total24hVolume)}
        />
        <StatsCard
          title="Total Markets"
          icon={<StarIcon color={"yellow"} />}
          stat={millify(stats?.totalMarkets)}
        />
      </section>

      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Heading as={"h3"} size="xl">
          Top 10 Cryptocurrencies in the world
        </Heading>
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
        <Heading as={"h3"} size="xl">
          Top 10 Crypto news in the world
        </Heading>
        <p>
          <Link to={"/cryptonews"}>Show More</Link>
        </p>
      </section>

      <News simplified />
    </div>
  );
};

export default HomePage;
