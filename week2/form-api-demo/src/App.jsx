import { useState } from "react";
import { UserContext } from "./UserContext";
import Form from "./Form/Form";
import UserInfo from "./UserInfo";

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <Form />
        <UserInfo />
      </div>
    </UserContext.Provider>
  );
}

export default App;
