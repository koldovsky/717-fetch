(function () {
    const form = document.getElementById("contact-form-nodejs");
  
    async function handleSubmit(event) {
      event.preventDefault();
      const status = document.getElementById("contact-form-status");
      fetch(event.target.action, {
        method: form.method,
        body: JSON.stringify({
            email: document.querySelector('#contact-form-nodejs > input[type=email]:nth-child(3)').value,
            message: document.querySelector('#contact-form-nodejs > input[type=text]:nth-child(5)').value
        }),
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            form.reset();
          } else {
            response.json().then((data) => {
              if (Object.hasOwn(data, "errors")) {
                status.innerHTML = data["errors"]
                  .map((error) => error["message"])
                  .join(", ");
              } else {
                status.innerHTML =
                  "Oops! There was a problem submitting your form";
              }
            });
          }
        })
        .catch((error) => {
          status.innerHTML = "Oops! There was a problem submitting your form";
        });
    }
    form.addEventListener("submit", handleSubmit);
  })();