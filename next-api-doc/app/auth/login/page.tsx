'use client'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-dropdown-menu'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'

interface FormLogin{
  email:string
  password:string
}

export default function Login() {
  const {register,handleSubmit,formState : {errors}} = useForm<FormLogin>()

  const sendLogin = handleSubmit(async (data,e) => {
    e?.preventDefault();
    console.log(data);
  });

  return (
    <div className="relative w-full lg:grid h-screen lg:grid-cols-2 ">
      <div className="absolute left-6 top-3" ><ModeToggle/></div>

      <div className="flex items-center justify-center py-12">

        <div className="mx-auto grid w-[350px] gap-6">

          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Iniciar sesión</h1>
            <p className="text-balance text-muted-foreground">
            Ingrese su correo electrónico a continuación para iniciar sesión en su cuenta
            </p>
          </div>

          <form onSubmit={(e)=> sendLogin(e)} className="grid gap-4">
            <div className="grid gap-2">
              <Label>Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                {...register("email",{required:{value:true, message:"Rellena correctamente el campo"}})}
              />
            </div>
            { errors.email &&  <span className="text-xs text-red-500">{errors.email.message}</span>}

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label>Password</Label>
              </div>
              <Input placeholder="********" {...register("password",{required:{value:true,message:"Este campo es obligatorio"} })}  id="password" type="password" required />
            </div>
            { errors.password &&  <span className="text-xs text-red-500">{errors.password.message}</span>}

            <Button  type='submit' className="w-full">
              Iniciar sesión
            </Button>
          </form>

          <div className="mt-4 text-center text-sm">
            No tienes cuenta?{" "}
            <Link href="/auth/register" className="underline">
              Registrar
            </Link>
          </div>

        </div>
      </div>
      
      <div className="hidden bg-muted lg:block">
        <Image
          src="/finance.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[1] dark:grayscale"
        />
      </div>
    </div>
  )
}
