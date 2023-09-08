const apiURL = "https://server-school-management-system.vercel.app/";

import axios from "axios";
export const login = async(formData) => {
    try{
        let response = await axios.post(apiURL + "login",formData);
        if(response.data){
            return response.data;
        }
        else{
            alert("wrong email or password")
        }
        
    }
    catch(err){
        console.error(err);
    }
 };

export const signup = async (formData) => {
    try {

        let response = await axios.post(apiURL + "signup", formData)
        return response.data;
    }

    catch (err) {
        console.error(err);
    }
};

