/* jshint esversion: 6, jquery: true */
/* Guidance on setting up the email service provided by EmailJS - https://www.emailjs.com/ 
   Includes sample testing code at https://jsfiddle.net/api/post/library/pure/ */
/* Credit: Stack Overflow for opening a modal using jQuery - https://stackoverflow.com/questions/13183630/how-to-open-a-bootstrap-modal-window-using-jquery */

const btn = document.getElementById("button");
const contactForm = document.getElementById("form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent reload

    btn.value = "Sending...";

    const serviceID = "gmail";
    const templateID = "around-the-grounds";

    emailjs.sendForm(serviceID, templateID, this).then(
        function (response) {
            console.log("Success", response.status, response.text);
            $("#email-success").modal("show");
            btn.value = "Send";
            resetForm();
        },
        function (error) {
            console.log(JSON.stringify(error));
            $("#email-fail").modal("show");
            btn.value = "Send";
        }
    );

    return false; // prevents the page from refreshing when the form is submitted
});
// Reset the form fields to original default values
function resetForm() {
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("email-address").value = "";
    document.getElementById("tours").value = "Which stadium/tour are you interested in?";
    document.getElementById("message").value = "";
}
