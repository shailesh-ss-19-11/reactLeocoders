import axios from 'axios'
const BASEURL = "https://retoolapi.dev/ozK3gN/data"
export const getUserList = (success) => {
    axios.get(BASEURL).then((resp) => {
        console.log(resp);
        if(resp.status==200){
            success(resp.data)
        }else{
            alert("error")
        }
    }).catch((err)=>{
        console.log(err)
    })
}