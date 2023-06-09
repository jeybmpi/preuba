import { userTypes } from "../types/dayTypes";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case userTypes.USER_REGISTER:
      return {
        ...state,
        ...action.payload,
      };

    case userTypes.USER_LOGIN:
      return {
        ...state,
        ...action.payload,
      };
      case userTypes.USER_LOGOUT:
        return{
            
        }

    default:
      return state;
  }
};