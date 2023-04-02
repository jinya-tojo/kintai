import React from 'react'
import { styles } from './styles'
import { Button } from '../Button'
import { useAtom } from 'jotai'
import { colorAtom, globalUserData } from 'src/libs/atom'
import type { User } from 'src/types'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { db } from 'src/firebase/firebase'
import { formatToDay, millisecondsToMinutes } from 'src/libs/day'
import { generateRandomId } from 'src/libs/getId'

type Props = {
  user: User
  showFlag: boolean
  setIsOpenModal: any
}

export const UserModal: React.FC<Props> = ({
  user,
  showFlag,
  setIsOpenModal,
}) => {
  const [userData, setUserData] = useAtom(globalUserData)
  const [backgroundColor, setBackgroundColor] = useAtom(colorAtom)
  const onClickButton = () => {
    setIsOpenModal(false)
  }
  const onClickOnJob = () => {
    setIsOpenModal(false)
    setBackgroundColor('pink')
  }
  const onClickBreakIn = () => {
    setIsOpenModal(false)
    setBackgroundColor('orange')
  }
  const onClickStop = () => {
    setIsOpenModal(false)
    setBackgroundColor('white')
  }

  // const startWork = async () => {
  //   await setDoc(doc(db, 'users', user.uid), {
  //     uid: user.uid,
  //     name: user.name,
  //     bankName: user.bankName,
  //     bankNumber: user.bankNumber,
  //     wage: user.wage,
  //     working_data: {
  //       started_at: new Date()
  //     }
  //   })
  // }

  // const endWork = async () => {
  //   await setDoc(doc(db, 'users', user.uid), {
  //     uid: user.uid,
  //     name: user.name,
  //     bankName: user.bankName,
  //     bankNumber: user.bankNumber,
  //     wage: user.wage,
  //     working_data: {
  //       ended_at: new Date()
  //     }
  //   })
  // }

  const startWork = async () => {
    await updateDoc(doc(db, 'users', userData.uid), {
      ...userData,
      type: 'in-working',
      start_time: new Date().getTime(),
    })
    setUserData({
      ...userData,
      type: 'in-working',
      start_time: new Date().getTime(),
    })
  }

  const endWork = async () => {
    if (userData.type === 'in-working') {
      const workTime = new Date().getTime() - userData.start_time

      await updateDoc(doc(db, 'users', userData.uid), {
        ...userData,
        type: 'out-working',
        end_time: new Date().getTime(),
        working_data: arrayUnion({
          id: generateRandomId(),
          day: formatToDay(userData.start_time),
          time: millisecondsToMinutes(workTime),
        }),
      })
      setUserData({
        ...userData,
        type: 'out-working',
        end_time: new Date().getTime(),
        working_data: [
          ...(userData.working_data || []),
          {
            day: formatToDay(userData.start_time),
            time: millisecondsToMinutes(workTime),
          },
        ],
      })
    } else {
      alert('出勤してください')
    }
  }

  return (
    <>
      {showFlag ? (
        <div css={styles.overlay} onClick={onClickButton}>
          <div css={styles.container}>
            <h2>{user.name}</h2>
            <div css={styles.buttons}>
              <Button onClick={startWork} text="出勤" backgroundColor="white" />
              <Button onClick={endWork} text="退勤" backgroundColor="white" />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
