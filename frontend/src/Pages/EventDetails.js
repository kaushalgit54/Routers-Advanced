import { useParams, useRouteLoaderData, json, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";
function EventDetailsPage(){
    // const params = useParams();
    const data = useRouteLoaderData('event-detail');

    return(
        <>
        <h1>Event Details Page </h1>
        <EventItem event={data.event}/>
        </>
    );
}
export default EventDetailsPage;

export async function loader({request, params}){
    const id = params.eventId;
    const response = await fetch('http://localhost:8080/events/'+id);
    if(!response.ok){
        throw json({message:'Could not fetch details for selected event.', status:500});
    }else return response;
}
export async function action({params, request}){
    const id = params.eventId;
    const response = await fetch('http://localhost:8080/events/'+id,{
        method: request.method,
    }); 
    if(!response.ok){
        throw json(
            {message:'Could not delete event'},
            {status:500},
            );
    }
    return redirect('/events');
}