import React, { useState } from "react";
import "./App.css";
import { useDataLayerValue } from "./DataLayer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [{ dataa }, dispatch] = useDataLayerValue();

  const fetchRandomUser = () => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "SET_DATA",
          dataa: data.results,
        });
      });
  };

  const a = JSON.stringify(dataa);


  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <div
            style={{ textAlign: "center", marginTop: "auto" }}
            className="App"
          >
            {dataa?.map((data) => (
              <div>
                <img
                  src={data?.picture?.medium}
                  alt=""
                  style={{ borderRadius: "50%" }}
                />
                <h4>{`Name: ${
                  data?.name?.title +
                  " " +
                  data?.name?.first +
                  " " +
                  data?.name?.last
                }`}</h4>
                <h4>{`Age : ${data?.dob?.age}`}</h4>
                <h4>{`Phone : ${data?.cell}`}</h4>
                <h4>{`Location: ${data?.location?.city}, ${data?.location?.country}`}</h4>
                <h4>{`Email :  ${data.email}`}</h4>
              </div>
            ))}
            {dataa.length === 1 ? (
              <div>
                <button onClick={fetchRandomUser}>
                  GENERATE NEW RANDOM USER!!
                </button>
                <button
                  onClick={() => {
                    dispatch({
                      type: "SET_DATA",
                      dataa: [],
                    });
                  }}
                >
                  CLEAR
                </button>
              </div>
            ) : (
              <button onClick={fetchRandomUser}>GENERATE RANDOM USER!!</button>
            )}
            <div>
              {a === "[]" ? (
                <span style={{ display: "none" }}>{a}</span>
              ) : (
                <span>{a}</span>
              )}
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
