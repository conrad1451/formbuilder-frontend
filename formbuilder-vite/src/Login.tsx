import { useCallback } from 'react'
import { Descope, useDescope, useSession, useUser } from '@descope/react-sdk'

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
        <p>Hello {user.name}</p>
        <div>My Private Component</div>
        <button onClick={handleLogout}>Logout</button>
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