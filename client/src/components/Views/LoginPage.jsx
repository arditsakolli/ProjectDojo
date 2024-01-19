import React from 'react'
import NavBar from './NavBar'
import LogInForm from '../Personal/LogInForm'
function LoginPage() {
  return (
    <div>
        {/* // display Personal acc form and nav bar */}
      <NavBar />
      <LogInForm/>

    </div>
  )
}

export default LoginPage