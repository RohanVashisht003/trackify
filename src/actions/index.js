import { ADD_HABIT, UPDATE_HABIT_STATUS,DELETE_HABIT } from '../constants/ActionTypes';

export const addHabit = (habit) => {
  return {
    type: ADD_HABIT,
    payload: habit,
  };
};

export const deleteHabit = (index)=>{
  return{
    type:DELETE_HABIT,
    payload:index
  }
}

export const updateStatus = (status, day, title,no) => {
  return {
    type: UPDATE_HABIT_STATUS,
    payload: status,
    day,
    title,
    no
  };
};