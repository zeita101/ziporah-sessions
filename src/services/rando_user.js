import axios from "axios";

const baseUrl ="https://api.randomuser.me/"
export const fetchUser= async ()=>{
const data= await  axios.get(baseUrl)
return  data.data.results
 }
