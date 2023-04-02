import React, { useState } from "react"
import { styles } from "src/styles/loginStyles"
import { Button } from "src/components/Button"
import { Input } from "src/components/Input"
import { useLogin } from "src/hooks/useLogin"
import { useSignUp } from 'src/hooks/useSignUp'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signUp } = useSignUp()
  const { login } = useLogin()

  return(
    <>
      <h2 css={styles.header}>ユーザー登録</h2>
      <div css={styles.container}>
        <Input text="メールアドレス" value={email} onChange={(v: string) => setEmail(v)}/>
        <Input text="パスワード" value={password} onChange={(v: string) => setPassword(v)} type="password" />
        <div  css={{marginBottom:"20px"}}>
          <Button backgroundColor="white" text="ログイン" onClick={() => login({ email, password })} />
        </div>
        <div>
          <Button backgroundColor="navy" text="新規登録" onClick={() => signUp({ email, password })}/>
        </div>
      </div>
    </>
  )
}

export default Login