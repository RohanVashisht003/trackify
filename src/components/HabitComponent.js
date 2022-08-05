import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import HabitDetails from './HabitDetails';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import { useDispatch } from 'react-redux';
import { deleteHabit } from '../actions';

const useStyles = makeStyles({
    outerClass:{
      backgroundColor: '#4f89baad',
      borderRadius: '20px',
      boxShadow: 'inset 0px 0px 6px 0px black',
      border:'none',
      color:'White',
      display:'flex !important',
      alignItems:'center',
      flexWrap:"wrap !important",
      justifyContent:'space-evenly',
      padding:'10px'

    },
    container: {
      display:'inline-flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '10px',
      flexDirection:'row'
    },
    textContainer:{
      backgroundColor:'#2a2a2abd',
      borderRadius: '15px',
      color:'white',
      marginBottom:"5px",
      padding:'3px',
      textAlign:'center',
      overflow:'hidden',
      textOverflow:'clip'
    },
    closeButton:{
      cursor: 'pointer',
      display: 'inline',
      color:'black',
      margin:'5px',
      fontSize:'2rem !important',
    },
    listOuter:{
      padding:'33px 20px',
      margin:'33px 20px',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column'
    },
    text:{
      overflow:'hidden',
      textOverflow:'ellipsis'
    }
   
  });


function HabitComponent({habit,index}) {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    //for deleting the habit
    const getIndex=()=>{
      dispatch(deleteHabit(index));
    }
  return (
    <li className={classes.listOuter}>
    <HighlightOffTwoToneIcon className={classes.closeButton} onClick={()=>getIndex()}/>
      <div style={{width:'90%'}}>
        <div className={classes.textContainer}>
          <Typography variant='h6' className={classes.text}>
            {habit.title}
          </Typography>
          <p style={{margin:'0',padding:'0px', fontSize:'13px'}} className={classes.text}>{habit.description}</p> 
        </div>
      
    <Container className={classes.outerClass}> 
    {/* iterating over the array */}
        {habit.weekDays.map((element) => {
          return (
            // sending props to component
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
      </div>
    </li>
  )
}

export default HabitComponent;