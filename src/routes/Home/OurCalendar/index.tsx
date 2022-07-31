import { useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import Calendar from 'react-calendar'

import { meetingNameState, selectedDateRangeState } from 'store/atom'
import { createMeeting } from 'services/data'

import 'react-calendar/dist/Calendar.css'

const OurCalendar = () => {
  const navigate = useNavigate()
  const [temporaryRange, setTemporaryRange] = useState(new Date())
  const setSelectedDateRange = useSetRecoilState(selectedDateRangeState)
  const meetingName = useRecoilValue(meetingNameState)

  const handleDateRangeSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setSelectedDateRange(temporaryRange)
    const meetingId = await createMeeting(meetingName)
    navigate(`/meeting/${meetingName}/${meetingId}`)
  }

  return (
    <div>
      <form onSubmit={handleDateRangeSubmit}>
        <Calendar onChange={setTemporaryRange} value={temporaryRange} selectRange />
        <button type='submit'>생성</button>
      </form>
    </div>
  )
}

export default OurCalendar
