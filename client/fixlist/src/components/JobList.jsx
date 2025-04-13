import React, { useEffect, useState } from "react";
import axios from "axios";

const JobList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fixlist.onrender.com/jobs")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>All Jobs available</h1>
      {data.map((item) => (
        <p key={item.id}>
          {item.title} <br /> {item.location}
        </p>
      ))}
    </div>
  );
};

export default JobList;
