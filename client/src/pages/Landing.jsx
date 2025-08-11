import { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Logo } from "../components";

const Landing = () => {
  useEffect(() => {
    fetch("/api/v1/test")
      .then((res) => res.json())
      .then((data) => console.log("✅ API Response:", data))
      .catch((err) => console.error("❌ API Error:", err));
  }, []);

  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Tired of spreadsheets and sticky notes?
            <br /> Jobify helps you manage your job applications like a pro —
            <br />
            Track every position
            <br />
            Schedule interviews
            <br />
            Stay organized, all in one place.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
