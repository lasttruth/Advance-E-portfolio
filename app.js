let contrastToggle = false;




function toggleContrast(){
    contrastToggle = !contrastToggle;
    if(contrastToggle){
        document.body.classList += " dark-theme"
    }
    else[
        document.body.classList.remove("dark-theme")
    ]
}
function contact(event) {
  event.preventDefault();

  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs.sendForm(
    "service_uhxbhdw",
    "template_r3jmnwd",
    event.target,
    "X0sprH3IfwIu2Slsk"
  ).then(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
  }).catch(() => {
    loading.classList.remove("modal__overlay--visible");
    alert(
        "the email service is temporarily unvailble. Please contact me directly at robindoirin@gmail.com"
    );
  })
}

let isModalOpen = false
function toggleModal(){
    if(isModalOpen){
        isModalOpen= false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
}