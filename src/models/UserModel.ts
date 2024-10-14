export interface UserModel{
    id: string;
    fullname:string;
    image?:string;
    phone:string;
    password:string;
    createdAt:Date;
    role:"patient" | "doctor" | "admin";
    doctorType?:string;
    rating?:number;
    birthDate?:Date;
}