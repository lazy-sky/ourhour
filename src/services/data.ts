import { addDoc, collection, doc, getDoc } from 'firebase/firestore'

import { myDb } from './myFirebase'

export const createMeeting = async (name: string = 'our meeting') => {
  const { id } = await addDoc(collection(myDb, 'meetings'), { name })

  return id
}

export const getMeeting = async (id: string) => {
  const targetRef = doc(myDb, 'meetings', id)
  const targetDoc = await getDoc(targetRef)

  return targetDoc.data()
}
