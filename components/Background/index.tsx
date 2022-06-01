import { FC, ReactNode } from "react"

type BackgroundProps = {
  children: ReactNode
}

export const Background: FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="bg-gradient-to-t from-indigo-1100 via-indigo-1000 to-indigo-1100">
      {children}
    </div>
  )
}
