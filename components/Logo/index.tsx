import Image from "next/image"
import { FC, memo } from "react"

export interface ILogoProps {
  size?: string
}

const LogoComponent: FC<ILogoProps> = ({ size = "text-lg" }) => {
  return (
    <div className={`flex items-center ${size} gap-1 font-poppins tracking-wide`}>
      <span>Three Pics</span>
    </div>
  )
}

export const Logo = memo(LogoComponent)
