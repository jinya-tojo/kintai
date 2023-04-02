export type User = {
  uid: string
  name: string
  bankName: string
  bankNumber: string
  wage: string
  type: 'in-working' | 'out-working'
  start_time: number
  end_time: number
  working_data: {
    day: string
    time: string
  }[]
}
