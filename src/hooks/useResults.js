import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errMsg, setErr] = useState("");

  //call search api when component is first rendered
  useEffect(() => {
    searchApi("food");
  }, []);

  const searchApi = async searchInput => {
    try {
      const res = await yelp.get("/search", {
        params: {
          term: searchInput,
          limit: 50,
          location: "Harrisonburg, va"
        }
      });
      setResults(res.data.businesses);
    } catch (err) {
      setErr("Something went wrong");
    }
  };
  return [searchApi, results, errMsg];
};
