import React from "react";

const PostList = ({ users, deleteclick }) => {
  // let favorite = false;
  return (
    <div>
      {users.length > 0 ? (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Firstname</th>
              <th scope="col">LastName</th>
              <th scope="col">Phone</th>
              <th scope="col">Favorite</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.phone}</td>
                <td>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="checkbox"
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger me-4"
                    onclick={deleteclick(users.id)}
                  >
                    Delete
                  </button>
                  <button className="btn btn-success">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default PostList;
