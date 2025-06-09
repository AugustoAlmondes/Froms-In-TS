import { type User } from "../types/User";

type Error ={
    [key: string]: string
}

export const validate = (data: User) =>{
    const errors: Error = {}

    if(!data.name){
        errors['name'] = 'O campo nome é obrigatório';
    }

    if(!data.email){
        errors['email'] = 'O campo email é obrigatório';
    }

    if(!data.agree){
        errors['agree'] = 'O campo aceite é obrigatório';
    }

    return errors;
}