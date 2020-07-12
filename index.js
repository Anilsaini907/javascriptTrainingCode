
import XhttpExecution from './xhttpfunction.js';
var url="https://jsonplaceholder.typicode.com/posts";
var getMethod='GET'
var postMethod='POST'
let xhttpExecution =new XhttpExecution(getMethod,url);
console.log(xhttpExecution.requesttext)
xhttpExecution.executeRequest();

let xhttpExecution =new XhttpExecution(postMethod,url,"anil");
console.log(xhttpExecution.requesttext)
xhttpExecution.executeRequest();