import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL:'https://ofline-database-server.vercel.app',
    withCredentials:true

})

const useAxiosSecure = () => {
    const {loggedOut}= useContext(AuthContext)
    const navigate = useNavigate();
   useEffect(()=>{
    axiosSecure.interceptors.response.use(res=>{
        return res;
    },
    error=>{
        console.log('error tracked', error.response)
        if (error.response.status ===401 || error.response.status ===403 ) {
            console.log('logged out')
            loggedOut()
            .then(()=>{
                navigate('/login')

            })
            .catch(error=> console.log(error))
            
        }
    });
   },[])
   return axiosSecure;
};

export default useAxiosSecure;