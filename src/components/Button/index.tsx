import React from "react"
import { styles, getBackgroundColorStyle } from "./styles"

type ButtonProps = {
  onClick:() => void
  backgroundColor: string
  text:string
}

export const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  text,
  onClick,
}) => {
  return (
    <button
      css={[styles.button, getBackgroundColorStyle(backgroundColor)]}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
