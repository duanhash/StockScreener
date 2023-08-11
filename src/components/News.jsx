import { useState } from "react";
import { Spinner } from "../components";

const News = ({ newsData, isLoading }) => {
  const [visible, setVisible] = useState(4);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  const months = (month) => {
    switch (month) {
      case "01":
        return "Janurary";
      case "02":
        return "February";
      case "03":
        return "March";
      case "04":
        return "April";
      case "05":
        return "May";
      case "06":
        return "June";
      case "07":
        return "July";
      case "08":
        return "August";
      case "09":
        return "September";
      case "10":
        return "October";
      case "11":
        return "November";
      default:
        return "December";
    }
  };

  if (isLoading) {
    return <Spinner isLoading={isLoading} />;
  }

  return (
    <div className="container w-full px-20 mx-auto p-6 space-y-6 sm:space-y-12 relative">
      {newsData === null || (
        <>
          <a href={newsData[0].url} target="_blank">
            <div className="card lg:card-side bg-walnutBrown shadow-xl lg:px-8 h-full w-[95%] mx-auto">
              <figure>
                <img
                  src={newsData[0].banner_image}
                  alt="Banner Image"
                  className="object-cover overflow-hidden"
                />
              </figure>
              <div className="card-body h-96 overflow-y-scroll">
                <h2 className="card-title text-almond">{newsData[0].title}</h2>
                <div
                  className={`badge badge-secondary text-xs h-9 
                  ${
                    newsData[0].overall_sentiment_score <= -0.15
                      ? "border-red-100 bg-red-100 text-red-600"
                      : newsData[0].overall_sentiment_score >= 0.15
                      ? "border-green-100 bg-green-100 text-green-600"
                      : "border-cloud bg-cloud text-gray-500"
                  }`}
                >
                  {`${newsData[0].overall_sentiment_label}`}
                </div>
                <span className="text-xs text-almond">
                  {months(newsData[0].time_published.slice(4, 6)) +
                    " " +
                    newsData[0].time_published.slice(6, 8) +
                    ", " +
                    newsData[0].time_published.slice(0, 4)}
                </span>
                <p className="text-almond">{newsData[0].summary}</p>
                <div className="card-actions justify-start">
                  {newsData[0].ticker_sentiment.map((stock, id) => (
                    <div
                      className="badge badge-outline text-almond outline-almond"
                      key={id}
                    >{`#${stock.ticker}`}</div>
                  ))}
                  {newsData[0].topics.map((topic, id) => (
                    <div
                      className="badge badge-outline text-almond outline-almond"
                      key={id}
                    >{`${topic.topic}`}</div>
                  ))}
                </div>
              </div>
            </div>
          </a>
          <div className="grid grid-cols-1 gap-y-10 gap-x-10 justify-items-center lg:grid-cols-3 z-20">
            {newsData.slice(1, visible).map((article, id) => (
              <a
                href={article.url}
                target="_blank"
                className="mx-auto max-w-sm"
                key={id}
              >
                <div className="card w-full bg-walnutBrown shadow-xl">
                  <figure>
                    <img
                      src={article.banner_image}
                      alt="Banner Image"
                      className="object-cover overflow-hidden h-40 w-full"
                    />
                  </figure>
                  <div className="card-body h-56 overflow-y-scroll">
                    <h2 className="card-title text-almond">{article.title}</h2>
                    <div
                      className={`badge badge-secondary text-sm h-9 
                      ${
                        article.overall_sentiment_score <= -0.15
                          ? "border-red-100 bg-red-100 text-red-600"
                          : article.overall_sentiment_score >= 0.15
                          ? "border-green-100 bg-green-100 text-green-600"
                          : "border-cloud bg-cloud text-gray-500"
                      }`}
                    >
                      {`${article.overall_sentiment_label}`}
                    </div>
                    <span className="text-xs text-almond">
                      {months(article.time_published.slice(4, 6)) +
                        " " +
                        article.time_published.slice(6, 8) +
                        ", " +
                        article.time_published.slice(0, 4)}
                    </span>
                    <p className="text-almond">{article.summary}</p>
                    <div className="card-actions justify-start">
                      {article.ticker_sentiment.map((stock, id) => (
                        <div
                          className="badge badge-outline text-almond outline-almond"
                          key={id}
                        >{`#${stock.ticker}`}</div>
                      ))}
                      {article.topics.map((topic, id) => (
                        <div
                          className="badge badge-outline text-almond outline-almond"
                          key={id}
                        >{`${topic.topic}`}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </>
      )}
      {visible < 13 ? (
        <div className="flex justify-center pb-16">
          <button
            type="button"
            className="px-6 py-3 text-sm rounded-md hover:underline bg-walnutBrown text-almond"
            onClick={showMoreItems}
          >
            Load more articles...
          </button>
        </div>
      ) : (
        <div className="pb-16"></div>
      )}
    </div>
  );
};

export default News;
