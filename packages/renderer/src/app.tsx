import React, { useState, useCallback } from 'react'
import Editor from './editor'
import './app.css'

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>('# Hello, world\n')

  const handleDocChange = useCallback(newDoc => {
    setDoc(newDoc)
  }, [])

  return (
    <div className="app">
      <Editor initialDoc={doc} onChange={handleDocChange} />
    </div>
  )
}

export default App
