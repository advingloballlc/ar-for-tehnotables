import React from 'react'

export const LangCodeContext = React.createContext()

const LangCodeProvider = ({ children, code }) => {
  return (
    <LangCodeContext.Provider value={code}>
      { children }
    </LangCodeContext.Provider>
  )
}

export default LangCodeProvider