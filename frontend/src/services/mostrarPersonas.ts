import type { APIError, APIResult } from "@/types/errores";
import type { Personas } from "@/types/personas";

const baseURL :string="http://localhost:8080/api/personas";

export async function mostrarPersonas (id?:number, nombre?:string, email?: string):Promise<APIResult<Personas[]>>{
    let url = `${baseURL}?`;
    if (id) url += `id=${id}&`;
    if (nombre) url += `nombre=${nombre}&`;
    if (email) url += `email=${email}`;

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