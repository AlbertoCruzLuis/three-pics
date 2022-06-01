import { PicsCard } from "feature/Pics/components/PicsCard"
import { usePics } from "feature/Pics/hooks/usePics"

export interface IPics {
  id: number,
  imageURI: string,
  userName: string,
  description: string
}

export const PicsSection = () => {
  const { getPics } = usePics()
  return (
    <section className="grid grid-cols-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
      { getPics && getPics.map((pic: IPics) => 
        <PicsCard 
          key={pic.id}
          imageURI={pic.imageURI}
          userName={pic.userName}
          description={pic.description} />
      )}
    </section>
  )
}