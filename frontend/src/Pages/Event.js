import EventsList from '../components/EventsList';
import { useLoaderData, json} from 'react-router-dom';
function EventPage(){

    const data = useLoaderData();
    if(data.isError){
        return <p>{data.message}</p>
    }
    const events = data.events;
    //useLoaderData can be only used in lower level children components
    return (
        <>
        <h1>Events Page</h1>
        {/* <EventsList/> */}
        <EventsList events={events}/>
        </>
    );
}
export default EventPage;
//here loader function is used to fetch the data from backend and to use it we use useLoaderData in child routes
//like loader is defined in App.js in createBrowserRouter
//In loader function we can use fetching data from api but can't use hooks 
export async function loader (){
    const response = await fetch('http://localhost:8080/events');
 
    if (!response.ok) {
    //   return {isError: true, message: 'could not fetch events.'};
    //   throw new Response(JSON.stringify({message: 'Could not fetch event.',status:500,}));
    //Insteadd of Send Response error by convertig the message and status to JSON.stringify, we can simply import json hooks and return it as
     return json(
        {message:'Could not fetch events'},
        {status:500}
        );
    }
    else{
     return response;
    }
  
}