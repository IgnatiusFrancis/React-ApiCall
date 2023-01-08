import "./App.css";
import Main from "./Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Item from "./Item";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={client}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/item" element={<Item />}></Route>
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
