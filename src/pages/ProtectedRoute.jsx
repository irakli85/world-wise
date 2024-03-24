import { useEffect } from 'react'
import { useAuth } from '../contexts/FakeAuthContext'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const {isAuthenticated} = useAuth()
    const navigate = useNavigate()

    useEffect( () => {
        if (!isAuthenticated) navigate('/')
    },[isAuthenticated])

  return isAuthenticated ? children : null
}

export default ProtectedRoute