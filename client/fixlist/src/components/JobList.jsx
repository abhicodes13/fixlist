import React, { useEffect, useState } from "react";
import axios from "axios";

const JobList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/jobs")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>
          {item.title} & {item.location}
        </p>
      ))}
    </div>
  );
};

export default JobList;
