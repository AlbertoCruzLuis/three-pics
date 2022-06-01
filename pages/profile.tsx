import { ProfileSection } from "feature/Profile/content/ProfileSection";
import { NextPage } from "next"
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useLocalStorage } from "react-use";

const Profile: NextPage = () => {
  const [auth] = useLocalStorage('auth');
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      if (!auth) {
        router.push("/login")
      }
    }, 1000)
  }, [auth])

  return (
    <div>
      <ProfileSection />
    </div>
  )
}

export default Profile