const apiRequest = async(url='',optionsObj=null,errMsg=null)=>{
    
    try{
    
    
        const response =await fetch(url,optionsObj)  //read,the a optionobj a the is the a get,post, update,methord;
         if(!response.ok)throw Error("Please reload the app")
    }
    catch(err)
    {
           errMsg=err.Message
    }
    finally{
        return errMsg;
    }

}
export default apiRequest