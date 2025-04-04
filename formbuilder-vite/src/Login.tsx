import { useCallback } from 'react'
import { Descope, useDescope, useSession, useUser } from '@descope/react-sdk'

// Sources:
// [1]: https://dev.to/jps27cse/react-router-dom-v6-boilerplate-2ce1


const Option1 = (props:{theUser, theHandleLogout}) => {
  return (
    <>
        <p>Hello {props.theUser.name}</p>
        <div>My Private Component</div>
        <button onClick={props.theHandleLogout}>Logout</button>
    </>
  )
}

// import { getSessionToken } from '@descope/react-sdk'
// const sessionToken = getSessionToken()

const Login = () => {
  const { isAuthenticated, isSessionLoading } = useSession()
  const { user, isUserLoading } = useUser()
  const { logout } = useDescope()

  const handleLogout = useCallback(() => {
    logout()
  }, [logout])

  if (isSessionLoading || isUserLoading) {
    return <p>Loading...</p>
  }

  if (isAuthenticated) {
    return (
      <>
      <Option1 theUser={user} theHandleLogout={handleLogout}/>
      </>
    )
  }

  return (
    <div>
      <h1>Sign In</h1>
      <Descope
        flowId="sign-up-or-in"
        onSuccess={(e) => console.log(e.detail.user)}
        onError={(e) => console.log('Could not log in!')}
      />
    </div>
  )
}

export default Login