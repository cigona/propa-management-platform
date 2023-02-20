import { create } from "zustand"
import { NotificationMessage } from "../types/messages/errorMessage.type"
import { logger } from "./middleware/logger"


type messageStore = {
    messages: NotificationMessage[],
    setError: (error: NotificationMessage) => void
}

const addMessageToArray = (message: NotificationMessage, list: NotificationMessage[]): NotificationMessage[] => {
    list.push(message);
    return list
}

export const useMessageStore = create<messageStore>()(
    logger((set) => ({
        messages: [],
        setError: (message) => {
            set((state) => ({ messages: addMessageToArray(message, state.messages) }))
        }
    }))
)
