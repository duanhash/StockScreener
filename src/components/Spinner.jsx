import PacmanLoader from "react-spinners/PacmanLoader";

const Spinner = ({ isLoading }) => {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <PacmanLoader
        color={"#F2E9E4"}
        loading={isLoading}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;
