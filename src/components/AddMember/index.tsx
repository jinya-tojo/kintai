import React from "react"
import { styles } from "./styles"
import { Button } from "../Button"
import { Input } from "../Input"

export const AddMember: React.FC = () => {
  return(
    <div css={styles.container}>
      <Input text="名前"/>
      <Input text="支店名"/>
      <Input text="口座番号"/>
      <Input text="時給"/>
      <Button backgroundColor="navy" text="追加" onClick={() => alert("追加したよん")}/>
    </div>
  )
}