import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { WorldScene } from './WorldScene'

export function WorldCanvas({ locationId }: { locationId?: string }) {
  return (
    <Canvas camera={{ position: [28, 22, 28], fov: 45 }} shadows className="h-full w-full">
      <WorldScene currentLocationId={locationId} />
      <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2.15} minDistance={16} maxDistance={55} />
    </Canvas>
  )
}
