import React from "react";

const FrameworksCards = ({ framework }) => (
    <li className="card">
      <div className="framework-container">
        <ul>
          <h1>{framework.name}</h1>
        </ul>
      </div>
    </li>
  );

export default FrameworksCards;
