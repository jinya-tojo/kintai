import { globalUserData } from './../libs/atom'
import { useAtom } from 'jotai'
import { auth } from '../firebase/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'

type Props = {
  email: string
  password: string
}

export const useSignUp = () => {
  const [globalData, setGlobalData] = useAtom(globalUserData)
  const router = useRouter()
  const signUp = ({ email, password }: Props) =>
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        setGlobalData({
          ...globalData,
          uid: user.uid,
        })
        router.push('/signup')
      })
      .catch((error) => {
        const errorCode = error.code
        if (errorCode === 'auth/email-already-in-use') {
          alert('すでに登録済みのユーザーです。')
        }
      })
  return {
    signUp,
  }
}


