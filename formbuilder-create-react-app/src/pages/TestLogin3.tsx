import React from 'react';
import { Flow } from '@descope/react-sdk';

function Authentication() {
  return (
    <div>
      <Flow
        flowId="sign-up-or-in"
        onSuccess={(e) => {
          // Handle successful authentication
          console.log('Authenticated:', e);
        }}
        onError={(error) => {
          // Handle authentication errors
          console.error('Authentication error:', error);
        }}
      />
    </div>
  );
}

export default Authentication;