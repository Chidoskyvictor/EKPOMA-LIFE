import { Users, Wifi } from 'lucide-react'

export function Navbar({ visitors, online }: { visitors: number; online: number }) {
  return (
    <header className="flex items-center justify-between border-b border-amber-400/40 bg-[#16301c]/90 px-4 py-3 text-amber-50 backdrop-blur">
      <div className="font-semibold tracking-[0.18em] text-amber-200">EKPOMA LIFE</div>
      <div className="flex gap-4 text-sm">
        <span className="inline-flex items-center gap-1">
          <Users size={16} /> {visitors} visited
        </span>
        <span className="inline-flex items-center gap-1">
          <Wifi size={16} /> {online} online
        </span>
      </div>
    </header>
  )
}
