
import { CustomLink } from "components/CustomLink"
import Image from "next/image"
import { BsGithub, BsTwitter } from "react-icons/bs"

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="p-8 bg-neutral-200">
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-neutral-900 sm:text-center">© {year} <CustomLink href="/" className="hover:underline">Three Pics™</CustomLink>. All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}
