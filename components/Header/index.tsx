import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { CustomLink } from "components/CustomLink"
import { ILogoProps } from "components/Logo"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useLocalStorage, useWindowSize } from "react-use"
import { FaUserAlt } from "react-icons/fa"

const Logo = dynamic<ILogoProps>(
  () => import("components/Logo").then(mod => mod.Logo),
  { ssr: false }
)

export const Header = () => {
  const [auth] = useLocalStorage('auth');
  const router = useRouter()


  return (
    <header className="bg-neutral-200 top-0 z-20 px-8 py-4">
      <div className="flex items-center justify-between mx-auto xl:container">
        <div className="flex divide-x divide-gray-500">
          <CustomLink className="pr-5" href="/">
            <Logo />
          </CustomLink>
        </div>
        <CustomLink href="/profile">
          { auth ? <FaUserAlt className="text-neutral-900" /> : "" }
        </CustomLink>
      </div>
    </header>
  )
}
