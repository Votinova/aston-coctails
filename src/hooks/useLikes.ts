import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'
import React from 'react'
import { db } from '../firebaseConfig'
import { IDrink } from '../types/typeContext'

export const useLikes = async (email: string, id: number) => {
  await updateDoc (doc(db, 'users', email), {
    likes: arrayUnion(id)
  })
}

export const useDisLikes = async (email: string, id: number) => {
  await updateDoc (doc(db, 'users', email), {
    likes: arrayRemove(id)
  })
}