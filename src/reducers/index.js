import {ADD_HABIT, DELETE_HABIT, UPDATE_HABIT_STATUS} from '../constants/ActionTypes';
import {DONE, NOT_DONE, NONE} from '../constants/TaskStatus';

// initial state 
const initialState = {
  // habits array
    habits:[
        {
          // title of habit
            title:'Reading book',
            // desc of habit
            description:'Complete one book',
            // 7 days 
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
          title:'Cycling',
          description:'Complete 40 km in a week',
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
        title:'Project',
        description:'Complete all projects',
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

// reducer
const reducer = (state=initialState, action)=>{
   switch(action.type){

    // adding habit
    case ADD_HABIT:
      // returning updated array after change
        return{
          habits:[...state.habits, action.payload]
        };

        // updating habit
    case UPDATE_HABIT_STATUS:
      // getting index of title
        const index = state.habits.map((ele)=>{
          return ele.title;
        }).indexOf(action.title);
// if status is done
        if(action.payload === DONE){
          state.habits[index].weekDays[action.no].status = NOT_DONE;
        }
// if status is not done
        else if(action.payload === NOT_DONE){
          state.habits[index].weekDays[action.no].status = NONE;
        }
// if status is none
        else if(action.payload === NONE){
          state.habits[index].weekDays[action.no].status = DONE;
        }
        return state;

// deleting habits
    case DELETE_HABIT:
      state.habits=state.habits.filter((ele)=>{
        return state.habits.indexOf(ele)!==action.payload;
      });
      return {
        habits:[...state.habits]
      }
      // default case simple return state
    default:
      return state;
   }
}

export default reducer;