import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSession, useUser } from "@descope/react-sdk";

export default function Secure() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});
  const { isAuthenticated } = useSession();
  const { user } = useUser();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }

    if (user) {
      setUserDetails(user);
    }
  }, [navigate]);

  return (
    <>
      {userDetails ? (
        <div className="user-profile">
          <div className="card">
            <img
              src={userDetails.picture}
              alt={`${userDetails.given_name}'s profile`}
              className="profile-pic"
            />
            <p>Welcome</p>
            <h1 className="name">{userDetails.name}</h1>
            <p className="email">{userDetails.email}</p>
          </div>
        </div>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </>
  );
}