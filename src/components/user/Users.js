import React from "react";

function Users({data,remove}) {
    const removeHandler=()=>{
        remove(data.uuid);
    }
  return (
    <div className="card mb-2 my-3">
      <div className="row">
        <div className="col-1 my-3">
          <img
            src={data.image}
            alt=""
            width={50}
            height={50}
          />
        </div>
        <div className="col-3 mt-1">
          <strong>Ph: {data.phone}</strong><br/>
          <strong>Cell: {data.cell}</strong>
        </div>
       <div className="col-4 mt-3">
            <h5>{data.name}</h5>
       </div>
        <div className="col-1 mt-3">
          <button className="btn btn-danger btn-sm" onClick={removeHandler}><i className="fa fa-trash"></i></button>
        </div>
      </div>
    </div>
  );
}
export default Users;
