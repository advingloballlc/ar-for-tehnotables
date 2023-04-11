import React from 'react'

export const PrefixContext = React.createContext()

const PrefixProvider = ({ children, prefix }) => {
  return (
    <PrefixContext.Provider value={prefix}>
      { children }
    </PrefixContext.Provider>
  )
}

export default PrefixProvider