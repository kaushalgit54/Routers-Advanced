import { useEffect } from 'react';
import classes from './NewsLetterSignup.module.css';
import { useFetcher } from 'react-router-dom';
const NewsLetterSignup = () => {
    const fetcher = useFetcher();
     const {data, state} = fetcher;

     useEffect(()=>{
        if(state === 'idle' && data && data.message){
            window.alert(data.message);
        }
     },[data,state]);
    return(
    <fetcher.Form method='post' actoin='/newsletter' className={classes.newsletter}>
        <input type="email" placeholder='Sign up for newsletter...' aria-label='Sign up for newsletter'/>
        <button>Sign up</button>
    </fetcher.Form>
     
    );
};

export default NewsLetterSignup;