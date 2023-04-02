// import { useAtom } from "jotai"
import { collection, getDocs } from 'firebase/firestore'
import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { AllCards } from 'src/components/AllCards'
import { Header } from 'src/components/Header'
import { MonthlyGoal } from 'src/components/MonthlyGoal'
import { db } from 'src/firebase/firebase'
import { globalUserData } from 'src/libs/atom'

import { styles } from 'src/styles/userStyles'
import type { User } from 'src/types'

const User: React.FC = () => {
  const router = useRouter()
  const [data, setData] = useState<User[]>()
  const [userData] = useAtom(globalUserData)

  useEffect(() => {
    if (!userData.uid) {
      router.push('/login')
    }
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'))
      const postId = querySnapshot
      const fetchedPosts = postId.docs.map((doc) => doc.data()) as User[]
      setData(fetchedPosts)
    }
    fetchData()
  }, [])

  return (
    <div css={styles.container}>
      <Header />
      <MonthlyGoal />
      <div css={styles.allUser}>
        {data?.map((user, index) => {
          return <AllCards user={user} key={index} />
        })}
      </div>
    </div>
  )
}

export default User
