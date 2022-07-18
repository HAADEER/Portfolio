import React from "react";
import { useSelector } from "react-redux";
import picture from "../../assets/profilePic.jpg";
import GitLogo from "../../assets/github-brands.svg";
import "./home.css";
const Home = () => {
  const userTodo = useSelector((state) => state.todos);


  return (
    <div className="container home-wrapper">
      <div className="row">
        <div className="col-6 mt-5">
          <h1>Hello , I'am Hadeer.</h1>
          <p>
          I'm a front-end engineer, and I create fun,
        innovative, accessible, and fast websites. I try to leave every bit of
        code I touch more readable, modular, performant and accessible than I
        found it.
          </p>
          <a href="https://github.com/HADEER-ESS">
            <img src={GitLogo} alt="github logo" style={{width : 30}}/>
          </a>
          <a href="https://mail.google.com/mail/u/0/?tab=wm#inbox">
            <p>hadeeressam21@gmail.com</p>
          </a>
        </div>
        <div className="col-6">
        <img
        src={picture}
        alt="profile picture"
        className="rounded-circle m-auto d-block w-50"
      />
        </div>
      </div>
      
    </div>
  );
};

export default Home;

