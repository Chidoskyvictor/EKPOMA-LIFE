export type LocalUser = {
  id: string
  email: string
}

const USER_KEY = 'ekpoma-life-user'

export function getLocalUser(): LocalUser | null {
  try {
    const raw = localStorage.getItem(USER_KEY)
    return raw ? (JSON.parse(raw) as LocalUser) : null
  } catch {
    return null
  }
}

export function signUpLocal(email: string): LocalUser {
  const user = { id: crypto.randomUUID(), email }
  localStorage.setItem(USER_KEY, JSON.stringify(user))
  return user
}

export function signInLocal(email: string): LocalUser {
  const existing = getLocalUser()
  if (existing && existing.email === email) return existing
  return signUpLocal(email)
}

export function signOutLocal(): void {
  localStorage.removeItem(USER_KEY)
}
