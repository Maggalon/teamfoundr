'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, Cog } from 'lucide-react'

interface GradientSliderProps {
  onRoleChange: (role: 'Founder' | 'Executor') => void
}

export function GradientSlider({ onRoleChange }: GradientSliderProps) {
  const [role, setRole] = useState<'Founder' | 'Executor'>('Founder')

  const handleToggle = () => {
    const newRole = role === 'Founder' ? 'Executor' : 'Founder'
    setRole(newRole)
    onRoleChange(newRole)
  }

  return (
    <button
      type='button'
      onClick={handleToggle}
      className="group relative flex w-full max-w-[240px] items-center border border-input rounded-full bg-background text-white transition-all hover:opacity-90"
      aria-label={`Switch to ${role === 'Founder' ? 'Executor' : 'Founder'} role`}
    >
      <motion.div
        className="absolute inset-y-0.5 left-0.5 right-0.5 w-[calc(50%-2px)] rounded-full bg-primary backdrop-blur-sm"
        initial={false}
        animate={{ x: role === 'Founder' ? '0%' : '100%' }}
        transition={{ type: 'spring', stiffness: 700, damping: 30 }}
      />
      <div className="relative flex w-full justify-between p-2">
        <span className={`ml-2.5 flex items-center gap-2 text-sm font-medium ${role === 'Founder' ? 'text-white' : 'text-primary/60'}`}>
          <Lightbulb className="h-4 w-4" />
          Founder
        </span>
        <span className={`mr-2.5 flex items-center gap-2 text-sm font-medium ${role === 'Executor' ? 'text-white' : 'text-primary/60'}`}>
          Executor
          <Cog className="h-4 w-4" />
        </span>
      </div>
    </button>
  )
}

