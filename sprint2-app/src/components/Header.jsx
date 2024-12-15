import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div class="header">
      <h1>Binary Tree Application</h1>
      <nav class="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/enterNumbers">Enter Numbers</Link>
          </li>
          <li>
            <Link to="/previousTrees">Previous Trees</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
