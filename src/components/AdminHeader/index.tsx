import Link from "next/link"
import React from "react"
import { styles } from "./styles"

export const AdminHeader:React.FC = () => {
  return(
    <div css={styles.header}>
      <div css={styles.container}>
        <h2 css={styles.title}>人件費管理</h2>
        <div css={styles.lists}>
          <Link href="/admin/add-member"><p css={styles.list}>データ入力</p></Link>
          <Link href="/user"><p css={styles.list}>打刻ページ</p></Link>
        </div>
      </div>
    </div>
  )
}