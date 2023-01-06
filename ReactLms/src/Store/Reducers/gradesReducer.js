const INITIAL_VALUE = {
    list: {
        timeTable: []
    }
}

export default function timeTableReducer(state = INITIAL_VALUE, Action) {
    switch (Action.type) {
        case "GET_TIMETABLE_DATA":
            return {
                ...state,
                list: Action.payload
            }
        default:
            return state
    }
}