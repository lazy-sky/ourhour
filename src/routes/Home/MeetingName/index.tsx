import { useRecoilState } from 'recoil'

import { meetingNameState } from 'store/atom'

const MeetingName = () => {
  const [meetingName, setMeetingName] = useRecoilState(meetingNameState)

  const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setMeetingName(e.currentTarget.value)
  }

  return <input value={meetingName} placeholder='모임명을 입력해주세요.' onChange={handleNameChange} />
}

export default MeetingName
