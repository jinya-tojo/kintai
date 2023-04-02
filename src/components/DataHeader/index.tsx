import Link from "next/link"
import React from "react"
import { styles } from "./styles"

export const DataHeader:React.FC = () => {
  return(
    <div css={styles.header}>
      <div css={styles.container}>
        <h2 css={styles.title}>データ入力</h2>
        <div css={styles.lists}>
          <Link href="/admin"><p css={styles.list}>人件費管理</p></Link>
          <Link href="/user"><p css={styles.list}>打刻ページ</p></Link>
        </div>
      </div>
    </div>
  )
}