interface SimpleContentProps {
  content: string
}

export function SimpleContent({ content }: SimpleContentProps) {
  // Simple markdown-like rendering without MDX
  const renderContent = (text: string) => {
    return text
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-3xl font-faktum-medium mb-6 text-gray-900 dark:text-gray-100">{line.substring(2)}</h1>
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-faktum-medium mb-4 text-gray-900 dark:text-gray-100">{line.substring(3)}</h2>
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-faktum-medium mb-3 text-gray-900 dark:text-gray-100">{line.substring(4)}</h3>
        }
        if (line.startsWith('- ')) {
          return <li key={index} className="mb-1 text-gray-700 dark:text-gray-300">{line.substring(2)}</li>
        }
        if (line.trim() === '') {
          return <br key={index} />
        }
        return <p key={index} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">{line}</p>
      })
  }

  return (
    <div className="prose prose-lg max-w-none">
      {renderContent(content)}
    </div>
  )
} 