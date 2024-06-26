import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br />
          Crypto Marketplace
        </h1>
        <p>
          Welcome to the world&apos;s largest cryptocurrency marketplace. Sign
          up to explore more about cryptos.
        </p>
        <form>
          <input type="text" placeholder="Enter a crypto..." />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="crypto__table">
        <div className="table__layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{textAlign: "center"}}>24H Change</p>
          <p>Market Cap</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
