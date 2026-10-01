import "./nav.js";
const getString = window.location.search;
const myInfo = new URLSearchParams(getString);
console.log(myInfo);

document.querySelector("#results").innerHTML = `
<h2>Your Information</h2>
<p>Name:  ${myInfo.get("name")}</p>
            <p>Email: ${myInfo.get("email")}</p>
            <p>Message: ${myInfo.get("message")}</p>
            <p>Interest: ${myInfo.get("interest")}</p>
            <p>Want Updates?: ${myInfo.get("updates")}</p>
         
`;
