function url()
{
    let url = 'https://localhost:7143/api/Item/SearchUser/'
    return url;
}

function getUser()
{
    let user = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    let fullurl = url();
    fullurl += user;


    let alertPlaceholder = document.getElementById('submit');
    alertPlaceholder.innerHTML = ""
    let xmlRequest = new XMLHttpRequest()
    xmlRequest.open('GET', fullurl);
    xmlRequest.send();
    xmlRequest.onreadystatechange = function(e)
    {
        if(this.readyState === 4 && this.status === 200)
        {
            let response = JSON.parse(this.responseText);
            let datauser = response[0].username;
            let datapass = response[0].password;


            if(datauser === user && datapass === pass)
            {
                console.log("Login successful!");
            }
            else
            {  
                console.log("login error!");
            }
            
        }
    }
}