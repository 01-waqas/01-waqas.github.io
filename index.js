// template_57z1ou7
//service_t486l7l
//4dyFUvZNbOogV6omJ

let isModalOpen = false




function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading")
    const success = document.querySelector(".modal__overlay--success")
    loading.classList += " modal__overlay--visible"
    emailjs
      .sendForm(
        "service_t486l7l",
        "template_57z1ou7",
        event.target,
        "4dyFUvZNbOogV6omJ"
      )
      .then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
      })
      .catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
          "The email service is temporarily unavailable. Please contact me directly on waqas.2001bfdd@gmail.com"
        );
      });
  }

  

  function toggleModal() {
    if (isModalOpen) {
      isModalOpen = false
      return document.body.classList.remove("modal--open")
    }
    isModalOpen = true
    document.body.classList += " modal--open"
    
  }

  
  



  

  