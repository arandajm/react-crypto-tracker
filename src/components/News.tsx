import { FC } from "react";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

type Props = {
  simplified?: boolean;
};

const News: FC<Props> = (props) => {
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    searchQuery: "cryptocurrency",
    count: props.simplified ? 10 : 30,
  });

  if (isFetching) {
    return <p>Loading.....</p>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "20px",
      }}
    >
      {cryptoNews?.value.map((news: any, index: number) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            border: "1px solid black",
            gap: "5px",
          }}
        >
          <img
            style={{ width: "100px", height: "100px" }}
            src={news?.image?.thumbnail.contentUrl}
            alt="news-img"
          />
          <p>{news.name}</p>
          <p>{news.description}</p>
          <p>
            {new Intl.DateTimeFormat("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(news.datePublished))}
          </p>
        </div>
      ))}
    </div>
  );
};

export default News;
