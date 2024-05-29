import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export const firestoreApi = createApi({
    baseQuery: fakeBaseQuery(),
    tagTypes: ['Likes'],
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
            }
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
            }
        })
    })
})
export const {useFetchLikesQuery} = firestoreApi;
export const {useFetchHistoryQuery} = firestoreApi
export default firestoreApi.reducer;