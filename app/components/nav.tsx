import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 mb-8">
      <Link href="/" className="text-xl font-faktum-medium">
        zvpply
      </Link>
      
      <div className="flex items-center gap-6">
        <Link 
          href="/blog" 
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          Blog
        </Link>
        <Link 
          href="/case-studies" 
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          Case Studies
        </Link>
      </div>
    </nav>
  )
}
