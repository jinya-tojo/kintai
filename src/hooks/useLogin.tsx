import { SignUpData, globalUserData } from './../libs/atom'
import { useRouter } from 'next/router'
import { useAtom } from 'jotai'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from 'src/firebase/firebase'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import type { User } from 'src/types'

type Props = {
  email: string
  password: string
}

export const useLogin = () => {
  const [userData, setUserData] = useAtom(globalUserData)
  const router = useRouter()
  const login = ({ email, password }: Props) =>
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user
        const userRef = doc(db, 'users', user.uid)
        const docSnapshot = await getDoc(userRef)
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data() as User
          setUserData(userData)
        } else {
          alert('このユーザーは存在しません！')
        }
        router.push('/user')
      })
      .catch((error) => {
        const errorMessage = error.message
        alert(errorMessage)
      })
  return {
    login,
  }
}
