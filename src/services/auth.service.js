const apiURL = "https://localhost:8080/main/";

import axios from "axios";

export const login = ()=>{};

export const signup=async(formData)=>{

try{

let response = await axios.post(apiURL +"signup", formData)
return response.data;
}

catch(err){
    console.error(err);
}
};

