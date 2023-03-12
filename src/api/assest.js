import request from "../util/request";
console.log('request',request)
const getAssestList = (data)=>{
    return request.post('/assets',data)
}
export default {
    getAssestList:getAssestList
}