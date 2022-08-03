import React, { useState } from 'react';
import { DONE, NONE, NOT_DONE } from '../constants/TaskStatus';
import { updateStatus } from '../actions/index';
import { useDispatch } from 'react-redux';
import { makeStyles} from '@mui/styles';
import { Divider, Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '10px',
  },
  statusBox: {
    width: '20px',
    cursor: 'pointer',
    height: '20px',
    margin: '9px',
    display: 'flex',
    justifyContent: 'center',
  },
  roundDiv:{
    borderRadius: '50%',
    height: '5rem',
    width: '5rem',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    padding:'5px',
    boxShadow:'inset 0px 0px 4px 0px black',
    backgroundColor: '#A27B5C',
    justifyContent:'center',
    transition:'all 0.2s ease-in-out',
    '&:hover':{
        transform:'scale(1.05)'
    }
  },
  dayText:{
    fontSize:'20px !important'
  }
});

const HabitDetails = ({ element, day, title,no }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [status, setStatus] = useState(element.status);

  const onClickStatusChange = () => {
    if (element.status === DONE) {
      setStatus(NOT_DONE);
    } else if (element.status === NOT_DONE) {
      setStatus(NONE);
    } else {
      setStatus(DONE);  
    }
    dispatch(updateStatus(element.status, day, title,no));
  };
  return (
    <div className={classes.roundDiv}>
      <Typography className={classes.dayText}>{day}</Typography>
      <div className={classes.statusBox} onClick={() => onClickStatusChange()}>
        {status === DONE ? <DoneIcon /> : null}
        {status === NOT_DONE ? <CloseIcon /> : null}
        {status === NONE ? <RemoveIcon/> : null}
      </div>                 
    </div>
  );
};

export default HabitDetails;