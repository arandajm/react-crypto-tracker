import { FC, useEffect, useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Coin } from "../types";

type Props = {
  simplified?: boolean;
};

const CryptoCurrencies: FC<Props> = (props) => {
  const limit: number = props.simplified ? 10 : 200;
  const { data: coinsList, isFetching } = useGetCryptosQuery(limit);

  const [search, setSearch] = useState<string>("");
  const [cryptos, setCryptos] = useState<Coin[]>([]);

  const handleOnChange = (e: any) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (!props.simplified) {
      const filteredCryptos = coinsList?.data?.coins.filter((coin: any) =>
        coin.name.includes(search)
      );
      console.log(filteredCryptos);
      setCryptos(filteredCryptos);
    } else {
      setCryptos(coinsList?.data?.coins);
    }
  }, [coinsList, search]);

  if (isFetching) {
    return <p>Loading.....</p>;
  }

  return (
    <div>
      {!props.simplified && (
        <input type="text" value={search} onChange={(e) => handleOnChange(e)} />
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {cryptos?.map((crypto: Coin) => (
          <div
            key={crypto.uuid}
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
              src={crypto.iconUrl}
              alt="icon"
            />
            <p>{crypto.name}</p>
            <p>{crypto.symbol}</p>
            <p>
              {Number(crypto.price).toLocaleString("US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoCurrencies;
