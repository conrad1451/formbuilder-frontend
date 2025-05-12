import { useCallback } from "react";
import { Descope, useDescope, useSession, useUser } from "@descope/react-sdk";
import FormToNotion from "./pages/MyForm";
// import FormToMongo from "./pages/MyFormMongo";
// Sources:
// [1]: https://dev.to/jps27cse/react-router-dom-v6-boilerplate-2ce1

interface DescopeUser {
  name?: string; // Assuming 'name' is a property in the user object. Adjust as needed.
  // [key: string]: any; // To allow other potential properties
}

interface Option1Props {
  theUser: DescopeUser;
  theHandleLogout: () => void;
}

// const Option1 = (props: { theUser; theHandleLogout }) => {
const Option1 = (props: Option1Props) => {
  return (
    <>
      {/* <p>Hello {props.theUser.name}</p> */}
      <p>Hello {props.theUser?.name}</p>{" "}
      {/* Using optional chaining in case name is not always present */}
      <div>My Private Component</div>
      <FormToNotion />
      {/* <FormToMongo /> */}
      <button onClick={props.theHandleLogout}>Logout</button>
    </>
  );
};

// import { getSessionToken } from '@descope/react-sdk'
// const sessionToken = getSessionToken()

const Login = () => {
  const { isAuthenticated, isSessionLoading } = useSession();
  const { user, isUserLoading } = useUser();
  const { logout } = useDescope();

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  if (isSessionLoading || isUserLoading) {
    return <p>Loading...</p>;
  }

  if (isAuthenticated) {
    return (
      <>
        <Option1 theUser={user} theHandleLogout={handleLogout} />
      </>
    );
  }

  return (
    <div>
      <h1>Sign In</h1>
      <Descope
        flowId="sign-up-or-in"
        onSuccess={(e) => console.log(e.detail.user)}
        onError={() => console.log("Could not log in!")}
      />
    </div>
  );
};

export default Login;
