import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import LoaderAnimation from "./UI/LoaderAnimation/LoaderAnime";
function RootLayout(){
    const navigation = useNavigation();
    
    return(
     <>
        <MainNavigation/>
        <main>
            <Outlet/>
            {navigation.state === 'loading' && <LoaderAnimation/>}
            {/* navigation.state property accepts different status like loading  */}
        </main>
     </>);
}
export default RootLayout;


// useNavigation hook
// This hook tells you everything you need to know about a page navigation to build pending navigation indicators and optimistic UI on data mutations. Things like:

//     Global loading indicators
//     Disabling forms while a mutation is happening
//     Adding busy indicators to submit buttons
//     Optimistically showing a new record while it's being created on the server
//     Optimistically showing the new state of a record while it's being updated
