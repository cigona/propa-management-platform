export type NotificationMessage = {
    message: string,
    action?: () => void,
    callToAction?: () => void
    isError: boolean
}