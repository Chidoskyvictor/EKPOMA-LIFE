import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { createInitialState, earnFromErrand, moveTo, purchasePhone } from '../game/rules'
import { loadGameState, saveGameState } from '../game/persistence'
import { getLocalUser } from '../services/auth'
import type { GameState } from '../types/game'

type GameContextValue = {
  state: GameState | null
  startCharacter: (name: string) => void
  buyPhone: () => void
  travelTo: (locationId: string) => void
  runErrand: () => void
}

const GameContext = createContext<GameContextValue | null>(null)

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<GameState | null>(() => loadGameState())

  useEffect(() => {
    if (state) saveGameState(state)
  }, [state])

  const value = useMemo<GameContextValue>(
    () => ({
      state,
      startCharacter: (name) => {
        const user = getLocalUser()
        setState(createInitialState(user?.id ?? crypto.randomUUID(), name))
      },
      buyPhone: () => setState((current) => (current ? purchasePhone(current) : current)),
      travelTo: (locationId) => setState((current) => (current ? moveTo(current, locationId) : current)),
      runErrand: () => setState((current) => (current ? earnFromErrand(current) : current)),
    }),
    [state],
  )

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

export function useGame() {
  const context = useContext(GameContext)
  if (!context) throw new Error('useGame must be used inside GameProvider')
  return context
}
