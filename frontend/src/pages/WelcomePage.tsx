import { useMemo, useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { WorldCanvas } from '../features/map/WorldCanvas'
import { useGame } from '../hooks/useGame'
import { recordVisit } from '../services/presence'
import { getLocalUser, signInLocal, signUpLocal } from '../services/auth'

export function WelcomePage() {
  const navigate = useNavigate()
  const { startCharacter, state } = useGame()
  const presence = useMemo(() => recordVisit(), [])
  const [email, setEmail] = useState('')
  const [name, setName] = useState('Fresh student')
  const [mode, setMode] = useState<'signup' | 'login'>('signup')
  const [error, setError] = useState('')

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    if (!email.includes('@')) {
      setError('Enter a valid email.')
      return
    }
    if (mode === 'signup') signUpLocal(email)
    else signInLocal(email)
    if (!state) startCharacter(name || 'Fresh student')
    navigate('/game')
  }

  return (
    <div className="relative min-h-svh text-amber-50">
      <div className="absolute inset-0">
        <WorldCanvas locationId="aau_campus" />
      </div>
      <div className="relative z-10 flex min-h-svh flex-col bg-black/25">
        <Navbar visitors={presence.visitors} online={presence.online} />
        <div className="mt-auto flex flex-col items-center px-4 pb-10 pt-24">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-amber-200">Ekpoma · AAU</p>
          <h1 className="mb-3 text-center text-4xl font-semibold md:text-5xl">Enter Ekpoma Life</h1>
          <p className="mb-8 max-w-xl text-center text-amber-100/90">
            Create a character, survive campus and town, earn, spend, and make choices in a living
            Three.js world.
          </p>
          <form
            onSubmit={onSubmit}
            className="w-full max-w-md space-y-3 rounded-xl border border-amber-200/30 bg-[#16301c]/85 p-5 backdrop-blur"
          >
            <div className="flex gap-2 text-sm">
              <button
                type="button"
                className={mode === 'signup' ? 'font-semibold text-amber-300' : 'text-amber-100/70'}
                onClick={() => setMode('signup')}
              >
                Sign up
              </button>
              <span className="text-amber-100/40">/</span>
              <button
                type="button"
                className={mode === 'login' ? 'font-semibold text-amber-300' : 'text-amber-100/70'}
                onClick={() => setMode('login')}
              >
                Log in
              </button>
            </div>
            <input
              className="w-full rounded bg-black/30 px-3 py-2 outline-none ring-amber-300 focus:ring-2"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {mode === 'signup' ? (
              <input
                className="w-full rounded bg-black/30 px-3 py-2 outline-none ring-amber-300 focus:ring-2"
                placeholder="Character name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            ) : null}
            {error ? <p className="text-sm text-red-300">{error}</p> : null}
            <button
              type="submit"
              className="w-full rounded bg-amber-400 py-2 font-semibold text-[#16301c] hover:bg-amber-300"
            >
              {mode === 'signup' ? 'Create account & enter' : 'Log in & continue'}
            </button>
            {getLocalUser() ? (
              <p className="text-center text-xs text-amber-100/70">Saved session: {getLocalUser()?.email}</p>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  )
}
