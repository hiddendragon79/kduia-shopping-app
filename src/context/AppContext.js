import React, { createContext, useReducer } from 'react';

export const AppReducer=(state,action)=>{
    let new_expenses=[];

    switch(action.type){
        case 'ADD_QUANTITY':
            let updatedQty=false;
            state.expenses.map((expense)=>{
                if(expense.name===action.payload.name){
                    expense.quantity=expense.quantity+action.payload.quantity;
                    updatedQty=true;
                }
            })
    };
}