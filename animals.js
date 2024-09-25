//  create the petsData array that stores objects that have pet information
const petsData = [
    {
      petName: "Stella",
      age: 7,
      weightInKilos: 24,
      breed: "Dalmation",
    },

    {
      petName: "Cody",
      age: 8,
      weightInKilos: 22,
      breed: "Corgi",
    },

    {
      petName: "Mango",
      age: 2,
      weightInKilos: 11,
      breed: "Persian",
    },

    {
      petName: "Lucy",
      age: 4,
      weightInKilos: 35,
      breed: "Ball Python",
    },
    
    {
      petName: "Buhmie",
      age: 1,
      weightInKilos: 28,
      breed: "Bull-dog",
    },
  ];


  // function is called upon once button is clicked, a bit confusing to know how to get button information
  //  but the actual use of arrays and displaying information was understood
  const showInfo = () => {
    // this line below I needed copilot for in order to know how to obtain input value
    let petNum = parseInt(document.getElementById('petNum').value);
    // Because it is 0 based, decrease the user input by 1 so the result matches their input
    petNum -= 1;
    let petStr = `You want to know about ${petsData[petNum].petName}? Sure thing! 
    Their age is ${petsData[petNum].age}, 
    their weight in Kilos is ${petsData[petNum].weightInKilos},
    and they are a ${petsData[petNum].breed}`
    let petInfo = document.querySelector('.selectedPetInfo');
    petInfo.innerHTML = `${petStr}`;
  };