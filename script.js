const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const cpuResult = document.querySelector(".cpu_result img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image,index) => {
    image.addEventListener("click",(e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = "images/rock.png";
        result.textContent = "Wait..."

        // Loop through each option image again
        optionImages.forEach((image2,index2) => {
            // If the current index doesn't match teh clicked index remove the "active" class
            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start")

        // Set a timeout to delay the results
        let time = setTimeout(()=> {
            gameContainer.classList.remove("start")
            // Getting the source of the clicked option
            let imageSrc = e.target.querySelector("img").src;
            // Setting the user image input to the clicked option
            userResult.src = imageSrc;
            // Generate a random number between 0 and 2
            let randomNumber = Math.floor(Math.random() * 3);

            // Creating an array for the CPU image options
            let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"]
            cpuResult.src = cpuImages[randomNumber];

            // Assigning a letter value to the CPU image option
            let cpuValue = ["R", "P", "S"][randomNumber];
            // Assigning a letter value to the clicked option
            let userValue = ["R", "P", "S"][index];
            // Create an object with all possible outcomes
            let outcomes = {
                RR:"Draw",
                RP:"CPU",
                RS:"User",
                PP:"Draw",
                PR:"User",
                PS:"CPU",
                SS:"Draw",
                SR:"CPU",
                SP:"User"
            };

            // Look up the outcome value based on user and CPU options 
            let outComeValue = outcomes[userValue + cpuValue];

            // Display the results
            result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
          
        }, 2500);  
    });
});
