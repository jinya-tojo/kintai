import React, { useEffect, useState } from 'react'
import { UserCard } from '../UserCard'
import { UserModal } from '../UserModal'
import type { User } from 'src/types'

type Props = {
  user: User
}

export const AllCards: React.FC<Props> = ({ user }) => {
  const [backgroundColor, setBackgroundColor] = useState(user.type === 'in-working' ? "orange" : "white");

  const [isOpenModal, setIsOpenModal] = useState(false)

  const showModal = () => {
    setIsOpenModal(true)
  }
  useEffect(() => {
    if(user.type === "in-working") {
      setBackgroundColor("orange")
    } else {
      setBackgroundColor("white")
    }
  },[user.type])

  return (
    <div>
      <UserCard
        user={user}
        onClick={showModal}
        backgroundColor={backgroundColor}
        length={user.working_data ? user.working_data.length : 0}
      />
      <UserModal
        user={user}
        setIsOpenModal={setIsOpenModal}
        showFlag={isOpenModal}
      />
    </div>
  )
}
