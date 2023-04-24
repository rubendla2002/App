import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

function userStore (set, get) {
  
return{
    username: "",
    num_parte:"",
    setUsername: (username) => set({ username}),
    incrementNum_parte: () => set({ num_parte: get().num_parte + 1 }),


}

}


export const useUserStore = create(

  persist(
    userStore,
    {
      name: 'user'
       
    }
  )
)