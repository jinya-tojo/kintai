import React, { useEffect, useState } from "react"
import { styles } from "../../styles/adminStyles"
import { AdminHeader } from "src/components/AdminHeader"
import { PayModal } from "src/components/PayModal"
import type { User } from "src/types"
import { collection, getDocs } from "firebase/firestore"
import { db } from "src/firebase/firebase"
import { EachPay } from "src/components/EachPay"

const Admin: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [data, setData] = useState<User[]>()

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'))
      const postId = querySnapshot
      const fetchedPosts = postId.docs.map((doc) => doc.data()) as User[]
      setData(fetchedPosts)
    }
    fetchData()
  }, [])

  const showModal = () => {
    setIsOpenModal(true)
  }

  const date = new Date().toLocaleString('sv').replace(/\D/g, '');
  const year = date.substring(0, 4);
  const month = date.substring(4, 6);
  const day = date.substring(6, 8)
  
  return(
    <>
      <AdminHeader />
      <h2 css={styles.day}>{`${year}年${month}月${day}日`}</h2>
      <div css={styles.payContainer}>
        <div css={styles.title}>
          <h3>日給管理 / 振込</h3>
        </div>
        <div css={styles.items}>
          <p css={styles.eachItem}>名前</p>
          <p css={styles.eachItem}>時給</p>
          <p css={styles.eachItem}>労働時間</p>
          <p css={styles.eachItem}>日給</p>
          <p css={styles.eachItem}>振込</p>
        </div>
        <EachPay color="navy" onClick={showModal} />
      </div>
      <PayModal setIsOpenModal={setIsOpenModal} showFlag={isOpenModal}/>
    </>
    
  )
}

export default Admin