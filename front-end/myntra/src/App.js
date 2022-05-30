import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home/Home";
import Signup from "./components/Forms/Signup";
import { Routes, Route } from "react-router-dom";

import Login from "./components/Forms/Login";
import ResetForm from "./components/Forms/ResetForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header /> <Home />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <>
              <Header></Header>

              <ResetForm></ResetForm>

              {/* <Login /> */}

              {/* <Signup></Signup> */}
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
