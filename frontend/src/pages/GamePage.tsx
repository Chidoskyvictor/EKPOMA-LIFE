import { Navigate } from 'react-router-dom'
import { Map, Phone, Package, Calendar, User } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { WorldCanvas } from '../features/map/WorldCanvas'
import { useGame } from '../hooks/useGame'
import { communityEvents, getLocation, locations } from '../data/content'
import { PHONE_PRICE } from '../game/rules'
import { getLocalUser } from '../services/auth'
import { useMemo, useState } from 'react'
import { recordVisit } from '../services/presence'

export function GamePage() {
  const user = getLocalUser()
  const { state, buyPhone, travelTo, runErrand } = useGame()
  const presence = useMemo(() => recordVisit(), [])
  const [panel, setPanel] = useState<'map' | 'phone' | 'inventory' | 'events' | 'profile'>('map')

  if (!user) return <Navigate to="/" replace />
  if (!state) return <Navigate to="/" replace />

  const location = getLocation(state.locationId)

  return (
    <div className="flex min-h-svh flex-col bg-[#0f1a12] text-amber-50">
      <Navbar visitors={presence.visitors} online={presence.online} />
      <div className="flex flex-wrap items-center gap-3 border-b border-amber-400/20 bg-[#16301c] px-4 py-2 text-sm">
        <span>{location?.name ?? state.locationId}</span>
        <span>
          Day {state.day} · {state.period}
        </span>
        <span className="ml-auto font-semibold text-amber-300">₦{state.cash}</span>
      </div>

      <div className="relative h-[42vh] min-h-64">
        <WorldCanvas locationId={state.locationId} />
      </div>

      <div className="grid flex-1 gap-0 md:grid-cols-[220px_1fr]">
        <aside className="space-y-1 border-t border-amber-400/20 bg-[#132418] p-4 text-sm">
          <p className="font-semibold">{state.characterName}</p>
          <p>Energy {state.energy}</p>
          <p>Health {state.health}</p>
          <p>Reputation {state.reputation}</p>
          <p>Academic {state.academicStatus}</p>
        </aside>
        <section className="border-t border-amber-400/20 p-4">
          <p className="mb-3 text-amber-100/80">{location?.description}</p>
          <div className="mb-4 flex flex-wrap gap-2">
            {!state.hasPhone ? (
              <button className="rounded bg-amber-400 px-3 py-2 text-sm font-semibold text-[#16301c]" onClick={buyPhone}>
                Buy phone (₦{PHONE_PRICE})
              </button>
            ) : null}
            {state.locationId === 'aau_campus' ? (
              <button className="rounded bg-[#2f6b45] px-3 py-2 text-sm" onClick={runErrand}>
                Run campus errand (+₦500)
              </button>
            ) : null}
          </div>
          <p className="mb-2 text-xs uppercase tracking-wider text-amber-200/70">Travel</p>
          <div className="flex flex-wrap gap-2">
            {locations.map((place) => (
              <button
                key={place.id}
                disabled={place.id === state.locationId}
                className="rounded border border-amber-200/30 px-2 py-1 text-xs disabled:opacity-40"
                onClick={() => travelTo(place.id)}
              >
                {place.name}
              </button>
            ))}
          </div>

          {panel === 'phone' ? (
            <div className="mt-4 rounded border border-amber-200/20 bg-black/20 p-3 text-sm">
              {state.hasPhone ? 'Phone online. No new messages yet.' : 'Buy a phone in the tutorial to unlock this panel.'}
            </div>
          ) : null}
          {panel === 'inventory' ? (
            <div className="mt-4 rounded border border-amber-200/20 bg-black/20 p-3 text-sm">
              {state.hasPhone ? 'Owned: Phone' : 'Inventory is empty.'}
            </div>
          ) : null}
          {panel === 'events' ? (
            <div className="mt-4 space-y-2">
              {communityEvents.map((event) => (
                <div key={event.id} className="rounded border border-amber-200/20 bg-black/20 p-3 text-sm">
                  <p className="font-medium">{event.title}</p>
                  <p className="text-amber-100/70">{event.location}</p>
                </div>
              ))}
            </div>
          ) : null}
          {panel === 'profile' ? (
            <div className="mt-4 rounded border border-amber-200/20 bg-black/20 p-3 text-sm">
              {user.email}
            </div>
          ) : null}
        </section>
      </div>

      <nav className="flex justify-around border-t border-amber-400/30 bg-[#16301c] py-2 text-xs">
        <button onClick={() => setPanel('map')} className="flex flex-col items-center gap-1">
          <Map size={16} /> Map
        </button>
        <button onClick={() => setPanel('phone')} className="flex flex-col items-center gap-1">
          <Phone size={16} /> Phone
        </button>
        <button onClick={() => setPanel('inventory')} className="flex flex-col items-center gap-1">
          <Package size={16} /> Inventory
        </button>
        <button onClick={() => setPanel('events')} className="flex flex-col items-center gap-1">
          <Calendar size={16} /> Events
        </button>
        <button onClick={() => setPanel('profile')} className="flex flex-col items-center gap-1">
          <User size={16} /> Profile
        </button>
      </nav>
    </div>
  )
}
