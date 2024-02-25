import { connect } from "react-redux";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import { getUserAuth } from "./actions";

function App({ getUserAuth }) {
  useEffect(() => {
    getUserAuth();
  }, [getUserAuth]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<ProtectedRoutes />} />
        </Routes>
      </Router>
    </div>
  );
}

function ProtectedRoutes() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(null, mapDispatchToProps)(App);
