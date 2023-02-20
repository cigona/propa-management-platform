import { create } from "zustand"
import { NotificationMessage } from "../types/messages/errorMessage.type"


type messageStore = {
    messages: NotificationMessage[],
    setError: (error: NotificationMessage) => void
}

const addMessageToArray = (message: NotificationMessage, list: NotificationMessage[]): NotificationMessage[] => {
    list.push(message);
    return list
}

export const useMessageStore = create<messageStore>()((set) =>({
    messages: [],
    setError: (message) => {
        set((state) => ({messages: addMessageToArray(message, state.messages)}))
    } 
}))