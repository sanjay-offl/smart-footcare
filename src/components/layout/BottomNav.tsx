'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItem {
  href: string
  icon: string
  label: string
  ariaLabel: string
}

const navItems: NavItem[] = [
  { href: '/dashboard', icon: '🏠', label: 'Home', ariaLabel: 'Go to Dashboard' },
  { href: '/monitor', icon: '📊', label: 'Monitor', ariaLabel: 'Open Monitor' },
  { href: '/history', icon: '📈', label: 'History', ariaLabel: 'View History' },
  { href: '/share', icon: '👥', label: 'Share', ariaLabel: 'Share Data' },
]

export default function BottomNav() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path)
  }

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 pointer-events-none"
      aria-label="Main navigation"
    >
      {/* Floating Glass Navigation Bar */}
      <div className="mx-auto max-w-md glass-card rounded-3xl backdrop-blur-xl pointer-events-auto transform transition-all duration-300">
        <div className="flex justify-around items-center h-20 px-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <div
                className={`flex flex-col items-center justify-center flex-1 py-3 px-2 rounded-2xl transition-all duration-300 ${
                  isActive(item.href)
                    ? 'bg-gradient-to-br from-medical-green/30 to-emerald-500/20 text-medical-green'
                    : 'text-medical-light hover:text-medical-dark'
                }`}
                aria-label={item.ariaLabel}
                role="menuitem"
              >
                <span className="text-2xl mb-0.5">{item.icon}</span>
                <span className="text-xs font-semibold whitespace-nowrap">{item.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Safe area spacer for notch devices */}
      <div className="h-2"></div>
    </nav>
  )
}
