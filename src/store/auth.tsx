import { create } from "zustand/react";

type AuthState = {
    token: string,
    // TO-DO add user type from API
    user: any,
    permissions: any[],
    authorized: boolean,
    setUser: (user: any) => void,
    authorize: (credentials: any) => void
}

export const authState = create<AuthState>()((set) => ({
    token: '',
    user: {},
    permissions: [],
    authorized: false,
    setUser: (user) => set((state) => ({ user: user })),
    authorize: (credentials) => set((state) => ({authorized: credentials}))
  }))