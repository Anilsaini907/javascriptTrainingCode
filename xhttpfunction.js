//import XMLHttpRequest from 'xmlhttprequest';
//var XMLHttpRequest = require('xmlhttprequest');
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

import XMLHttpRequest from 'xhr2';
class XhttpExecution {
constructor(method,url,body){
this.method=method;
this.url=url;
this.body=body;}

executeRequest(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if (this.readyState == 4 && this.status == 200){
            console.log(xhttp.responseText);
        }
    };
    if(this.method=='POST'){
    xhttp.open(this.method,this.url,true);
}
    else{
    xhttp.open(this.method,this.url,true);}
    xhttp.send();
}


}


export default XhttpExecution;