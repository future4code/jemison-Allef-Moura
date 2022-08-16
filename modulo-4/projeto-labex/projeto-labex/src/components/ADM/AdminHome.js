import React, {useContext} from 'react'
import { AuthContext } from '../../context/auth'

function AdminHome() {
  const {logout} =  useContext(AuthContext)
  const handleLogout = () => {
    logout();
  }
  return (
    <>
      <h1>HOME ADM</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default AdminHome