import { useState } from "react";

import AppleProfile from "./appleprofile.jsx";
import Button from "./button";
import data from "../data/data.js";
const Home = () => {
  const [isChecked, setIsChecked] = useState(true);

  const datalist = data.map((dataI, i) => (
    <li key={i}>
      <div>{dataI.name}</div>
      <div>{dataI.description}</div>
      <img src={dataI.img} alt="" />
    </li>
  ));
  console.log(data, datalist);
  return (
    <>
      <div>{isChecked && datalist}</div>
      {!isChecked && <AppleProfile />}

      <Button setIsChecked={setIsChecked} />
    </>
  );
};
export default Home;
