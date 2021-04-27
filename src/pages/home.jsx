import React from "react";
import style from "./home.module.css";
import axios from "axios";
import { useForm } from "react-hook-form";

const Home = () => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      const formdata = new FormData();
      formdata.append("profile", data.profile[0]);
      formdata.append("name", data.name);
      formdata.append("email", data.email);

      const result = await axios.post(
        "http://localhost:4000/adduser",
        formdata
      );
      if (result.data) {
        alert("User Upload");
        window.location = "/";
      }
    } catch (er) {
      console.log("eeeee", er);
    }
  };
  return (
    <div className={style.container}>
      <h1>User Form</h1>
      <div className={style.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.form_group}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" ref={register({ required: true })} />
          </div>
          {errors.name && <span>Name is Required</span>}
          <div className={style.form_group}>
            <label htmlFor="name">Email</label>
            <input
              type="text"
              name="email"
              ref={register({ required: true })}
            />
          </div>
          {errors.email && <span>Email is Required</span>}
          <div className={style.form_group}>
            <label htmlFor="profile">Profile</label>
            <input
              type="file"
              name="profile"
              ref={register({ required: true })}
            />
          </div>
          {errors.profile && <span>Profile is Required</span>}
          <button>Save</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
