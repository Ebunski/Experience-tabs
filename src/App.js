import React, { useState, useEffect } from "react";
import Button from "./Button";
import Info from "./Info";
import axios from "axios";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(true);

  async function getData() {
    try {
      const response = await axios.get(url);
      setData(response.data);
      setLoading(false);
      console.log(data);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }

  useEffect(() => setData(getData()), []);

  if (loading) {
    return (
      <main className="section">
        <div className="loading">loading...</div>
      </main>
    );
  }

  const job = data[index];

  function changeTab(pos) {
    setIndex(pos);
  }

  //note we call on the data state after the if(loading) because data was initially empty
  const buttons = data.map((x, pos) => (
    <Button
      key={x.id}
      changeTab={changeTab}
      index={pos}
      work={x.company}
      current={index}
    />
  ));

  return (
    <main className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>

      <div className="jobs-center">
        <div className="btn-container">{buttons}</div>
        <Info data={job} />
      </div>
    </main>
  );
}

export default App;
