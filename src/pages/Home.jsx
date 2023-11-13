import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getHomeData } from "../features/home/homeSlice";
import { News, TopGainLoss } from "../components";
import { Spinner } from "../components";

const Home = () => {
  const dispatch = useDispatch();
  const { globalNews, gainData, isLoading } = useSelector(
    (state) => state.home
  );

  useEffect(() => {
    if (globalNews && gainData) {
      console.log(globalNews);
      console.log(gainData);
    } else {
      dispatch(getHomeData());
    }
  }, []);

  if (isLoading) {
    return <Spinner isLoading={isLoading} />;
  }

  return (
    <>
      <section className="mx-auto max-w-screen-xl pb-4 px-4 sm:px-8 z-10">
        <div className="text-center space-y-4">
          <h1 className="text-secondary font-bold text-4xl md:text-5xl">
            Welcome to my
            <span className="text-white"> Stock Screener</span>
          </h1>
          <p className="text-white max-w-xl mx-auto leading-relaxed">
            Don't navigate to the stocks page until you have searched up a stock
            or clicked on a link to a stock. You can use the search bar in the
            top right to search for any U.S. stock. You can scroll down to find
            today's top gainers and losers, most active stocks, and global stock
            news. The code to this project and my contact info can be found by
            clicking the icons in the footer at the bottom of the page.
          </p>
        </div>
      </section>
      <section className="z-10 mt-20 relative">
        <TopGainLoss />
      </section>
      <section className="z-10 mt-20 relative">
        <News newsData={globalNews} />
      </section>
    </>
  );
};

export default Home;
