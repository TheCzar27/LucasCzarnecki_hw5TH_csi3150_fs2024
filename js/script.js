function displayCars(cars) {
  const carListings = document.getElementById("carListings");
  carListings.innerHTML = ""; 

  if (cars.length === 0) {
    carListings.innerHTML =
      "<p>No cars match your criteria. Please try again.</p>";
    return;
  }

  cars.forEach((car) => {
    const carCard = document.createElement("div");
    carCard.className = "car-card";

    const img = document.createElement("img");
    img.src = car.image ? car.image : "../assets/default.jpg"; 
    img.alt = `${car.make} ${car.model}`;
    img.classList.add("car-image"); 

    const details = document.createElement("div");
    details.className = "details";
    details.innerHTML = `
      <h3>${car.year} ${car.make} ${car.model}</h3>
      <p>Mileage: ${car.mileage} miles</p>
      <p>Price: $${car.price}</p>
      <p>Color: ${car.color}</p>
      <p>Gas Mileage: ${car.gasMileage}</p>
    `;

    carCard.appendChild(img);
    carCard.appendChild(details);

    carListings.appendChild(carCard);
  });
}

function filterCars() {
  const minYear = parseInt(document.getElementById("minYear").value) || 2000;
  const maxYear = parseInt(document.getElementById("maxYear").value) || 2024;
  const maxMileage =
    parseInt(document.getElementById("maxMileage").value) || Infinity;
  const minPrice = parseInt(document.getElementById("minPrice").value) || 5000;
  const maxPrice = parseInt(document.getElementById("maxPrice").value) || 8000;
  const makes = Array.from(document.getElementById("make").selectedOptions).map(
    (option) => option.value
  );
  const colors = Array.from(
    document.getElementById("color").selectedOptions
  ).map((option) => option.value);

  const filteredCars = usedCars.filter((car) => {
    return (
      car.year >= minYear &&
      car.year <= maxYear &&
      car.mileage <= maxMileage &&
      car.price >= minPrice &&
      car.price <= maxPrice &&
      (makes.length === 0 || makes.includes(car.make)) &&
      (colors.length === 0 || colors.includes(car.color))
    );
  });

  displayCars(filteredCars);
}

displayCars(usedCars);
