import { ADD_BUDGET, ADD_BUDGET_FAILED, ADD_BUDGET_SUCCESS } from "../../action/types";

const initialState = {
    loading: false,
    data: '',
    error: ''
}

const addBudgetIncomeReducer = (state = initialState, action)=>{
    const {type, payload} = action;

    switch (type) {
        case ADD_BUDGET:
            return{
                ...state,
                loading: true,
            }
        case ADD_BUDGET_FAILED:
            return{
                ...state,
                loading: false,
                data: null,
                error: payload
            }
        case ADD_BUDGET_SUCCESS:
            return{
                ...state,
                loading: false,
                data: payload.data,
                error: null
            }
    
        default:
            return state;
    }
}

export default addBudgetIncomeReducer