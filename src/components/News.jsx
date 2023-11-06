import { useState } from "react";
import { Spinner } from "../components";

const News = ({ newsData, isLoading }) => {
  const [visible, setVisible] = useState(4);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  if (isLoading) {
    return <Spinner isLoading={isLoading} />;
  }

  return (
    <div className="container w-full px-20 mx-auto p-6 space-y-6 sm:space-y-12 relative">
      {newsData === null || (
        <>
          <a href={newsData[0].article_url} target="_blank">
            <div className="card lg:card-side bg-walnutBrown shadow-xl lg:px-8 h-full w-[95%] mx-auto">
              <figure>
                <img
                  src={newsData[0].image_url}
                  alt="Banner Image"
                  className="object-cover overflow-hidden"
                />
              </figure>
              <div className="card-body h-96 overflow-y-scroll">
                <h2 className="card-title text-almond">{newsData[0].title}</h2>
                <span className="text-xs text-almond">
                  {new Date(newsData[0].published_utc).toUTCString()}
                </span>
                <p className="text-almond">{newsData[0].description}</p>
                <div className="card-actions justify-start">
                  {newsData[0].keywords &&
                    newsData[0].keywords.map((topic, id) => (
                      <div
                        className="badge badge-outline text-almond outline-almond"
                        key={id}
                      >{`#${topic}`}</div>
                    ))}
                  {newsData[0].tickers.map((ticker, id) => (
                    <div
                      className="badge badge-outline text-almond outline-almond"
                      key={id}
                    >{`${ticker}`}</div>
                  ))}
                </div>
              </div>
            </div>
          </a>
          <div className="grid grid-cols-1 gap-y-10 gap-x-10 justify-items-center lg:grid-cols-3 z-20">
            {newsData.slice(1, visible).map((article, id) => (
              <a
                href={article.article_url}
                target="_blank"
                className="mx-auto max-w-sm"
                key={id}
              >
                <div className="card w-full bg-walnutBrown shadow-xl">
                  <figure>
                    <img
                      src={article.image_url}
                      alt="Banner Image"
                      className="object-cover overflow-hidden h-40 w-full"
                    />
                  </figure>
                  <div className="card-body h-56 overflow-y-scroll">
                    <h2 className="card-title text-almond">{article.title}</h2>
                    <span className="text-xs text-almond">
                      {new Date(article.published_utc).toUTCString()}
                    </span>
                    <p className="text-almond">{article.description}</p>
                    <div className="card-actions justify-start">
                      {article.keywords &&
                        article.keywords.map((topic, id) => (
                          <div
                            className="badge badge-outline text-almond outline-almond"
                            key={id}
                          >{`#${topic}`}</div>
                        ))}
                      {article.tickers.map((ticker, id) => (
                        <div
                          className="badge badge-outline text-almond outline-almond"
                          key={id}
                        >{`${ticker}`}</div>
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
