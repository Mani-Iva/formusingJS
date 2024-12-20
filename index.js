const nameInput=document.querySelector("#name");
const email=document.querySelector("#email");
const pwd=document.querySelector("#pwd");
const number=document.querySelector("#number");
const message=document.querySelector("#message");
const success=document.querySelector("#success");
const  errorNodes=document.querySelectorAll(".error");


function validateform()
{
    clearMessages();
    let errorflag=false;
    if(nameInput.value.length<1)
    {
        errorNodes[0].innerText="Name cannot be blank";
        nameInput.classList.add('error-border');
        errorflag=true;
    }
    if (email.value.length<1)
    {
        errorNodes[1].innerText="Email cannot be empty";
        email.classList.add('error-border');
        errorflag=true;
    }
    if(!emailIsvalid(email.value))
    {
        errorNodes[2].innerText="Invalid Email";
        email.classList.add('error-border');
        errorflag=true;
    }
    if (pwd.value.length<1)
        {
            errorNodes[3].innerText=" Enter Valid Password" ;
            pwd.classList.add('error-border');
            errorflag=true;
        }
        if (!pwdIsvalid(pwd.value))
            {
                errorNodes[4].innerText=" InValid Password" ;
                pwd.classList.add('error-border');
                errorflag=true;
            }
    if (number.value.length<10)
        {
            errorNodes[5].innerText="Enter Valid number ";
            number.classList.add('error-border');
            errorflag=true;
        }
    if (message.value.length<1)
    {
        errorNodes[6].innerText="Message cannot be blank";
        nameInput.classList.add('error-border');
        errorflag=true;
    }
    if(errorflag== false)
    {
        success.innerHTML="Form validation successfull";
    }
}
function emailIsvalid(email)
{
    let pattern= /\S+@\S+\.\S+/;
    return pattern.test(email);

}
function pwdIsvalid(Password)
{
    let pattern =/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    return pattern.test(Password);

}

function clearMessages()
{
    for (let i=0;i<errorNodes.length;i++)
    {
        errorNodes[i].innerText= " ";
    }
    success.innerText ="";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    pwd.classList.remove('error-border');
    number.classList.remove("error-border");
    message.classList.remove("error-border");

}