export const baseUrl = "http://localhost:3000/api"

export const postRequest = async(url,body)=>{
  
  const response =  await fetch(url,{
   
      method: "POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body,
   });
   console.log(response);

   const data = await response.json();
   console.log(data);
   if(!response.ok){
    let message

    if(data?.message){
        message = data.message;
    }else{
        message = data;
    }
    return {error: true,message}
   }
   return data
}