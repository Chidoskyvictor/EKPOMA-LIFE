import { Html } from '@react-three/drei'
import { getLocation, locations } from '../../data/content'

const BUILDING_COLOR: Record<string, string> = {
  campus: '#2f6b45',
  hostel: '#c4a574',
  community: '#e4c35a',
  food: '#c45c26',
  transport: '#4a6fa5',
  shop: '#7a4e9c',
}

export function WorldScene({ currentLocationId }: { currentLocationId?: string }) {
  return (
    <>
      <color attach="background" args={['#87b5d4']} />
      <fog attach="fog" args={['#87b5d4', 40, 90]} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[20, 30, 10]} intensity={1.15} castShadow />
      <hemisphereLight args={['#9ec9e8', '#3d5c32', 0.4]} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[120, 120]} />
        <meshStandardMaterial color="#4d7a3a" />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 4]}>
        <planeGeometry args={[8, 50]} />
        <meshStandardMaterial color="#6b6b6b" />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[4, 0.02, 0]}>
        <planeGeometry args={[48, 6]} />
        <meshStandardMaterial color="#6b6b6b" />
      </mesh>

      {locations.map((location) => {
        const [x, y, z] = location.coordinates
        const selected = location.id === currentLocationId
        return (
          <group key={location.id} position={[x, y, z]}>
            <mesh position={[0, selected ? 2.4 : 1.8, 0]} castShadow>
              <boxGeometry args={selected ? [3.2, 4.8, 3.2] : [2.6, 3.6, 2.6]} />
              <meshStandardMaterial color={BUILDING_COLOR[location.type] ?? '#888'} />
            </mesh>
            <Html position={[0, selected ? 5.2 : 4.1, 0]} center distanceFactor={28}>
              <div className="rounded bg-black/70 px-2 py-0.5 text-[10px] font-medium text-amber-100 whitespace-nowrap">
                {location.name}
              </div>
            </Html>
          </group>
        )
      })}
    </>
  )
}

export function WorldHint({ locationId }: { locationId?: string }) {
  const location = locationId ? getLocation(locationId) : undefined
  return location ? (
    <div className="pointer-events-none absolute bottom-4 left-4 rounded bg-black/50 px-3 py-2 text-sm text-amber-50">
      {location.name}
    </div>
  ) : null
}
