// ADMIN SETTING: change this to any six-digit code you choose.
const ACCESS_CODE = "191630";
const form=document.getElementById("gate"), boxes=[...document.querySelectorAll(".digits input")], msg=document.getElementById("msg");
boxes.forEach((box,i)=>{box.addEventListener("input",()=>{box.value=box.value.replace(/\\D/g,"").slice(-1);if(box.value&&i<5)boxes[i+1].focus()});box.addEventListener("keydown",e=>{if(e.key==="Backspace"&&!box.value&&i>0)boxes[i-1].focus()})});
form.addEventListener("submit",e=>{e.preventDefault();const code=boxes.map(x=>x.value).join("");if(code.length!==6){msg.textContent="Enter all six digits.";return}if(code!==ACCESS_CODE){msg.textContent="Incorrect code. Ask the quiz administrator.";boxes.forEach(x=>x.value="");boxes[0].focus();return}location.href="quiz.html"});
// Note: a password stored in client-side JavaScript can be discovered. Use server-side authentication for real access control.
