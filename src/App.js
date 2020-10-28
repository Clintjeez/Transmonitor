import Header from "./Components/Header/Header";
import SideNav from "./Components/SideNav/SideNav";
import Main from "./Pages/Main";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__container">
        <SideNav />
        <Main />
      </div>
    </div>
  );
}

export default App;
