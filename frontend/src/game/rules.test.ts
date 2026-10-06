import { describe, expect, it } from 'vitest'
import { createInitialState, PHONE_PRICE, purchasePhone, STARTER_CASH } from './rules'

describe('starter and phone', () => {
  it('gives starter funds', () => {
    const state = createInitialState('p1', 'Test')
    expect(state.cash).toBe(STARTER_CASH)
  })

  it('purchases the compulsory phone', () => {
    const after = purchasePhone(createInitialState('p1', 'Test'))
    expect(after.hasPhone).toBe(true)
    expect(after.cash).toBe(STARTER_CASH - PHONE_PRICE)
  })
})
