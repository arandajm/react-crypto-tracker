import { FC, useEffect, useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Coin } from "../types";
import CryptoCard from "./CryptoCard";

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
          <CryptoCard crypto={crypto} />
        ))}
      </div>
    </div>
  );
};

export default CryptoCurrencies;
