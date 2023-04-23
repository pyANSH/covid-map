import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  // what is the use of this component ? - It is used to redirect the user to the contact page when the user visits the home page.
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate("/Dashboard");
  }, []);
  return <></>;
}

export default Home;
