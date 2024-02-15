import EventForm from "../components/EventForm";
import { redirect, json } from "react-router-dom";
function NewEventPage(){
    return <EventForm method='post'/>;
}
export default NewEventPage;

