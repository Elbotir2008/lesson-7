import React from "react";

const AddPost = ({ users, handleChange, handleSubmit, handledelete }) => {
  const { firstname, lastname, phone } = users;

  return (
    <div>
      <form className="form-control" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userId" className="form-label">
            Firstname
          </label>
          <input
            type="text"
            className="form-control"
            name="firstname"
            id="userId"
            value={firstname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="title" className="form-label">
            Lastname
          </label>
          <input
            type="text"
            className="form-control"
            name="lastname"
            id="lastname"
            value={lastname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="body" className="form-label">
            Phone
          </label>
          <input
            type="number"
            className="form-control"
            name="phone"
            id="body"
            value={phone}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPost;
