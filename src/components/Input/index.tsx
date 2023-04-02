import React from "react"
import { styles } from "./styles"

type InputProps = {
  text:string
  value:string
  type?: string
  onChange: (v: string) => void
}

export const Input:React.FC<InputProps> = ({text, value, type = "text", onChange}) => {
  return(
    <div css={styles.container}>
      <div css={styles.nameBox}>
        <p css={styles.name}>{text}</p>
      </div>
      <input 
        css={styles.input}
        type={type}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(e.target.value)
        }}
      />
    </div>
    
  )
}