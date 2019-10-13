const contactsIntitalState = []
const contactsReducer = (state = contactsIntitalState, action) => {
    switch (action.type) {
        case 'SET_CONTACTS' : 
            return [...action.payload]
        default: {
            return [...state]
        }
    }
}

export default contactsReducer