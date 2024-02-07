import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {
  return (
    <>
      <Header />
      <CoreConcepts />
      <main>
        <h2>Time to get started!</h2>
        <Examples />
      </main>
    </>
  );
}

export default App;
