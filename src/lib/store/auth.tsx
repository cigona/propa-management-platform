import { AxiosError } from "axios";
import { create } from "zustand";
import { createuser } from "../api/user/createUser";
import { User } from "../types/user/user.type";
import { useMessageStore } from "./errors";
import { logger } from "./middleware/logger";

type AuthState = {
    token: string,
    // TO-DO add user type from API
    user: User,
    permissions: any[],
    authorized: boolean,
    setUser: (user: User) => void,
    authorize: (credentials: any) => void
    createUser: (user: User) => void
}

export const useAuthStore = create<AuthState>()(
    logger(
        (set) => ({
            token: '',
            user: {} as User,
            permissions: [],
            authorized: false,
            setUser: (user) => set((state) => ({ user: user })),
            authorize: (credentials) => set((state) => ({ authorized: credentials })),
            createUser: async (u) => {
                const data = await createuser(u)
                if(data.name === 'AxiosError' ) {
                    useMessageStore.getState().setError({message: data.response.data || 'An error occured', isError: true})
                } else {
                    set((state) => ({user: data}))
                }
            }
        })
    )
)