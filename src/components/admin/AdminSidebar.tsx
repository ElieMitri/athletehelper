'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminSidebar() {
  const pathname = usePathname();

  const links = [
    { href: '/admin', label: 'Dashboard', exact: true },
    { href: '/admin/users', label: 'Users' },
    { href: '/admin/programs', label: 'Programs' },
    { href: '/admin/exercises', label: 'Exercises' },
    { href: '/admin/analytics', label: 'Analytics' },
    { href: '/admin/settings', label: 'Settings' }
  ];

  const isActive = (href: string, exact: boolean = false) => {
    if (exact) {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-4 border-b">
        <h2 className="text-lg font-bold">Admin Panel</h2>
      </div>
      <nav className="p-2">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-4 py-2 rounded mb-1 transition-colors ${
              isActive(link.href, link.exact)
                ? 'bg-blue-50 text-blue-700 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
