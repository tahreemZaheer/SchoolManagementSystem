import axios from "axios"
const apiURL = "http://localhost:8080/"
const adminUrl = "http://localhost:8080/admin/"
export const getCourse = async()=>{
    try{
        let response = await axios.get(apiURL+"course");
        return response.data;
    }
    catch(e){
        console.error(e);
    }
};
export const getInstructors = async()=>{
    try{
        let response = await axios.get(adminUrl+"instructor");
        let token = localStorage.getItem("token");
        if(token){
            return response.data;
        }     
    }
    catch(e){
        console.error(e);
    }
}

export const getCourseforHome = async()=>{
    try{
        let response = await axios.get(apiURL);
        return response.data;
    }
    catch(e){
        console.error(e);
    }
};
    export const addPost = async(formData)=>{
        try {
            let response =await axios.post(adminUrl+ "createcourse", formData, {
                headers:{
                    "token" : localStorage.getItem("token")
                }
            });
            return response.data;
        }
        catch(err){
            console.error(err);
        }
};