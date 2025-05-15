import React from "react";
import { Flow } from "@descope/react-sdk";

function Authentication() {
  return (
    <div>
      <Flow
        flowId="sign-up-or-in"
        onSuccess={(result: Error) => {
          // Handle successful authentication
          console.log("Authenticated:", result);
        }}
        onError={(error: Error) => {
          // Handle authentication errors
          console.error("Authentication error:", error);
        }}
      />
    </div>
  );
}

export default Authentication;
