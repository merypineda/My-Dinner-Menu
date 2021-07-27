function dinner() {
    const yourMainMenu = [
      {
        name: "hamburgur",
        price: 10
      },
  
      {
        name: "pasta",
        price: 12
      },
  
      {
        name: "rice",
        price: 11
      }
    ];
  
    const sideMenu = [
      {
        name: "saled",
        price: 5
      },
  
      {
        name: "soup",
        price: 4
      },
  
      {
        name: "fries",
        price: 3
      },
  
      {
        name: "sprite",
        price: 2
      },
  
      {
        name: "orange",
        price: 1
      },
  
      {
        name: "tots",
        price: 3
      }
    ];
  
    function waitress() {
      let waitressComments = [
        "Excellent choice on your first day",
        "Wow! I was going to recomend that",
        "Great choice! This is one of our best choices"
      ];
  
      let random = Math.floor(Math.random() * 3);
      waitressComment = waitressComments[random];
  
      return waitressComment;
    }
  
    waitress();
  
    function menuOrder() {
      let firstChoice = prompt(
        "What will you be ordering today? \nMain Menu \n Hamburgur: 10.00 \n Pasta: 12.00 \n Rice: 11.00",
        "Enter a choice"
      );
      let entrieOne = `You picked ${firstChoice}. ${waitress()}.`;
  
      if (firstChoice == "hamburgur") {
        console.log(`${entrieOne} The price for the ${firstChoice} is $10.00`);
      } else if (firstChoice == "pasta") {
        console.log(`${entrieOne} The price for the ${firstChoice}  is $12.00`);
      } else if (firstChoice == "rice") {
        console.log(`${entrieOne} The price for the ${firstChoice}  is $11.00`);
      } else if (firstChoice !== yourMainMenu) {
        console.log(`Sorry! ${firstChoice} is not on the Menu`);
      }
  
      let secondChoice = prompt(
        "Choose the Side Menu? \nSide Menu \n Saled: 5.00 \n Soup: 4.00 \n Fries: 3.00",
        "Enter a choice"
      );
  
      let entrieTwo = `${waitress()}. You picked ${secondChoice}.`;
  
      if (secondChoice == "saled") {
        console.log(`${entrieTwo} The price for ${secondChoice} $5.00`);
      } else if (secondChoice == "soup") {
        console.log(`${entrieTwo} The price for ${secondChoice} is $4.00`);
      } else if (secondChoice == "fries") {
        console.log(`${entrieTwo} The price for ${secondChoice} is $3.00`);
      } else if (secondChoice !== sideMenu) {
        console.log(`Sorry! ${secondChoice} its not on the Menu`);
      }
  
      let thirdChoice = prompt(
        "What is your last choice? \nSide Menu \n Sprite: 2.00 \n Orange: 1.00 \n Tots: 3.00",
        "Enter a choice"
      );
  
      let entrieThree = `${waitress()}. You picked ${thirdChoice}.`;
      // console.log(entrieThree);
  
      if (thirdChoice == "sprite") {
        console.log(`${entrieThree}  The price for ${thirdChoice} $5.00`);
      } else if (thirdChoice == "orange") {
        console.log(`${entrieThree}  The price for $${thirdChoice} is $4.00`);
      } else if (thirdChoice == "tots") {
        console.log(`${entrieThree} The price for $${thirdChoice} is $3.00`);
      } else if (thirdChoice !== sideMenu) {
        console.log(`Sorry! ${thirdChoice} is not on the Menu`);
      }
  
      let totalPrice = yourMainMenu
        .filter((item) => item.name === firstChoice)
        .reduce((accumulator, item) => {
          return accumulator + item.price;
        }, 0);
      
     
  
      let totalPricetwo = sideMenu
        .filter((item) => item.name === secondChoice || item.name === thirdChoice)
        .reduce((accumulator, item) => {
          return accumulator + item.price;
        }, 0);
  
      let totalSum = totalPrice + totalPricetwo;
  
      let paymentBill = `The total of your order today is ${totalSum}`;
      alert(paymentBill);
      console.log(paymentBill);
    }
  
    menuOrder();
  }
  
  dinner();
  