import React from 'react'
import useAuth from "../custom-hooks/useAuth"
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({Children}) =>{
        const {currentUser } = useAuth()
        return currentUser ? Children : <Navigate to="login" />
    };

 

export default ProtectedRoute
