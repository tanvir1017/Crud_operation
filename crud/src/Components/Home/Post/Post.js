import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./Post.css";

const Post = () => {
  const { reset, register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/services", data).then((res) => {
      if (res.data.insertedId) {
        alert("Successfully posted");
        reset();
      }
    });
  };
  return (
    <div className="App" id="app">
      <h2>Please Add A service is post route</h2>
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="name of service" {...register("name")} />
        <textarea
          placeholder="Description"
          rows="7"
          {...register("description")}
        />

        <input placeholder="img url" {...register("img")} />
        <input placeholder="Price" type="number" {...register("price")} />

        {/* <input type="number" {...register("price")} /> */}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Post;
