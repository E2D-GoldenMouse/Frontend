// export async function callcore() {
//   try {
//     const res = await fetch('http://localhost:8000/app/core')
//     const data = await res.json()
//     return data.message
//   } catch (error) {
//     throw new Error(error.message)
//   }
// }

// export async function callmodele() {
//   try {
//     const res = await fetch('http://localhost:8000/app/model')
//     const data = await res.json()
//     return data.message
//   } catch (error) {
//     throw new Error(error.message)
//   }
// }
// export async function callrouter() {
//   try {
//     const res = await fetch('http://localhost:8000/app/router')
//     const data = await res.json()
//     return data.message
//   } catch (error) {
//     throw new Error(error.message)
//   }
// }

const API_BASE='http://localhost:8000/api';

async function get(path){
  try{
    const res=await fetch(`${API_BASE}${path}`);
    return await res.json();
  }catch(error){
    throw new Error(error.message);
  }
}

export const getApi=()=>get('');

 export async function post(path,payload){
  try{
    const res=await fetch(`${API_BASE}${path}`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(payload)
    });
    if (!res.ok) {
      const data=await res.json();
      throw new Error(data.detail);
    }
    return await res.json();
  }catch(error){
    throw new Error(error.message);
  }
}