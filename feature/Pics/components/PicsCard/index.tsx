import Image from "next/image"

interface IPicsCardProps {
  imageURI: string,
  userName: string,
  description: string
}

export const PicsCard = ({ imageURI, userName, description }: IPicsCardProps) => {
  return (
    <div className="border border-neutral-400 max-w-[240px] rounded-sm">
      <div className="relative ">
        <Image src={imageURI}
          width={240}
          height={240}
          objectFit="cover"
          alt={description}
          />
      </div>
      <div className="p-2 flex flex-col gap-4">
        <span className="font-bold">@{userName}</span>
        <p>{description}</p>
      </div>
    </div>
  )
}