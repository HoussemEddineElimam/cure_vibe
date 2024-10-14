"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui/form";
import { UserFormValidation } from "@/lib/validation";

import "react-phone-number-input/style.css";
import CustomFormField, { FormFieldType } from "./FormField";
import SubmitButton from "../SubmitButton";
import {jwtVerify, SignJWT} from "jose";
import { queryGet } from "@/lib/functions";
import { UserService } from "@/services/UserService";
import { cookies } from "next/headers";
const secretKey = "secret";
  const key = new TextEncoder().encode(secretKey)
  export async function decrypt(input:string):Promise<any>{
    const {payload} = await jwtVerify(input,key,{algorithms:["HS256"]});
    return payload;
  }
  export const encrypt = async(payload:any)=>{
    return await new SignJWT(payload).setProtectedHeader({alg:'HS256'})
    .setIssuedAt().setExpirationTime('a day from now').sign(key)
  }
  
export const PatientForm = ({isLogin}:{isLogin:boolean}) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      phone: "",
      password: "",
    },
  });
 
  const register = async(name:string,phone:string,password:string)=>{}
  const login = async(phone:string,password:string)=>{
   try{
    const result = await  UserService.login(phone,password);
    if(!result)
      return;
  else{
  const {id,phone,fullname,role} =  result;
  const expires  = new Date(Date.now()+24*3600*1000);
  const session = await encrypt({user:{id,phone,fullname,role},expires});
  cookies().set('session',session,{expires,httpOnly:true});
  }
   
   }catch(e){
    console.log(e);
   }
  }
  const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
    const {name,phone,password} = values;
    setIsLoading(true);
    if(isLogin){
      login(phone,password).then(()=>{setIsLoading(false);}).then(()=>{redirect('/')})

    }else{
      register(name,phone,password).then(()=>{setIsLoading(false);}).then(()=>{redirect('/')})
    }
    
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-4">
        <section className="mb-5 space-y-4">
          <h1 className="header">{!isLogin?"Hi there 👋":"Welcome back"}</h1>
          <p className="text-dark-700">{!isLogin?"Get started with appointments.":"Login to manage your appointments"}</p>
        </section>
    {!isLogin && 
      <CustomFormField
      fieldType={FormFieldType.INPUT}
      control={form.control}
      name="name"
      label="Full name"
      placeholder="John Doe"
      iconSrc="/assets/icons/user.svg"
      iconAlt="user"
    />
    }
        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone number"
          placeholder="(555) 123-4567"
        />
         <CustomFormField
          fieldType={FormFieldType.PASSWORD}
          control={form.control}
          name="password"
          label="Password"
          placeholder="Enter your password"
          iconSrc="/assets/icons/email.svg"
          iconAlt="password"
        />

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
};