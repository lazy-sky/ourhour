import { atom } from 'recoil'

export const meetingNameState = atom({
  key: 'meetingNameState',
  default: '',
})

export const selectedDateRangeState = atom({
  key: 'selectedDateRangeState',
  default: new Date(),
})
