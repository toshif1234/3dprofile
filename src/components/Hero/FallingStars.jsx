// components/Hero/FallingStars.jsx (Alternative)
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sparkles } from '@react-three/drei'

export default function FallingStars({ count = 100 }) {
  const sparklesRef = useRef()
  
  useFrame((state, delta) => {
    if (sparklesRef.current) {
      // Add subtle rotation for more dynamic effect
      sparklesRef.current.rotation.y += delta * 0.1
    }
  })

  return (
    <Sparkles
      ref={sparklesRef}
      count={count}
      scale={[30, 20, 10]}
      size={2}
      speed={0.3}
      opacity={0.6}
      color="#ffffff"
      noise={0.2}
    />
  )
}