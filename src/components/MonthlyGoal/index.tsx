import React from "react"
import { styles } from "./styles"

export const MonthlyGoal: React.FC = () => {
  return(
    <div css={styles.container}>
      <p css={styles.title}>3月目標</p>
      <p css={styles.goal}>分離礼を徹底して、「また来るね」をもらう！！</p>
    </div>
  )
}