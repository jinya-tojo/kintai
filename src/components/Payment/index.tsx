import React from "react"
import { Button } from "../Button"
import { styles } from "./styles"

type PaymentProps = {
  onClick: () => void
  color:string;
}

export const Payment: React.FC<PaymentProps> = ({onClick, color}) => {
  return (
    <div css={styles.container}>
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
      <div css={styles.memberItem}>
        <p css={styles.eachItem}>東條仁哉</p>
        <p css={styles.eachItem}>1,300</p>
        <p css={styles.eachItem}>6時間</p>
        <p css={[styles.eachItem, styles.cost]}> 7,800</p>
        <div css={styles.eachItem}>
          <Button text="振込" backgroundColor={color} onClick={onClick}/>
        </div>
      </div>
    </div>
  )
}
