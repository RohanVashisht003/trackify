import { Container, Divider, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import HabitDetails from './HabitDetails';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { deleteHabit } from '../actions';

const useStyles = makeStyles({
    outerClass:{
      marginTop:'4rem',
      minWidth:'85% !important',
      backgroundColor: '#4f89baad',
      borderRadius: '20px',
      boxShadow: 'inset 0px 0px 6px 0px black',
      border:'none',
      color:'White'
    },
    container: {
      display:'inline-flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '10px',
      flexDirection:'row'
    },
    typography:{
      backgroundColor:'#DF7861',
      margin:'0px auto !important',
      width:'30%',
      borderRadius: '30px',
      display:'inline-block',
    },
    closeButton:{
      top: '1rem',
      left: '64%',
      position: 'relative',
      display:'inline',
      cursor:'pointer'
    }
   
  });


function HabitComponent({habit,index}) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const getIndex=()=>{
      dispatch(deleteHabit(index));
    }
  return (
    <>
    <Container className={classes.outerClass}> 
        
          <CloseIcon className={classes.closeButton} onClick={()=>getIndex()}/>
       
        <Typography variant='h5' className={classes.typography}>
          {habit.title}
        </Typography>
        
       <p>{habit.description}</p>
       
      
        <Container className={classes.container} style={{display:'flex'}}>
        {habit.weekDays.map((element) => {
          return (
            <HabitDetails
              element={element}
              key={element.day}
              day={element.day}
              title={habit.title}
              no={element.no}
            />
          );
        })}
      </Container>
    </Container>
    
    </>
  )
}

export default HabitComponent;