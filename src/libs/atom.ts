import { atom } from 'jotai'

export const globalUserData = atom({
  uid: '',
  name: '',
  bankName: '',
  bankNumber: '',
  wage: '',
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
