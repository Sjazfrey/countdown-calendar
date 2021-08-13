
const calendarContainer = document.querySelector(".container");

const calendarDays = 25;
//function to open door and coresponding door will open path function to line 26 imagesPath correct url
const openDoor = (path, event) => {
    event.target.parentNode.style.backgroundImage = `url(${path})`;
    event.target.style.opacity = "0";
   
}

const createCalendar = () => {
    let image = ["gif", "jpeg", "jpeg", "jpeg", "gif", "jpeg", "jpeg", "gif", "jpeg", "gif", "jpeg", "jpeg", "gif", "jpeg", "gif", "jpeg", "jpeg", "gif", "jpeg", "gif", "jpeg", "png", "gif", "jpeg", "jpeg"]
    for(let i = 0; i < calendarDays; i++) {
        const calendarDoor = document.createElement("div");
        const calendarDoorText = document.createElement("div");

        calendarDoor.classList.add("image" +i);
        calendarDoor.style.gridArea = "d" + (i + 1);
        calendarContainer.appendChild(calendarDoor);

        calendarDoorText.classList.add("text");        
        calendarDoorText.innerHTML = i + 1;
        calendarDoor.appendChild(calendarDoorText);

        imagesNumbers = i + 1;
        //diplay images from for loop 
        let imagesPath = `./images/image${imagesNumbers}.${image[i]}`;

        //door open with click on.   bind method pass to line 24 then to the function on line 7
        calendarDoorText.addEventListener("click", openDoor.bind(null, imagesPath));



    }
}

createCalendar();
