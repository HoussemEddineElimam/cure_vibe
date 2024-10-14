import { cookies } from "next/headers";
import pool from "./postgress";
import { decrypt, encrypt } from "@/components/forms/PatientForm";
import { NextRequest, NextResponse } from "next/server";

export const queryAll = async (sql: string, params: (number | string | boolean)[] = []) => {
    try {
      const client = await pool.connect();
      const result = await client.query(sql, params);
      client.release();
      return result.rows; 
    } catch (err) {
      console.error("Error running queryAll", err);
      throw err;
    }
  };
  export const queryGet = async (sql: string, params: (number | string | boolean)[] = []) => {
    try {
      const client = await pool.connect();
      const result = await client.query(sql, params);
      client.release();
      return result.rows[0]; 
    } catch (err) {
      console.error("Error running queryGet", err);
      throw err;
    }
  };
  
  export const queryRun = async (sql: string, params: (number | string | boolean)[] = []) => {
    try {
      const client = await pool.connect();
      const result = await client.query(sql, params);
      client.release();
      return result.rowCount; 
    } catch (err) {
      console.error("Error running queryRun", err);
      throw err;
    }
  };
  export async function getSession(){
    const session = cookies().get("session")?.value;
    if(!session) return null;
    return await decrypt(session);
  }
  export async function updateSession(request:NextRequest){
    const session =   request.cookies.get('session')?.value;
    if(!session) return;
    const parsed = await decrypt(session);
    parsed.expires = new Date(Date.now()+10*1000*3600);
    const res = NextResponse.next();
    res.cookies.set({
      name:'session',
      value:await encrypt(parsed),
      httpOnly:true,
      expires:parsed.expires
    });
    return res;
  }