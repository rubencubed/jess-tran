// 'use client'

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select'
// import React, { useState } from 'react'

// import type { Theme } from './types'

// import { useTheme } from '..'
// import { themeLocalStorageKey } from './types'

// export const ThemeSelector: React.FC = () => {
//   const { setTheme } = useTheme()
//   const [value, setValue] = useState('')

//   const onThemeChange = (themeToSet: Theme & 'auto') => {
//     if (themeToSet === 'auto') {
//       setTheme(null)
//       setValue('auto')
//     } else {
//       setTheme(themeToSet)
//       setValue(themeToSet)
//     }
//   }

//   React.useEffect(() => {
//     const preference = window.localStorage.getItem(themeLocalStorageKey)
//     setValue(preference ?? 'auto')
//   }, [])

//   return (
//     <Select onValueChange={onThemeChange} value={value}>
//       <SelectTrigger
//         aria-label="Select a theme"
//         className="w-auto bg-transparent gap-2 pl-0 md:pl-3 border-none"
//       >
//         <SelectValue placeholder="Theme" />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectItem value="auto">Auto</SelectItem>
//         <SelectItem value="light">Light</SelectItem>
//         <SelectItem value="dark">Dark</SelectItem>
//       </SelectContent>
//     </Select>
//   )
// }
'use client'

import React, { useEffect, useState } from 'react'
import type { Theme } from './types'
import { useTheme } from '..'
import { themeLocalStorageKey } from './types'

export const ThemeSelector: React.FC = () => {
  const { setTheme } = useTheme()
  const [value, setValue] = useState<Theme>('dark')

  useEffect(() => {
    const preference = (window.localStorage.getItem(themeLocalStorageKey) as Theme) ?? 'dark'
    setValue(preference)
    setTheme(preference)
  }, [setTheme])

  const toggleTheme = () => {
    const newTheme = value === 'light' ? 'dark' : 'light'
    setValue(newTheme)
    setTheme(newTheme)
    window.localStorage.setItem(themeLocalStorageKey, newTheme)
  }

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      aria-pressed={value === 'dark'}
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${
        value === 'dark' ? 'bg-blue-500' : 'bg-yellow-400'
      }`}
    >
      <span
        className={`absolute left-1 w-4 h-4 rounded-full bg-white text-black flex items-center justify-center text-sm transition-transform duration-300 ${
          value === 'dark' ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        {value === 'dark' ? '☾' : '☼'}
      </span>
    </button>
  )
}
