import React from 'react'
import type { User } from 'src/types'
import { getBackgroundColorStyle, styles } from './styles'

type cardProps = {
  user: User
  backgroundColor: string
  onClick:() => void
  length:number
}

export const UserCard: React.FC<cardProps> = ({user, backgroundColor, onClick, length}) => {
  return(
    <>
      <div 
        onClick={onClick}
        css={[styles.container, getBackgroundColorStyle(backgroundColor)]}
      >
        <h2 css={styles.name}>{user?.name}</h2>
        <p css={styles.info}>{`出勤日数 : ${length}日`}</p>
      </div>
    </>
  )
}