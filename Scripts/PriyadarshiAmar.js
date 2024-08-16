function HideDivs()
{
    document.getElementById("divHome").style.display = "block";
    document.getElementById("divResearch").style.display = "none";
    document.getElementById("divTeaching").style.display = "none";
}

function SwitchPanes(pPaneID)
{
    var vPaneID = pPaneID;
    if (vPaneID == 'Home')
    {
        document.getElementById("divHome").style.display = "block";
        document.getElementById("divResearch").style.display = "none";
        document.getElementById("divTeaching").style.display = "none";
    }
    else if (vPaneID == 'Research')
    {
        document.getElementById("divHome").style.display = "none";
        document.getElementById("divResearch").style.display = "block";
        document.getElementById("divTeaching").style.display = "none";
    }
    else if (vPaneID == 'Teaching')
    {
        document.getElementById("divHome").style.display = "none";
        document.getElementById("divResearch").style.display = "none";
        document.getElementById("divTeaching").style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Select all buttons with the class 'expand-btn-inline'
    const expandButtons = document.querySelectorAll('.expand-btn-inline');

    // Iterate over each button and add a click event listener
    expandButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Find the next '.abstract-content-inline' element in the DOM hierarchy
            let abstractContent = button.nextElementSibling;

            // Check until we find the .abstract-content-inline or reach the end
            while (abstractContent && !abstractContent.classList.contains('abstract-content-inline')) {
                abstractContent = abstractContent.nextElementSibling;
            }

            // Toggle the display of the abstract content
            if (abstractContent.style.display === "none" || abstractContent.style.display === "") {
                abstractContent.style.display = "block";
                button.textContent = "Hide Abstract";
            } else {
                abstractContent.style.display = "none";
                button.textContent = "Show Abstract";
            }
        });
    });
});

