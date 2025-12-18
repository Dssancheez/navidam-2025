import type { APIError, APIResult } from "@/types/errores";
import type { Personas } from "@/types/personas";

const baseURL :string="http://localhost:8080";

export async function mostrarPersonas (id?:number, nombre?:string, email?: string):Promise<APIResult<Personas[]>>{
    let url = `${baseURL}/api/personas?`;
    if(id){
        url+=`tipo=${id}&`
    }
    if(nombre){
        url+=`edadMin=${nombre}&`
    }
    if(email){
        url+=`edadMax=${email}`
    }
    const response = await fetch(url ,{
        method:'GET',
        headers:{
            'Accept':'application/json',
        },
    });
    if (response.ok){
        const personas:Personas[] =  await response.json();
        return {ok:true, data:personas};
    }
    const error:APIError = await response.json();
    return {ok:false, error: error};
}