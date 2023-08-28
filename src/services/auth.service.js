const apiURL = "https://localhost:8080/";

import axios from "axios";


export const login = async(formData) => {
    try{
        let response = await axios.post(apiURL + "login",formData);
        return response.data;
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

