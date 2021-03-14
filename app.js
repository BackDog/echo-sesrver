// https://www.5etop.com/api/system/get.do?lang=en

// api url 
const api_url =  
      "https://www.5etop.com/api/system/get.do?lang=en"; 
  
// Defining async function 
async function getapi(url) { 
    
    // Storing response 
    const response = await fetch(url); 
    
    // Storing data in form of JSON 
    var data = await response.json(); 
    console.log(data); 
    if (response) { 
        hideloader(); 
    } 
    show(data); 
}

// Function to define innerHTML for HTML table 
function show(data) { 
  console.log(data);
} 

// Calling that async function 
getapi(api_url); 
