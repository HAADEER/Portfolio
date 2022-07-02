import React from "react";
import { useSelector } from "react-redux";
import {saveAs} from "file-saver"
import picture from "../../assets/profilePic.jpg";
import "./home.css";
import CV from '../../folder/Hadeer_Essam.pdf'
const Home = () => {
  const userTodo = useSelector((state) => state.todos);

  const downloadCV = () =>{
    saveAs(
      "https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:2b339ade-95a6-4a0e-a106-09a3e29d62c1",
      "Hadeer_Essam.pdf"
    )
  }

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
          <button className="btn btn-info text-white" onClick={downloadCV}>
            Download CV
          </button>
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


/*
<a
              className="text-decoration-none text-white"
              href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:2b339ade-95a6-4a0e-a106-09a3e29d62c1"
            >
              View CV
            </a>
            */