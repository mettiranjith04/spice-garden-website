const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        const foodName = button.getAttribute("data-food");

        const message =
            "Hello Spice Garden! I would like to order " + foodName + ".";

        const phoneNumber = "919876543210";

        const whatsappURL =
            "https://wa.me/" +
            phoneNumber +
            "?text=" +
            encodeURIComponent(message);

        window.open(whatsappURL, "_blank");
    });

});