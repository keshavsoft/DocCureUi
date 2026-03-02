document.addEventListener("DOMContentLoaded", () => {

    
    const params = new URLSearchParams(window.location.search);
    const doctorId = params.get("id");

   
    const doctors = JSON.parse(localStorage.getItem("doctors")) || [];

   
    const selectedDoctor = doctors.find(doc => doc.id == doctorId);

    if (!selectedDoctor) return;
    document.querySelector(".booking-doc-img img").src = selectedDoctor.img;

    document.querySelector(".booking-info h4 a").textContent = selectedDoctor.name;

    document.querySelector(".average-rating").textContent = selectedDoctor.rating;

    document.querySelector(".doc-location").innerHTML =
        `<i class="fas fa-map-marker-alt"></i> ${selectedDoctor.location}`;
});