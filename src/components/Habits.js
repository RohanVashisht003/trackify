import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { Container } from '@mui/system';
import HabitComponent from './HabitComponent';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  habitContainer:{
    paddingBottom:'40px',
    paddingTop:'40px'
  }
}) 

function Habits() {
    const habits = useSelector((state)=>state.habits);
    const classes = useStyles();
  return (
    <Container className={classes.habitContainer}>
       {habits.map((habit,index)=>(
         <HabitComponent habit={habit} key={habit.title} index={index}/>
       ))}
    </Container>
  );
}

export default Habits;