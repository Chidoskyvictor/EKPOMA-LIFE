export type TimePeriod = 'morning' | 'afternoon' | 'evening' | 'night'

export type GameState = {
  playerId: string
  characterName: string
  cash: number
  energy: number
  health: number
  reputation: number
  academicStatus: number
  locationId: string
  day: number
  period: TimePeriod
  tutorialComplete: boolean
  hasPhone: boolean
}

export type LocationRecord = {
  id: string
  name: string
  type: string
  description: string
  coordinates: [number, number, number]
  available_actions: string[]
}

export type ItemRecord = {
  id: string
  name: string
  description: string
  price: number
  category: string
  effects: Record<string, string | number>
}

export type NpcRecord = {
  id: string
  name: string
  type: string
  location_id: string
  personality: string
}

export type CommunityEventRecord = {
  id: string
  title: string
  description: string
  location: string
  starts_at: string
  ends_at: string
  organizer: string
  image_url: string | null
  status: string
}
