document.addEventListener("DOMContentLoaded", function() {
    const creatorButton = document.getElementById("creator-button");
    const viewerButton = document.getElementById("viewer-button");
    const frame1 = document.getElementById("frame-1");
    const frame2 = document.getElementById("frame-2");
    const frame3 = document.getElementById("frame-3");
    const frame4 = document.getElementById("frame-4");
    const roleTitle = document.getElementById("role-title");
    const form = document.getElementById("subscription-form");
    const backIcon = document.getElementById("back-icon");
    frame1.classList.add("rise-up");

    function selectButton(selectedButton, otherButton) {
        selectedButton.classList.add("selected");
        otherButton.classList.remove("selected");
    }

    function showFrame2(role) {
        frame1.style.display = "none";
        frame2.style.display = "flex";
        roleTitle.textContent = `${role}`;
        if (role === "Viewer") {
            frame2.style.backgroundColor = "#221426";
        } else {
            frame2.style.backgroundColor = "#1D1340";
        }
    }

    function showFrame3() {
        frame2.style.display = "none";
        frame3.style.display = "flex";
    }

    function showFrame4() {
        frame3.style.display = "none";
        frame4.style.display = "flex";
    }

    function resetToFrame1() {
        frame1.style.display = "flex";
        frame2.style.display = "none";
        frame3.style.display = "none";
        frame4.style.display = "none";
        form.reset();
    }

    creatorButton.addEventListener("mouseover", function() {
        if (!creatorButton.classList.contains("selected")) {
            selectButton(creatorButton, viewerButton);
        }
    });

    viewerButton.addEventListener("mouseover", function() {
        if (!viewerButton.classList.contains("selected")) {
            selectButton(viewerButton, creatorButton);
        }
    });

    creatorButton.addEventListener("click", function() {
        selectButton(creatorButton, viewerButton);
        showFrame2("Content Creator");
    });

    viewerButton.addEventListener("click", function() {
        selectButton(viewerButton, creatorButton);
        showFrame2("Viewer");
    });

    backIcon.addEventListener("click", function() {
        frame2.style.display = "none";
        frame1.style.display = "flex";
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const day = document.getElementById("day").value;
        const month = document.getElementById("month").value;
        const year = document.getElementById("year").value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const terms = document.getElementById("terms").checked;

        function isNameValid(name) {
            for (let i = 0; i < name.length; i++) {
                const char = name[i];
                if (!((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || char === ' ')) {
                    return false;
                }
            }
            return true;
        }

        function isNameNotEmpty(name) {
            return name.trim().length > 0;
        }

        if (!isNameNotEmpty(name)) {
            alert("Name cannot be empty.");
            return;
        } else if (!isNameValid(name)) {
            alert("Name must consist of alphabetic characters only.");
            return;
        }

        if (!email.endsWith("@gmail.com")) {
            alert("You must use a Google account email.");
            return;
        }

        if (isNaN(day) || day < 1 || day > 31 || isNaN(month) || month < 1 || month > 12 || isNaN(year)) {
            alert("Invalid date.");
            return false;
        }

        function isAgeValid(day, month, year) {
            const today = new Date();
            const birthDate = new Date(year, month - 1, day);
    
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
    
            return age >= 17;
        }

        if (!isAgeValid(day, month, year)) {
            alert("You must be 17 years old or older.");
            return false;
        }

        if (!gender) {
            alert("You must select a gender.");
            return;
        }

        if (!terms) {
            alert("You must agree to the terms and conditions.");
            return;
        }

        showFrame3();
    });

    document.getElementById("confirm-yes").addEventListener("click", function() {
        showFrame4();
    });

    document.getElementById("confirm-no").addEventListener("click", function() {
        frame3.style.display = "none";
        frame2.style.display = "flex";
    });

    document.getElementById("success-okay").addEventListener("click", function() {
        resetToFrame1();
    });
});
