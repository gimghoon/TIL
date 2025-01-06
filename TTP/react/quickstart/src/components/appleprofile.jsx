import data from "../data/data.js";
const AppleProfile = () => {
  const appledata = data.find((item) => item.name.includes("apple"));
  return (
    <>
      <div>{appledata.name}</div>
      <div>{appledata.description}</div>
      <img src={appledata.img} alt="" />
    </>
  );
};
export default AppleProfile;
