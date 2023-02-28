import { FC, useEffect, useState } from "react";
import api from "../services/api";
import { Coin } from "../types";

type Props = {
  simplified?: boolean;
};

const CryptoCurrencies: FC<Props> = (props) => {
  const [coins, setCoins] = useState<Coin[]>([]);

  const limit: number | undefined = props.simplified ? 10 : undefined;

  useEffect(() => {
    const fetchCoins = async (limit?: number) => {
      const coins = await api.coin.list(limit);
      console.log(coins);
      setCoins(coins);
    };

    fetchCoins(limit);
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "20px",
      }}
    >
      {coins.map((coin) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            border: "1px solid black",
            gap: "5px",
          }}
        >
          <img
            style={{ width: "60px", height: "60px" }}
            src={coin.iconUrl}
            alt="icon"
          />
          <p>{coin.name}</p>
          <p>{coin.symbol}</p>
          <p>
            {Number(coin.price).toLocaleString("US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CryptoCurrencies;
