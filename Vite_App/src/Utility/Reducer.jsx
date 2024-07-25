import {Type} from "./ActionType"

export const intitalState={
basket:[],
user:null
}

export const Reducer = (state,action)=>{
switch(action.Type){
  case Type.ADD_TO_BASKET:
    // check if an item exists 
          const existingItem =state.basket.find((item)=>item?.id === action.item.id)
          if (!existingItem){
            return{
              ...state,
              basket : [...state.basket,{...action.item, amount:1}]
            }
          } 
          else {
            const updatedBasket = state.basket.map((item)=>{
              item?.id === action.item.id? {...item,amount:item?.amount+1} :item
            })
            return{
              ...state,
              basket:updatedBasket
            }
          }
          case Type.REMOVE_FROM_BASKET:
            const index= state.basket.findIndex(item=>item?.id === action.id)
            let newBasket=[...state.basket]

            if(index>= 0){
              if (newBasket[index].amount>1){
                newBasket[index]={...newBasket[index],amount:newBasket[index].amount-1}
              }else{
                newBasket.splice(index,1)
              }
            }
            return{
              ...state,
              basket:newBasket
            }
            case Type.SET_USER:
            return{
              ...state,
              user:action.user
            }
          default:
            return state;
}


}

