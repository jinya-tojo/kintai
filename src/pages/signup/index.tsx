import React, { useState } from 'react'
import { styles } from 'src/styles/signupStyles'
import { useRouter } from 'next/router'
import { doc, setDoc } from 'firebase/firestore'
import { db } from 'src/firebase/firebase'
import { SignUpData } from 'src/libs/atom'
import { useAtom } from 'jotai'
import { Input } from 'src/components/Input'
import { Button } from 'src/components/Button'

const Signup: React.FC = () => {
  const router = useRouter()
  const [user, setUser] = useAtom(SignUpData)
  const [name, setName] = useState('')
  const [bankName, setBankName] = useState('')
  const [bankNumber, setBankNumber] = useState('')
  const [wage, setWage] = useState('')
  

  const submit = async () => {
    if (user.uid) {
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        name: name,
        bankName: bankName,
        bankNumber: bankNumber,
        wage:wage,
      })
      setUser({
        ...user,
        uid: user.uid,
        name: name,
        bankName: bankName,
        bankNumber: bankNumber,
        wage:wage,
      })
      router.push('/')
    } else {
      alert('再度ユーザー登録をしてください。')
      router.push('/login')
    }
  }
  return (
    <div>
      <h2 css={styles.header}>ユーザー登録</h2>
      <div css={styles.container}>
        <Input text='名前' value={name} onChange={(v: string) => setName(v)}/>
        <Input text='支店名' value={bankName} onChange={(v: string) => setBankName(v)}/>
        <Input text='口座番号' value={bankNumber} onChange={(v: string) => setBankNumber(v)}/>
        <Input text='時給' value={wage} onChange={(v: string) => setWage(v)}/>
        <Button backgroundColor='navy' text='メンバー追加' onClick={submit}/>
      </div>
    </div>
  )
}

export default Signup
