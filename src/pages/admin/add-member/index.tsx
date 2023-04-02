import React, { useState } from "react"
import { addDoc, setDoc, doc,  collection } from 'firebase/firestore'
import { styles } from "src/styles/addMemberStyles"
import { DataHeader } from "src/components/DataHeader"
import { DataMenu } from "src/components/DataMenu"
import { Input } from "src/components/Input"
import { Button } from "src/components/Button"
import { db } from "src/firebase/firebase"
import { useAtom } from "jotai"
import { userData } from "src/libs/atom"

const Member:React.FC = () => {
  const [user, setUser] = useAtom(userData)
  const [name, setName] = useState('')
  const [bankName, setBankName] = useState('')
  const [bankNumber, setBankNumber] = useState('')
  const [wage, setWage] = useState('')

  const submit = async () => {
    const docRef = await addDoc(collection(db, 'users'), {
      name: name,
      bankName: bankName,
      bankNumber: bankNumber,
      wage: wage,
    });
  
    await setDoc(doc(db, 'users', docRef.id), {
      uid: docRef.id,
      name: name,
      bankName: bankName,
      bankNumber: bankNumber,
      wage: wage,
    }, { merge: true });
  
    setUser({
      uid: docRef.id,
      name: name,
      bankName: bankName,
      bankNumber: bankNumber,
      wage: wage,
    });      
  
    alert("メンバーを追加しました");
    setName("");
    setBankName("");
    setBankNumber("");
    setWage("");
  };
  
    
  return(
    <div>
      <DataHeader />
      <div css={styles.container}>
        <DataMenu />
        <div>
          <p css={styles.title}>メンバー追加</p>
          <div css={styles.inputs}>
            <Input 
              text="名前"
              value={name}
              onChange={(v: string) => setName(v)}
            />
            <Input 
              text="支店名"
              value={bankName}
              onChange={(v: string) => setBankName(v)}
            />
            <Input 
              text="口座番号"
              value={bankNumber}
              onChange={(v: string) => setBankNumber(v)}
            />
            <Input 
              text="時給"
              value={wage}
              onChange={(v: string) => setWage(v)}
            />
            <Button backgroundColor="navy" text="追加" onClick={submit}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Member