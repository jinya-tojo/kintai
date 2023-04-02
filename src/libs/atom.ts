import { atom } from 'jotai'

export const colorAtom = atom('white')

// export const userData = atom({
//   uid: '',
//   name: '',
//   bankName: '',
//   bankNumber: '',
//   wage:'',
// })

export const SignUpData = atom({
  uid: '',
  name: '',
  bankName: '',
  bankNumber: '',
  wage: '',
  working_data: '',
})

export const globalUserData = atom({
  uid: '',
  name: '',
  bankName: '',
  bankNumber: '',
  wage: 0,
  type: 'out-working',
  start_time: 0,
  end_time: 0,
  working_data: [
    {
      day: '',
      time: '',
    },
  ],
})
