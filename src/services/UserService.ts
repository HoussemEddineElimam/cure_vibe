import { queryGet } from "@/lib/functions";
import { UserModel } from "@/models/UserModel";
import bcrypt from "bcrypt"; 
import { cookies } from "next/headers";
export class UserService{
    static async findUserByPhone(phone:string):Promise<UserModel | null>{
        try {
        const queryText = 'SELECT * FROM users WHERE phone = $1';
        const result = await queryGet(queryText, [phone]);
        if(!result) return result;
     else{
       return result as UserModel;} 
    } catch (error) {
    console.error('Error fetching user by phone:', error);
    return null;}}
    static async logout(){
        cookies().set("session",'',{expires:new Date(0)});}
    static async getUserById(id:string){}
    static async getUsersByRole(role:"patient"|"doctor"){}
    static async createUser(name:string,phone:string,password:string){}
    static async updateUser(user:UserModel){}
    static async deleteUserById(id:string){}
    static async login(phone: string, password: string): Promise<{ phone: string,role:"patient" | "doctor" | "admin", fullname: string, id: string } | null> {
        try {
            const queryText = 'SELECT * FROM users WHERE phone = $1';
            const result = await queryGet(queryText, [phone]);
            if (!result) {
                return null; 
            }
            const user = result as UserModel;
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return null;
            }
            return {
                phone: user.phone,
                fullname: user.fullname,
                role:user.role,
                id: user.id,
            };
        } catch (error) {
            console.error('Error during login:', error);
            return null;
        }
    }
}