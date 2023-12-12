import { useContext } from "react";
import { Context } from "../context";
import { Link } from "react-router-dom";
import { BarLoader } from "react-spinners";

const News = () => {
  const { hits, loading } = useContext(Context);

  if (loading === true)
    return (
      <div className="stories-div">
        <br />
        <BarLoader color="#035552" />
      </div>
    );

  return (
    <div className="stories-div">
      {hits.map((ele) => {
        return (
          <Link to={`/news/${ele.objectID}`} style={{textDecoration:"none"}}>
            <div className="card" key={ele.objectID}>
              <h2>{ele.title}</h2>
              <p>
                - <span>{ele.author}</span>
              </p>
              <hr />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default News;
