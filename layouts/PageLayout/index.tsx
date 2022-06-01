import { Background } from "components/Background"
import dynamic from "next/dynamic"
import { FC, ReactNode } from "react"

const Header = dynamic<any>(
  () => import("components/Header").then(mod => mod.Header),
  { ssr: false }
)

const Footer = dynamic<any>(
  () => import("components/Footer").then(mod => mod.Footer),
  { ssr: false }
)

export interface IPageLayoutProps {
  children: ReactNode
}

export const PageLayoutComponent: FC<IPageLayoutProps> = ({ children }) => {
  return (
    <Background>
      <Header />
      <div className="flex flex-col min-h-screen xl:container xl:mx-auto">
        <main className="flex flex-col grow p-8 xl:px-0">
          {children}
        </main>
      </div>
      <div className="p-8"></div>
      <Footer />
    </Background>
  )
}