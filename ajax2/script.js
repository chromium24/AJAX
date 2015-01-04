/**
 * Created by Ann Marie on 1/3/2015.
 */
/* NOTES
When a request to a server is sent, we want to perform some actions based on the response.

    -The onreadystatechange event is triggered every time the readyState changes.

    -The readyState property holds the status of the XMLHttpRequest.

    -Three important properties of the XMLHttpRequest object:

    Property	            Description
    _________________________________________________________________________________________________________________________________________
    onreadystatechange	    Stores a function (or the name of a function) to be called automatically each time the readyState property changes
    readyState	            Holds the status of the XMLHttpRequest. Changes from 0 to 4:
    0:                      request not initialized
    1:                      server connection established
    2:                      request received
    3:                      processing request
    4:                      request finished and response is ready
    status	                200: "OK"
    404:                    Page not found
*/

    var request = new XMLHttpRequest();  //new XHR object
// XMLHttpRequest (XHR) is an API available to web browser scripting languages such as JavaScript. It is used to send HTTP or
// HTTPS requests to a web server and load the server response data back into the script.
//3 parameters are required - METHOD, LOCATION OF DATA OBJECT, BOOLEAN SPECIFYING WHETHER SYNCHRONOUS OR ASYNCHRONOUS
    request.open('GET', 'data.txt'); //NOW BOOLEAN IS TRUE BY DEFAULT, YOU DON'T NEED TO CODE TO TRUE.

    //Instead of using ready.send which automatically sends request with no event handler, a function will be used as an event handler
//WE WANT TO KNOW WHEN THE ONREADYSTATECHANGE CHANGES THEN WE
request.onreadystatechange = (function(){           //EVERY TIME readyState changes in value (0,1,2,3,4), this function is triggered and the condition is checked.
    if((request.readyState === 4) && (request.status === 200)){     //when the condition is met, that means that the request/response cycle is complete and now display the data
        console.log(request);
        document.write(request.responseText);
    }

});
request.send();


