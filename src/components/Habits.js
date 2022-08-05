import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import HabitComponent from './HabitComponent';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  habitContainer:{
    flexDirection:'column',
    justifyContent:'space-evenly',
    alignItems:'center',
    overflow:'hidden',
    listStyle:'none',
    padding:'0'
  }
}) 

function Habits() {
  // getting state from store
    const habits = useSelector((state)=>state.habits);
    const classes = useStyles();
  return (
    <ul className={classes.habitContainer}>
      {/* iterating over the array */}
       {habits.map((habit,index)=>(
        // sending props
         <HabitComponent habit={habit} key={habit.title} index={index}/>
       ))}
    </ul>
  );
}

export default Habits;