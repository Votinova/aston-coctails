import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { getAuth } from "firebase/auth";

export const firestoreApi = createApi({
    baseQuery: fakeBaseQuery(),
    tagTypes: ['Likes', 'History'],
    endpoints: (builder) => ({
        fetchLikes: builder.query ({
            async queryFn (email: string) {
                try {
                    const docRef = doc(db, 'users', email);
                    const snapshot = await getDoc(docRef);
                    const data  = snapshot.data();
                    return {data: data?.likes}
                    
                } catch (error) {
                    return {error}
                }
            },
            providesTags: ['Likes']
        }),
        fetchHistory: builder.query ({
            async queryFn (email: string) {
                try {
                    const docRef = doc(db, 'users', email);
                    const snapshot = await getDoc(docRef);
                    const data = snapshot.data();
                    return {data: data?.history}
                } catch (error) {
                    return {error}
                }
            },
            providesTags: ['History']
        })
    })
})
export const {useFetchLikesQuery} = firestoreApi;
export const {useFetchHistoryQuery} = firestoreApi;

export default firestoreApi.reducer;