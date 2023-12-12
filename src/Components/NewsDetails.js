import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import axios from "axios";
import { Link } from "react-router-dom";

const NewsDetails = () => {
  const [details, setDetails] = useState(null);

  const API = "http://hn.algolia.com/api/v1/items/";

  const { id } = useParams();

  const newsDetailsHandler = async (objectID) => {
    try {
      const response = await axios.get(`${API}/${objectID}`);
      const data = response.data;
      setDetails(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    newsDetailsHandler(id);
  }, [id]);

  return (
    <div className="stories-div">
      <Link to="/">
        <button className="button">Go Back</button>
      </Link>
      {details === null && <BarLoader color="#035552" />}
      {details !== null && (
        <>
          <div className="bigger-card" key={details.objectID}>
            <h2>{details.title}</h2>
            <p>
              by <span>{details.author}</span> | Points -{" "}
              <span>{details.points}</span>
            </p>

            <hr />
            <p>
              <span>Comments</span>
            </p>
            <br />
            {details.children.map((ele) => {
              const event = new Date(ele.created_at);
              return (
                <li key={ele.id}>
                  Author - <span>{ele.author}</span> | Created At -{" "}
                  <span>{event.toLocaleString("en-US")}</span>
                </li>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default NewsDetails;
