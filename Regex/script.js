let selector=document.getElementById('selector');
selector.addEventListener('change',selectOption);

function selectOption(e)
{
    let re;
    let input=prompt('Enter input');
 
    let option=e.target.value;
    switch(option){
    case "email":
        re= /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/;
        
        if(re.test(input))
        {
            alert("Valid Email");
            break;
        }
        else
        {
            alert("Not A Valid Email");
            break;
        }    


    case "postcode":
        re = /^[0-9]{4}$/;      
        if(re.test(input))
        {
            alert("Valid Post Code");
            break;
        }
        else
        {
            alert("Not A Valid Post Code");
            break;
        }

    case "phone":
    re = /^\+?(88)?01[0-9]{9}$/;     
    
    if(re.test(input))
    {
        alert("Valid Phone Number");
        break;
    }
    else
    {
        alert("Not A Valid Phone Number");
        break;
    }

    }

}
