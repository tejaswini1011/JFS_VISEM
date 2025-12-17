let selectedName = "";  // Stores which name was selected

function showDetails() {
    // Save selected name only
    selectedName = document.getElementById("nameSelect").value;

    let photo = document.getElementById("photo");
    let info = document.getElementById("infoText");

    // Hide image until OK button is clicked
    photo.style.display = "none";

    if (selectedName === "") {
        info.innerHTML = "Please select a person from the dropdown.";
    } else {
        info.innerHTML = "Click OK to display.";
    }
}

function openPhoto() {

    if (selectedName === "") {
        alert("Please select a name first!");
        return;
    }

    // -----------------------------
    // ⭐ CONFIRMATION BOX
    // -----------------------------
    let answer = confirm("Are You Confirm");

    if (!answer) {
        // If NO → reset message and hide image
        document.getElementById("photo").style.display = "none";
        document.getElementById("infoText").innerHTML = "Please select a person from the dropdown.";
        return;
    }
    // If YES → show the image and info


    let photo = document.getElementById("photo");
    let info = document.getElementById("infoText");

    // Remove old special frames
    photo.classList.remove("photo-james");
    photo.classList.remove("photo-james-blue");

    // Mapping names → photo paths
    let photos = {
        "guido": "images/guido.jpg",
        "dennis": "images/dennis.jpg",
        "james": "images/james.jpg",
        "stroustrup": "images/stroustrup.jpg",
        "juergen": "images/juergen.jpg",
        "krishna": "images/krishna.jpg",

        "bill_gates": "images/bill_gates.jpg",
        "steve_jobs": "images/steve_jobs.jpg",
        "elon_musk": "images/elon_musk.jpg",
        "zukerberg": "images/zukerberg.jpg",
        "linus_torvalds": "images/linus_torvalds.jpeg",
        "tim_berner": "images/tim_berner.jpg",
        "Sundar_Pichai": "images/Sundar_Pichai.jpg",
        "satyanadella": "images/satyanadella.jpg",
        "AdaLovelace": "images/AdaLovelace.jpg",
        "madhu": "images/madhu.jpg"
    };

    // Mapping names → details
    let details = {
        "guido": "Guido van Rossum created Python in 1991.",
        "dennis": "Dennis Ritchie developed C and co-created UNIX.",
        "james": "James Gosling invented Java in 1995.",
        "stroustrup": "Bjarne Stroustrup created C++.",
        "juergen": "Juergen Hoeller is the co-creator of Spring Framework.",
        "krishna": "E Krishna Rao Patro — JFS Trainer.",
        "madhu": "B. Madhusudhan Rao — JFS Trainer.",
        "bill_gates": "Bill Gates co-founded Microsoft.",
        "steve_jobs": "Steve Jobs co-founded Apple.",
        "elon_musk": "Elon Musk leads Tesla & SpaceX.",
        "zukerberg": "Mark Zuckerberg founded Facebook.",
        "linus_torvalds": "Linus Torvalds created Linux.",
        "tim_berner": "Tim Berners-Lee invented the World Wide Web.",
        "Sundar_Pichai": "Sundar Pichai is the CEO of Google.",
        "satyanadella": "Satya Nadella is the CEO of Microsoft.",
        "AdaLovelace": "Ada Lovelace was the first computer programmer."
    };

    // Set image + info
    photo.src = photos[selectedName];
    photo.style.display = "block";
    info.innerHTML = details[selectedName];

    // Special frame for James
    if (selectedName === "james") {
        photo.classList.add("photo-james");
        photo.classList.add("photo-james-blue");
    }
}
