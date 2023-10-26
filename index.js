let forum1 = document.getElementsByClassName("forum");


// let averageSP = 1;

// let heading2 = document.createElement("h2")
// heading2.innerHTML = "The average starting price is: $" + averageSP;

let freelancer = [
  {
    name: "Alice",
    occupation: "Writer",
    startingPrice: 30,
  },
  {
    name: "Bob",
    occupation: "Teacher",
    startingPrice: 50,
  },
  {
    name: "Carol",
    occupation: "Programmer",
    startingPrice: 70,
  }
];

function renderFreelancers () {

  let forum1 = document.getElementById("forum");

  for (let i = 0; i < freelancer.length; i++){
    let currentFreelancer = freelancer[i];

    let freelancerDiv = document.createElement("div")
    freelancerDiv.className = "info"

    freelancerDiv.innerHTML = ` <h2>Name: ${currentFreelancer.name}</h2>
                                <h2>Occupation: ${currentFreelancer.occupation}</h2>
                                <h2>Starting Price: ${currentFreelancer.startingPrice}</h2> `

    forum1.appendChild(freelancerDiv);

  }

}

renderFreelancers();





