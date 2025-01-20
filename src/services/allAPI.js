import commonAPI from './commonAPI'
import SERVERURL from './SERVER_URL'

export const saveBlogAPI = async (blogDetails) => {
    return await commonAPI(`POST`,`${SERVERURL}/blogs`,blogDetails)
}
export const getAllBlogssAPI = async () =>{
    return await commonAPI(`GET`,`${SERVERURL}/blogs`,"")
}

export const removeBlogAPI = async(id) =>{
    return await commonAPI('DELETE',`${SERVERURL}/blogs/${id}`,{})
}

export const editFormAPI =async (blogDetails)=>{
    return await commonAPI(`PUT`,`${SERVERURL}/blogs/${blogDetails.id}`,blogDetails)
}
