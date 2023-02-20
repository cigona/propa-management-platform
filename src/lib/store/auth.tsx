import { create } from "zustand/react";
import { createuser } from "../api/user/createUser";
import { User } from "../types/user/user.type";

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

export const authState = create<AuthState>()((set) => ({
    token: '',
    user: {} as User,
    permissions: [],
    authorized: false,
    setUser: (user) => set((state) => ({ user: user })),
    authorize: (credentials) => set((state) => ({ authorized: credentials })),
    createUser: async (u) => {
        const userData = await createuser(u)
        set(() => ({ user: userData }))
    }
}))