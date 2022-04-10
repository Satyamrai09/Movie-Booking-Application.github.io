import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div>
            <svg
              className="logo rotate linear infinite"
              xmlns="http://www.w3.org/2000/svg"
              fill="#ff7f7f"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              enableBackground="new 0 0 512 512"
            >
              <path d="M352,255.5l-192,96v-192L352,255.5z M512,31.5v448H0v-448H512z M320,95.5h64v-32h-64V95.5z M224,95.5h64v-32h-64V95.5z   M128,95.5h64v-32h-64V95.5z M32,95.5h64v-32H32V95.5z M96,415.5H32v32h64V415.5z M192,415.5h-64v32h64V415.5z M288,415.5h-64v32h64  V415.5z M384,415.5h-64v32h64V415.5z M480,415.5h-64v32h64V415.5z M480,127.5H32v256h448V127.5z M480,63.5h-64v32h64V63.5z" />
            </svg>
          </div>
        </div>
        {/* <div className="headerSecond">
          <span className="headinSpan">Upcoming Movies</span>
        </div> */}
      </div>
    );
  }
}
