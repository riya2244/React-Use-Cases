import { useContext } from "react";
import { UserContext } from "./UserContext";

function UserInfo() {
  const { user } = useContext(UserContext);

  if (!user) return null;

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Submitted User Info:</h3>
      <pre
        style={{
          background: "#f4f4f4",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  );
}

export default UserInfo;
