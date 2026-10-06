import type { CommunityEventRecord, ItemRecord, LocationRecord, NpcRecord } from '../types/game'

export const locations: LocationRecord[] = [
  {
    id: 'aau_campus',
    name: 'AAU Campus',
    type: 'campus',
    description: 'Ambrose Alli University main grounds. Lectures, students, and campus hustle.',
    coordinates: [0, 0, 0],
    available_actions: ['move', 'study', 'socialize'],
  },
  {
    id: 'college_of_medicine',
    name: 'College of Medicine',
    type: 'campus',
    description: 'College of Medicine — long days, heavier books, and campus stories.',
    coordinates: [18, 0, -8],
    available_actions: ['move', 'study'],
  },
  {
    id: 'mbc',
    name: 'MBC',
    type: 'campus',
    description: 'A familiar AAU landmark students pass through between lectures.',
    coordinates: [-14, 0, -6],
    available_actions: ['move', 'socialize'],
  },
  {
    id: 'igbinedion_hostel',
    name: 'Igbinedion Hostel',
    type: 'hostel',
    description: 'Off-campus living, generator noise, and hostel politics.',
    coordinates: [-22, 0, 16],
    available_actions: ['move', 'rest', 'socialize'],
  },
  {
    id: 'maryvale_hostel',
    name: 'Maryvale Hostel',
    type: 'hostel',
    description: 'Maryvale — another Ekpoma student address with its own rhythm.',
    coordinates: [20, 0, 18],
    available_actions: ['move', 'rest'],
  },
  {
    id: 'innovation_hub',
    name: 'Innovation Hub',
    type: 'community',
    description: "The team's in-game home. Leave reviews and suggest features.",
    coordinates: [8, 0, 10],
    available_actions: ['move', 'feedback'],
  },
  {
    id: 'roadside_bukka',
    name: 'Roadside Bukka',
    type: 'food',
    description: 'Rice, stew, and gossip. Food restores energy and costs cash.',
    coordinates: [-8, 0, 12],
    available_actions: ['move', 'eat'],
  },
  {
    id: 'keke_park',
    name: 'Keke Park',
    type: 'transport',
    description: 'Keke and bike park. Pay for transport between far locations.',
    coordinates: [0, 0, 22],
    available_actions: ['move'],
  },
  {
    id: 'campus_shop',
    name: 'Campus Shop',
    type: 'shop',
    description: 'Phones, snacks, and the small things students always need.',
    coordinates: [12, 0, 4],
    available_actions: ['move', 'shop'],
  },
]

export const items: ItemRecord[] = [
  {
    id: 'phone',
    name: 'Phone',
    description: 'Compulsory beginner purchase. Notifications, messages, and status.',
    price: 2500,
    category: 'equipment',
    effects: { unlocks: 'phone_panel' },
  },
  {
    id: 'jollof_plate',
    name: 'Plate of Jollof',
    description: 'Restores a bit of energy.',
    price: 800,
    category: 'food',
    effects: { energy: 15 },
  },
]

export const npcs: NpcRecord[] = [
  {
    id: 'npc_vendor_amina',
    name: 'Amina',
    type: 'food_vendor',
    location_id: 'roadside_bukka',
    personality: 'sharp and funny',
  },
  {
    id: 'npc_student_chuks',
    name: 'Chuks',
    type: 'student',
    location_id: 'aau_campus',
    personality: 'always broke, always scheming',
  },
  {
    id: 'npc_okada_ife',
    name: 'Ife',
    type: 'transport_operator',
    location_id: 'keke_park',
    personality: 'fast talker',
  },
]

export const communityEvents: CommunityEventRecord[] = [
  {
    id: 'aau_orientation_week',
    title: 'Campus hangout — Faculty of Arts',
    description:
      'Student association hangout after lectures. Fictional listing for the initial build.',
    location: 'AAU Campus',
    starts_at: '2026-10-10T16:00:00+01:00',
    ends_at: '2026-10-10T20:00:00+01:00',
    organizer: 'Ekpoma Life Team',
    image_url: null,
    status: 'published',
  },
]

export function getLocation(id: string): LocationRecord | undefined {
  return locations.find((location) => location.id === id)
}
