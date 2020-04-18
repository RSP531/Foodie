import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [businessInfo, setBusinessInfo] = useState({});
  const [errMsg, setErr] = useState("");

  //call search api when component is first rendered
  useEffect(() => {
    getBusinessInfo();
  }, []);

  const getBusinessInfo = async id => {
    try {
      const res = await yelp.get(`/${id}`, {});
      console.log(res.data);
      setBusinessInfo(res.data);
    } catch (err) {
      setErr("Something went wrong");
    }
  };
  return [getBusinessInfo, businessInfo, errMsg];
};
