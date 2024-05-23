import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const user = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log(data);
  const navigate = useNavigate();

  const { userId } = useParams();

  // const goBack = () => navigate(-1)
  const goBack = () => navigate("/");

  const fetchPost = async () => {
    try {
      let res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

      let post = await res.json();
      console.log(post);
      setData(post);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div className="user">
      <button onClick={goBack}>Back</button>
      <h1>{data?.company?.name}</h1>
      <p>{data?.street}</p>
      <p>{data?.address?.suite}</p>
      <p>{data?.address?.city}</p>
      <p>{data.email}</p>
      <p>{data.name}</p>
    </div>
  );
};

export default user;
