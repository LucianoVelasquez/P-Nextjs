import { Button } from "../ui/button";
import Image from "next/image";

export default function Login() {
  return (
      <>
      <div className="flex flex-col items-center justify-center w-full h-full">
        
        <div className=" w-[1000px] h-[496px] flex justify-center items-center mt-[92px]">

          {/* Seccion Principal */}
          <section className="flex flex-col items-start justify-start w-[604] h-full ">
            
            <div className="flex flex-col ">

              <div className="h-[58px]">
                <Image className="m-[-15px]" src="/face.svg" width={220} height={100} alt="clonfacebook"></Image>
              </div>

              <h1 className="text-4xl font-bold text-[#333] mt-2">Recent Logins</h1>
              <p className="text-[#606770] text-[15px] mt-2 font-bold">Click your picture or add an account.</p>

            </div>

            <div className="flex justify-start items-center gap-x-5  mt-[10px] h-[226px] w-full">
              <div className="h-[179px] w-[200px] text-center border">card 1</div>
              <div className="h-[179px] w-[200px] text-center border">card 2</div>
            </div>

          </section>

          {/* Seccion del Formulario */}
          <section className="flex justify-center items-center w-[396px] h-full bg-red-500">
            <h1>Seccion Form</h1>
          </section>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-center w-full mt-[132px] h-[157px] bg-[#fff] border border-opacity-10 border-t-[#1c1e21] shadow-2xl">
          <h1>footer</h1>
        </div>

      </div>
      </>
  )
}