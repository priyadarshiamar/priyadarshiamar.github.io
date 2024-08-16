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

// JavaScript to handle the expandable button
document.addEventListener("DOMContentLoaded", function() {
    const expandBtn = document.querySelector('.expand-btn');
    const abstractContent = document.querySelector('.abstract-content');

    expandBtn.addEventListener('click', function() {
        if (abstractContent.style.display === "none" || abstractContent.style.display === "") {
            abstractContent.style.display = "block";
            expandBtn.textContent = "Hide Abstract";
        } else {
            abstractContent.style.display = "none";
            expandBtn.textContent = "Show Abstract";
        }
    });
});
