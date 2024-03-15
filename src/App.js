import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";

function App() {
  return (
    <div className="App bg-dark text-ligh">
      <header>
        <MyNav />
      </header>
      <section></section>
      <main className="t">
        <Main />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
