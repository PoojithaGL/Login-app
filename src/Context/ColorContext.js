//  import  {createContext} from "react";
// const ColorContext = createContext();
// export default ColorContext;



import { createContext, useReducer } from "react";

const ColorContext = createContext();
const colorReducer = (state, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
const initialState = {
   username: "", 
   email: "", 
   password: "" };


export const ColorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(colorReducer, initialState);

  return (
    <ColorContext.Provider value={{ state, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorContext;
