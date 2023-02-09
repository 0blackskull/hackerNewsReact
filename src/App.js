import Topbar from "./components/topbar";
import Footer from "./components/footer";
import Tile from "./components/newsTile";

// topbar (Condition : changes to the one with filters after first search)
// 30 times newsTile
// footer (has a search that disappears after first search)

function App() {
  return (
    <div>
      <Topbar />
      <Tile />
        <h1 className="text-3xl font-bold underline ">
          Hello world!
        </h1>
      <Footer />
    </div>);
}

export default App;
