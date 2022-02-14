import { useState, useEffect } from "react";

import { api } from "./services/api";

function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    api
      .get("/users")
      .then((response) => setUsers(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {users === undefined ? (
        ""
      ) : (
        <>
          <h1>Hello World</h1>
          <p>{users[0].name}</p>
        </>
      )}
    </>
  );
}

export default App;
