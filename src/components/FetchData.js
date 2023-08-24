import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const FetchData = ({cat}) => {
  const [Data, setData] = useState("");
  const fetchData = async () => {
    const res = await axios.get(
      cat? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&from=2023-08-06&sortBy=popularity&apiKey=85f18dd163fb4147838b67a0a92bdad1`:
      'https://newsapi.org/v2/top-headlines?country=in&from=2023-08-06&sortBy=popularity&apiKey=85f18dd163fb4147838b67a0a92bdad1'
    );
    setData(res.data.articles);
  };
  useEffect(() => {
    fetchData();
  }, [cat]);
  return (
    <div className="container my-4 ">
      <h3>
        <u>TOP HEADLINES</u>
      </h3>
      <div className="container my-3 justify-content-center align-items-center d-flex flex-column" style={{minHeight:'100vh'}}>
        {Data
          ? Data.map((item, index) => (
              <>
                <div className="container my-3 p-4" style={{ width: "600px",boxShadow:'2px 2px 10px silver ',borderRadius:'10px' }}>
                  <h5 className="my-1">{item.title}</h5>
                  <div className="justify-content-center align-items-center d-flex">
                  <img
                    src={item.urlToImage}
                    alt="Image not Found"
                    className="img-fluid"
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />
                  </div>
                  <p className="my-1">{item.content}</p>
                  <Link to={item.url} target="_blank">
                    Read more...
                  </Link>
                </div>
              </>
            ))
          : "Loading..."}
      </div>
    </div>
  );
};

export default FetchData;
