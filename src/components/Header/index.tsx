import Link from "next/link"
import React from "react"
import { styles } from "./styles"

export const Header: React.FC = () => {
  return (
    <div css={styles.header}>
      <div css={styles.container}>
        <h2 css={styles.main}>勤怠打刻</h2>
        <Link href="/admin"><p css={styles.management}>管理者ページ</p></Link>
      </div>
    </div>
  )
}