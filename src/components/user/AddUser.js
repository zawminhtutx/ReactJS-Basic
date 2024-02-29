import React, { useState } from "react";
function AddUser(props) {
  const [image,setImage]=useState("");
  const [name,setName]=useState("");
  const [phone,setPhone]=useState("");
  const [cell,setCell]=useState("");
  const [uuid,setUuid]=useState("");
  const imageChangeHandler =(event)=>{
    setImage(event.target.value);
  }
  const nameCangeHandler =(event)=>{
    setName(event.target.value);
  }
  const phoneChangeHandler=(event)=>{
    setPhone(event.target.value);
  }
  const cellChangeHandler=(event)=>{
    setCell(event.target.value);
  }
  const uuidChangeHandler=(event)=>{
    setUuid(event.target.value);
  }
  const submitHandler=(event)=>{
    event.preventDefault();
    let users={
      name:name,
      image:image,
      phone:phone,
      cell:cell,
      uuid:uuid,
    };
    props.addUser(users);
  }
  return (
    <div className="card bg-info">
      <form className="m-3" onSubmit={submitHandler}>
      <div class="mb-3">
          <label htmlFor="uuid" class="form-label" >
            Uuid
          </label>
          <input
            type="text"
            className="form-control"
            id="uuid"
            onChange={uuidChangeHandler}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="name" class="form-label">
            Name
          </label>
          <input type="text" className="form-control" placeholder="Name" onChange={nameCangeHandler}/>
        </div>
        <div class="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            class="form-control"
            id="phone"
            onChange={phoneChangeHandler}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="cell" className="form-label" >
            Cell
          </label>
          <input
            type="tel"
            class="form-control"
            id="cell"
            onChange={cellChangeHandler}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="text"
            class="form-control"
            id="image"
            onChange={imageChangeHandler}
          />
        </div>
        <button className="btn btn-primary btn-sm float-end" type="submit">Create</button>
      </form>
    </div>
  );
}
export default AddUser;
