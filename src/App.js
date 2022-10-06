import logo from "./logo.svg";
import "./App.css";
import Page from "./components/Page/Page";
import Table from "muicolumnhidetable";

function App() {
  const streams = [];

  for (let i = 1; i < 30; i++) {
    streams.push({
      Temperature: Math.floor(Math.random() * 20),
      Humidity: Math.floor(Math.random() * 20),
      Co2: Math.floor(Math.random() * 20),
      Pressure: Math.floor(Math.random() * 20),
      Pressure2: Math.floor(Math.random() * 20),
      Pressure3: Math.floor(Math.random() * 20),
      Pressure5: Math.floor(Math.random() * 20),
    });
  }
  return (
    <>
      <Table streams={streams} />
      <Page></Page>
    </>
  );
}

export default App;
