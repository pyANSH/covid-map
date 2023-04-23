import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate("/contact");
  }, []);
  return <></>;
}

export default Home;
