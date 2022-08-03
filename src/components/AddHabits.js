import { Button, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/system';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NONE } from "../constants/TaskStatus";
import { addHabit } from "../actions/index.js";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  field: {
    marginTop: '2rem !important',
    marginBottom:'2rem !important'
  },
  title: {
    fontSize: "2rem !important",
  },
  container: {
    marginTop:'6rem',
    display:'flex !important',
    alignItems:'center',
    flexDirection:'column'
  },
  formDiv:{
    width: '80%',
    margin: '2px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  button:{
    padding:'10px !important',
    width:'40%',
  }
});

function AddHabits() {
  const classes = useStyles();
  const dispatch = useDispatch();

  // set title and description
  const[title, setTitle] = useState('');
  const[details, setDetails] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event)=>{
    event.preventDefault();

    if(title && details){
      const habit = {
        title,
          description: details,
          weekDays: [
            {
              day: "Mon",
              status: NONE,
              no:0
            },
            {
              day: "Tue",
              status: NONE,
              no:1
            },
            {
              day: "Wed",
              status: NONE,
              no:2
            },
            {
              day: "Thu",
              status: NONE,
              no:3
            },
            {
              day: 'Fri',
              status: NONE,
              no:4
            },
            {
              day: 'Sat',
              status: NONE,
              no:5
            },
            {
              day: 'Sun',
              status: NONE,
              no:6
            },
          ],
      };
      dispatch(addHabit(habit));
      navigate('/');
    }
  }
  return (
    <Container className={classes.container}>
      <Typography variant='h5' className={classes.title}>
        Add New Habit
      </Typography>

      <form onSubmit={handleSubmit} className={classes.formDiv} noValidate>
        <TextField label='Title' required  className={classes.field} fullWidth variant='standard' onChange={(event)=>setTitle(event.target.value)}/>
        <TextField label='Description' required  className={classes.field} fullWidth variant='standard' onChange={(event)=>setDetails(event.target.value)}/>
        <Button className={classes.button} type="submit"
            color="primary"
            variant="contained"  endIcon={<ChevronRightIcon />}>
          Submit
        </Button>
      </form>
    </Container>
  )
}

export default AddHabits