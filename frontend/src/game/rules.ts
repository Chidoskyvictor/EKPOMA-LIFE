import type { GameState, TimePeriod } from '../types/game'

export const STARTER_CASH = 5000
export const PHONE_PRICE = 2500
export const START_LOCATION_ID = 'aau_campus'
export const PERIODS: TimePeriod[] = ['morning', 'afternoon', 'evening', 'night']

export function createInitialState(playerId: string, characterName: string): GameState {
  return {
    playerId,
    characterName,
    cash: STARTER_CASH,
    energy: 100,
    health: 100,
    reputation: 0,
    academicStatus: 50,
    locationId: START_LOCATION_ID,
    day: 1,
    period: 'morning',
    tutorialComplete: false,
    hasPhone: false,
  }
}

export function nextPeriod(period: TimePeriod, day: number): { period: TimePeriod; day: number } {
  const index = PERIODS.indexOf(period)
  if (index >= PERIODS.length - 1) {
    return { period: 'morning', day: day + 1 }
  }
  return { period: PERIODS[index + 1]!, day }
}

export function canAffordPhone(cash: number): boolean {
  return cash >= PHONE_PRICE
}

export function purchasePhone(state: GameState): GameState {
  if (state.hasPhone) return state
  if (!canAffordPhone(state.cash)) return state
  return {
    ...state,
    cash: state.cash - PHONE_PRICE,
    hasPhone: true,
  }
}

export function moveTo(state: GameState, locationId: string): GameState {
  if (state.locationId === locationId) return state
  const advanced = nextPeriod(state.period, state.day)
  return {
    ...state,
    locationId,
    energy: Math.max(0, state.energy - 5),
    period: advanced.period,
    day: advanced.day,
  }
}

export function earnFromErrand(state: GameState): GameState {
  if (state.energy < 10) return state
  const advanced = nextPeriod(state.period, state.day)
  return {
    ...state,
    cash: state.cash + 500,
    energy: state.energy - 10,
    period: advanced.period,
    day: advanced.day,
  }
}
