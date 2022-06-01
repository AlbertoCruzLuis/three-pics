import { useProfile } from "feature/Profile/hooks/useProfile"

export interface IPics {
  id: number,
  imageURI: string,
  userName: string,
  description: string
}

export const ProfileSection = () => {
  const { profile } = useProfile()
  return (
    <section className="flex flex-col gap-4">
      <span>{profile?.userName}</span>
    </section>
  )
}