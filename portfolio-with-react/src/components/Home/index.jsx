import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Hi,</p>
          <p>I am Mohammed</p>
          <p>Software programmer</p>
        </h1>
        <button>More Info</button>
      </div>
      <div className="person">
        <img
          src={`${process.env.PUBLIC_URL}/mo-logo.png`}
          alt="person picture"
        />
      </div>
    </div>
  );
};

export default Home;
