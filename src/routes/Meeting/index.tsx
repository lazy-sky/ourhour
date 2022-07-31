import { useParams } from 'react-router-dom'
import { getMeeting } from 'services/data'

const Meeting = () => {
  const { name, id } = useParams()
  getMeeting(String(id))

  return (
    <div>
      <div>모임 이름: {name}</div>
      <div>모임 ID: {id}</div>
    </div>
  )
}

export default Meeting
