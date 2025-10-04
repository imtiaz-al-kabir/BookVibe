import { useLoaderData } from "react-router";
import Books from "../Books/Books";
import Banner from "./Banner";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner />
      <Books data={data} />
    </div>
  );
};

export default Home;
<h1>HOME</h1>;
