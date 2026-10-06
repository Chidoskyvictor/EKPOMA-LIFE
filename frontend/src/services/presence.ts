const VISITOR_KEY = 'ekpoma-life-visitor-counted'
const VISITOR_TOTAL_KEY = 'ekpoma-life-visitor-total'

export function recordVisit(): { visitors: number; online: number } {
  const already = sessionStorage.getItem(VISITOR_KEY)
  const current = Number(localStorage.getItem(VISITOR_TOTAL_KEY) ?? '128')
  let visitors = current
  if (!already) {
    visitors = current + 1
    localStorage.setItem(VISITOR_TOTAL_KEY, String(visitors))
    sessionStorage.setItem(VISITOR_KEY, '1')
  }
  const online = 1 + Math.floor(Math.random() * 7)
  return { visitors, online }
}
