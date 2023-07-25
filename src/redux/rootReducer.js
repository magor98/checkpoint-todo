

const initialState = {
    name : "OG Mag'Or"
}

 export  function rootReducer(state = initialState, action) {
    switch(action.type) {
        case "CHANGE-NAME" : {
           return {
            name: "Aboulaye Magor Sene"
           }
        }
        default : {
            return state;
        }
    }
    
}