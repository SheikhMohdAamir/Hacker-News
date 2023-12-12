import { createContext } from 'react'

const Context = createContext()

const ContextProvider = ({children}) => {
    return(
        <Context.Provider>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }