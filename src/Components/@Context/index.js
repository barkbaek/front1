import { createContext, useState } from 'react'

const initialState = {
    state: {},
    actions: {}
}

const Context = createContext(initialState)

const withContext = WrappedComponent => {
    return props => {
        const [value1, setValue1] = useState(0)

        return (
            <Context.Provider value={{
                state: {
                    value1
                },
                actions: {
                    setValue1
                }
            }}>
                <WrappedComponent {...props} />
            </Context.Provider>
        )
    }
}

export { Context, withContext }