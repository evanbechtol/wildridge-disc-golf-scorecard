// import logo from '../../assets/img/logo.png';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="app-logo" alt="logo" />*/}
        <p>Welcome to Wildridge Disc Golf!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default LandingPage;
