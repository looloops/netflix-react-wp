import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <header>
        <MyNav />
      </header>
      <section></section>
      <main>
        <Main />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
