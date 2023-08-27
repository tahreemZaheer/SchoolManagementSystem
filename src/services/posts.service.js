import axios from "axios"
const apiURL = "http://localhost:8080/"
export const getCourse = async()=>{
    try{
        let response = await axios.get(apiURL+"course");
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