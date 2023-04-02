import React from "react"
import { Button } from "../Button"
import { Input } from "../Input"
import { styles } from "../AddMember/styles"

export const AddMonthPayload: React.FC = () => {
  return(
    <div css={styles.container}>
      <Input text="今月の人件費"/>
      <Input text="今月の目標" />
      <Button text="登録" backgroundColor="navy" onClick={() => alert("追加したよん")}/>
    </div>
  )
}