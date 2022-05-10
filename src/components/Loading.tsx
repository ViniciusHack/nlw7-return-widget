import { CircleNotch } from "phosphor-react";

interface LoadingProps {
  large?: boolean;
}

export function Loading({large = false}: LoadingProps) {
  return (
    <>
      {large ? 
        <div className="w-24 h-24 flex items-center justify-center overflow-hidden ">
          <CircleNotch weight="bold" className="w-20 h-20 animate-spin"/>
        </div>
        :
        <div className="w-6 h-6 flex items-center justify-center overflow-hidden ">
          <CircleNotch weight="bold" className="w-4 h-4 animate-spin"/>
        </div>
      }
    </>
  )
}