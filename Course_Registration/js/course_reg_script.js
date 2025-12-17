// Auto-calculate total fee
let subjects = document.querySelectorAll(".subject");
let totalBox = document.getElementById("total");


subjects.forEach(item => {
    item.addEventListener("change", () => {
        let total = 0;

        subjects.forEach(sub => {
            if (sub.checked) {
                total += parseInt(sub.value);
            }
        });

        totalBox.innerText = "₹" + total;
    });
});

document.getElementById("name").addEventListener("input", function () {
    let val = this.value;
    if (val.length > 0) {
        this.value = val.charAt(0).toUpperCase() + val.slice(1);
    }
});

// Optional: form submit
document.getElementById("regForm").addEventListener("submit", function (e) {
    e.preventDefault();
    e.preventDefault();

    let selectedSubjects = [];
    let totalFee = 0;
    let cnt = 0;
    subjects.forEach(sub => {
        if (sub.checked) {
            cnt++;
            // Get subject name from the label text
            let subjectName = sub.parentElement.innerText.trim();
            selectedSubjects.push(cnt + "." + subjectName);

            totalFee += parseInt(sub.value);
        }
    });

    if (selectedSubjects.length === 0) {
        document.getElementById("result").style.display = "block";
        document.getElementById("result").innerHTML =
            "<b>Please select at least one subject.</b>";
        return;
    }

    let studentName = document.getElementById("name").value;

    let resultBox = document.getElementById("result");
    resultBox.style.display = "block";

    resultBox.innerHTML =
        "<h3>Registration Summary</h3>" +
        "<p><b>Student Name:</b> " + studentName + "</p>" +
        "<p><b>Selected Subjects:</b><br>" +
        selectedSubjects.join("<br>") + "</p>" +
        "<p><b>Total Fee:</b> ₹" + totalFee + "</p>";
});