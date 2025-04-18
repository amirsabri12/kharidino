import { ReactNode } from "react";
import Register from "../../components/Authentication/Register/Register.tsx";

function Home(): ReactNode {
  return (
    <div>
      <h5>خانه</h5>
      <Register />
    </div>
  );
}

export default Home;
