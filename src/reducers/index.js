import {ADD_HABIT, DELETE_HABIT, UPDATE_HABIT_STATUS} from '../constants/ActionTypes';
import {DONE, NOT_DONE, NONE} from '../constants/TaskStatus';

const initialState = {
    habits:[
        {
            title:'Reading book',
            description:'Complete one book',
            weekDays:[
              {
                day:"Mon",
                status:DONE,
                no:0  
              },
              {
                day:"Tue",
                status:NOT_DONE ,
                no:1 
              },
              {
                day:"Wed",
                status:NOT_DONE ,
                no:2  
              },
              {
                day:"Thu",
                status:NONE ,
                no:3 
              },
              {
                day:"Fri",
                status:NONE ,
                no:4 
              },
              {
                day:"Sat",
                status:NONE ,
                no:5,

              },
              {
                day:"Sun",
                status: NONE ,
                no:6
              }

          ]
        },
        {
          title:'gym',
          description:'Leg day',
          weekDays:[
              {
                day:"Mon",
                status:DONE,
                no:0  
              },
              {
                day:"Tue",
                status:NOT_DONE ,
                no:1 
              },
              {
                day:"Wed",
                status:NOT_DONE ,
                no:2  
              },
              {
                day:"Thu",
                status:NONE ,
                no:3 
              },
              {
                day:"Fri",
                status:NONE ,
                no:4 
              },
              {
                day:"Sat",
                status:NONE ,
                no:5,

              },
              {
                day:"Sun",
                status: NONE ,
                no:6
              }

          ]
      },
    ]
};

const reducer = (state=initialState, action)=>{
   switch(action.type){
 
    case ADD_HABIT:
        return{
          habits:[...state.habits, action.payload]
        };

    case UPDATE_HABIT_STATUS:
        const index = state.habits.map((ele)=>{
          return ele.title;
        }).indexOf(action.title);
        if(action.payload === DONE){
          state.habits[index].weekDays[action.no].status = NOT_DONE;
        }

        else if(action.payload === NOT_DONE){
          state.habits[index].weekDays[action.no].status = NONE;
        }

        else if(action.payload === NONE){
          state.habits[index].weekDays[action.no].status = DONE;
        }

        return state;

    case DELETE_HABIT:
      state.habits=state.habits.filter((ele)=>{
        return state.habits.indexOf(ele)!=action.payload;
      })
      console.log(state.habits);
      return state;
        default:
          return state;
   }
}

export default reducer;