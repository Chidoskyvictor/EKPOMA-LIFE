import type { GameState } from '../types/game'

const KEY = 'ekpoma-life-game-state'

export function loadGameState(): GameState | null {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return null
    return JSON.parse(raw) as GameState
  } catch {
    return null
  }
}

export function saveGameState(state: GameState): void {
  localStorage.setItem(KEY, JSON.stringify(state))
}

export function clearGameState(): void {
  localStorage.removeItem(KEY)
}
