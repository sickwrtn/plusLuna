console.log(chrome);
console.log(chrome.webRequest);

chrome.webRequest.onBeforeRequest.addListener((target)=>{
    console.log("Request URL:", target.url);
    console.log("Request Method:", target.method);
    console.log("Reqest Body:", target.requestBody);
},{ urls: ["https://lunatalk.chat/*"] },["requestBody"]);