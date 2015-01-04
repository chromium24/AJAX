/**
 * Created by Ann Marie on 1/3/2015.
 */

for(i=0; i < 101; i++) {
    var request = new XMLHttpRequest();  //new XHR object
// XMLHttpRequest (XHR) is an API available to web browser scripting languages such as JavaScript. It is used to send HTTP or
// HTTPS requests to a web server and load the server response data back into the script.
//3 parameters are required - METHOD, LOCATION OF DATA OBJECT, BOOLEAN SPECIFYING WHETHER SYNCHRONOUS OR ASYNCHRONOUS
    request.open('GET', 'data.txt', false); //when boolean is set to false, the page won't load until all of the data has been retrieved from server
    request.send();     //send request to server
    if (request.status == 200) {      //if AJAX call was successful then...
        console.log(request);      //View what we get from server. When viewing console, you will see the http request object and
        // notice the status =200 which indicates successful AJAX call
        document.write(request.responseText);
    }
}