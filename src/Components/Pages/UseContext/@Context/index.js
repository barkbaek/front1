import { createContext, useState } from 'react'

const initialState = {
    state: {},
    actions: {}
}

const Context = createContext(initialState)

const withContext = WrappedComponent => {
    return props => {
        const [number, setNumber] = useState(0)

        return (
            <Context.Provider value={{
                state: {
                    number
                },
                actions: {
                    setNumber
                }
            }}>
                <WrappedComponent {...props} />
            </Context.Provider>
        )
    }
}

export { Context, withContext }