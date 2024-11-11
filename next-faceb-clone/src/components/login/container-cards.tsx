import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"


export const cards = (num : number) =>{

    let cardsElements = [];
    let names = ["Tomas","Maria"];

    for (let index = 0; index < num; index++) {
      cardsElements.push(
      <Card key={index+1} className="hover:shadow-2xl flex justify-center items-center flex-col">
        
        <CardContent className="h-[160px] w-[160px] p-0">
          <Image src="/avatar.png" alt="avatar" width={160} height={160} className="object-contain rounded-t-md"></Image>
        </CardContent>

        <CardFooter className="w-full p-[12px]  flex justify-center items-center">
          <p className="text-[18px] text-[#4b4f56] font-semibold">{names[index]}</p>
        </CardFooter>
      </Card>
      )
    }
    
   return cardsElements;
}

export default function ContainerCards(){
  return(
    <div className="flex justify-start items-center gap-x-5  mt-[15px] h-[226px] w-full">
      {
        cards(2)
      }  
    </div>
  )
}