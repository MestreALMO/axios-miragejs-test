import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState();
  const api = axios.create({ baseURL: "/api" });

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
