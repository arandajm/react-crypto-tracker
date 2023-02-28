import { FC } from "react";
import { Link } from "react-router-dom";
import CryptoCurrencies from "./CryptoCurrencies";

const HomePage: FC = () => (
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
      <div>
        <p>Total cryptocurrencies</p>
        <p>100</p>
      </div>
      <div>
        <p>Total Exchanges</p>
        <p>150</p>
      </div>
      <div>
        <p>Total Market Cap</p>
        <p>200</p>
      </div>
      <div>
        <p>Total 24 Volume</p>
        <p>300</p>
      </div>
      <div>
        <p>Total Markets</p>
        <p>400</p>
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
  </div>
);

export default HomePage;
