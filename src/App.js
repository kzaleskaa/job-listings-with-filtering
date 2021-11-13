import CardList from "./components/CardList";

import data from "./data.json";

function App() {
  return (
    <main>
      <h1 className="visually-hidden">Frontend Mentor Job Listings app</h1>
      <CardList jobs={data} />
    </main>
  );
}

export default App;
