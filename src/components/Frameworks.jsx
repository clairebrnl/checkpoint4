import React, { useEffect, useState } from "react";
import FrameworksCards from "./FrameworksCards";
import axios from "axios";

const Frameworks = () => {
  const [frameworks, setFrameworks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/frameworks")
      .then((res) => res.data)
      .then((data) => {
        setFrameworks(data);
      })
      .catch((err) => console.log(err));
  }, []);

console.log(frameworks)

  return (
    <div>
      {frameworks.map((framework) => (
        <FrameworksCards framework={framework} key={framework.name}/>
      ))}
    </div>
  );
};

export default Frameworks;
