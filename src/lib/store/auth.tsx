import { create } from "zustand";
import { createuser } from "../api/user/createUser";
import { Profile } from "../types/user/profile.type";
import { User } from "../types/user/user.type";

type AuthState = {
    token: string,
    // TO-DO add user type from API
    user: User,
    permissions: any[],
    authorized: boolean,
    setUser: (user: User) => void,
    authorize: (credentials: any) => void
    createUser: (user: Profile) => void
}

export const useAuthStore = create<AuthState>()((set) => ({
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