import React from "react"
import { styles } from "./styles"
import { Button } from "../Button"

type Props = {
  showFlag:boolean
  setIsOpenModal:any
}

export const PayModal: React.FC<Props> = ({showFlag, setIsOpenModal}) => {
  const onClickButton = () => {
    setIsOpenModal(false)
    alert("振込が完了しました")
  }
  return (
    <>
      {showFlag ? (
        <div css={styles.overlay} onClick={onClickButton}>
          <div css={styles.container}>
            <h2>東條仁哉</h2>
            <div css={styles.description}>
              <p>2023/3/20</p>
              <p>5,000円</p>
            </div>
            <Button text="振込確定" backgroundColor="navy" onClick={onClickButton}/>
          </div>
        </div>
        
      ) : (
        <></>
      )}
    </>

  )
}