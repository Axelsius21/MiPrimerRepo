(function() {
    emailjs.init("6QEHhOiSdN0RN4EeO"); // clave publica
    console.log("EmailJS cargado:", emailjs);
})();

function enviarcorreo(event) {
    event.preventDefault(); // Esto previene que el envío del formulario sea de la forma tradicional

    var param = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        sugerencia: document.getElementById("sugerencia").value
    };
    var serviceId = "service_rrwlmam"; // Id de servicio desde EmailJS
    var templeId = "template_0dkp81v"; // Id de plantilla desde EmailJS

    //Se utiliza console.log para verificar si emailjs está disponible antes de usarlo:
    console.log("Envío de correo electrónico con parámetros:", param); 
    emailjs.send(serviceId, templeId, param) // Envía el correo
    .then(res => {
        alert("ENVIADO CORRECTAMENTE");
    })
    .catch(error => {
        console.error("Error al enviar el correo:", error);
        alert("Error al enviar el correo. Por favor, inténtelo de nuevo.");
    });
}
