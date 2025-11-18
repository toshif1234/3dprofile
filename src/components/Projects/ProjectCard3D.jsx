// components/Projects/ProjectCard3D.jsx
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Box } from '@react-three/drei'

export default function ProjectCard3D({ project, position }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = hovered 
        ? meshRef.current.rotation.y + delta * 2
        : meshRef.current.rotation.y + delta * 0.5
    }
  })

  return (
    <group position={position}>
      <Box
        ref={meshRef}
        args={[2, 3, 0.2]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        <meshStandardMaterial color={hovered ? "#6366f1" : "#3f3f46"} />
        <Text
        position={[0, 0.8, 0.11]}
        fontSize={0.15}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.8}
      >
        {project.name}
      </Text>
      </Box>
      
    </group>
  )
}