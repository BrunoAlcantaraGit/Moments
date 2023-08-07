export interface Moment {
    id?:number;
    title: string;
    description: string;
    image: string; //link
    created_at?: string; // data da criação no momento da inserção de dados 
    updated_at?: string;// data da atualização 
    comments?: [{text:string, username:string}]; // a variável comments recebe uma array, de vários comentários ,  que recebe um text e um username '' ambos strings''
    
}