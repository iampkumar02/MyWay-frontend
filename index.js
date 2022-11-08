const apiUrl = "http://localhost:8000";

const submitForm = document.querySelector(".form");

submitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const sendquery = document.querySelector("#query");
    const sendemail = document.querySelector("#sendemail");

    const query = sendquery.value;
    const email = sendemail.value;

    fetch(`${apiUrl}/sendquery`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: query, email: email }),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            alert("Error while sending query.... try again!");
            console.log(err);
        })
})