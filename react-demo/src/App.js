

// import logo from './logo.svg';
// import './App.css';
//import GoodList from './view/goodList';
//import Admin from "./view/Admin";
function App(props) {
  return (
    <div className="App">
     
      <header className="App-header">
     
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <GoodList></GoodList> */}
      {props.children}
        {/* <Admin></Admin> */}
       
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
