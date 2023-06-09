import axios from 'axios'
const BASEURL = "https://retoolapi.dev/ozK3gN/data"
export const getUserList = (success) => {
    axios.get(BASEURL).then((resp) => {
        console.log(resp);
        if (resp.status == 200) {
            success(resp.data)
        } else {
            alert("error")
        }
    }).catch((err) => {
        console.log(err)
    })
}


export const AddUser = (data, success) => {
    axios.post(BASEURL, data).then((resp) => {
        if (resp.status == 201) {
            success(resp)
        }
    });
}

export const EditUser = (id,data, success) => {
    axios.put(BASEURL+"/"+id, data).then((resp) => {
        if (resp.status == 200) {
            success(resp)
        }
    });
}

export const deleteuser = (id, success) => {
    axios.delete(BASEURL + "/" + id).then((resp) => {
        if (resp.status == 200) {
            success(resp)
        }
    });
}

export const getuserDetails=(id,success)=>{
    axios.get(`${BASEURL}/${id}`).then((resp)=>{
        console.log(resp);
        if(resp.status==200){
            success(resp.data);
        }
    })
}

export const getPaginateData=(pagenumber,limit,success)=>{
    axios.get(`${BASEURL}?_page=${pagenumber}&_limit=${limit}`).then((resp)=>{
        console.log(resp);
        if(resp.status==200){
            success(resp.data);
        }
    })
}

