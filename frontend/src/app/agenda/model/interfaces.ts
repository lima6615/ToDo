export interface DefaultError {
  status: number
  statusText: string
  url: string
  ok: boolean
  name: string
  message: string
  error: Error
}

export interface ErrorContent {
  timestamp: string
  status: number
  error: string
  path: string
  message: string
}
