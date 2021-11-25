import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../Css/Home.css";

function Home() {
  const [selectVal, setSelectVal] = useState("ui");
  const [apiData, setApiData] = useState([]);
  let [pageData, setPageData] = useState(1);

  let userName = localStorage.getItem("name");

  const getSelectVal = () => {
    let selectData = document.querySelector(".selectTag").value;
    setSelectVal(selectData);
  };

  const handleLeftButton = () => {
    if (pageData === 1) {
      setPageData(1);
    } else {
      setPageData(pageData - 1);
    }
  };
  const handleRightButton = () => {
    setPageData(pageData + 1);
  };

  let URL = `https://api.adzuna.com/v1/api/jobs/gb/search/${pageData}?app_id=2b013bbc&app_key=3b8b329febe3ea2bcee254efdbfc4be3&results_per_page=20&what=${selectVal}%20developer`;

  const fetchApiData = async () => {
    let responce = await fetch(URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    let data = await responce.json();
    setApiData(data.results);
  };

  const handleJobDetails = () => {
    // setJobBtn(!jobBtn);
  };

  useEffect(() => {
    fetchApiData();
  }, [selectVal]);

  // console.log(apiData);
  // console.log(URL);
  // console.log(pageData);
  return (
    <div>
      {userName ? (
        <>
          <div className="first_Home">
            <h1>Welcome {userName} </h1>
            <p>Find below jobs with your interest </p>
          </div>

          <div className="SelectMenu_Home">
            <select
              className="selectTag"
              value={selectVal}
              onChange={getSelectVal}
            >
              <option defaultValue value="ui">
                UI
              </option>
              <option value="java">Java</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="kotlin">Kotlin</option>
              <option value="php">Php</option>
              <option value="c">C</option>
              <option value="c++">C++</option>
              <option value="ruby">Ruby</option>
              <option value="swift">Swift</option>
              <option value="scala">Scala</option>
              <option value="android">Android</option>
              <option value="ios">Ios</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="fullstack">FullStack</option>
              <option value="developer">Other</option>
            </select>
          </div>
          {apiData ? (
            <>
              {apiData.map((data) => {
                return (
                  <div key={data.id} className="jobsData_Home">
                    <div className="left_jobsHome">
                      <h2>{data.title}</h2>
                      <h5>{data.company.display_name}</h5>
                    </div>
                    <div className="right_jobsHome">
                      <button
                        onClick={handleJobDetails}
                        className="jobs_button"
                      >
                        <NavLink to={`/singleJob/${data.title}/${data.id}`}>
                          View
                        </NavLink>
                      </button>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            "Loading..."
          )}
          <div className="pageDetail_Home">
            <button
              style={{
                padding: "5px 10px",
                cursor: "pointer",
                letterSpacing: "1px",
              }}
              onClick={handleLeftButton}
              disabled={pageData === 1 ? true : false}
            >
              Preveious
            </button>
            <button
              style={{
                padding: "5px 10px",
                cursor: "pointer",
                letterSpacing: "1px",
              }}
              onClick={handleRightButton}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div className="signUpHome">
          <h1>Get Access of all Features with doing signup</h1>
          <NavLink to="/signup">signup </NavLink>
        </div>
      )}
    </div>
  );
}

export default Home;
