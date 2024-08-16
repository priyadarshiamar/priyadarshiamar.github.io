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

// JavaScript to handle the expandable button for the first paper
document.addEventListener("DOMContentLoaded", function() {
    const expandBtn1 = document.getElementById('expand-btn-1');
    const abstractContent1 = document.getElementById('abstract-content-1');

    expandBtn1.addEventListener('click', function() {
        if (abstractContent1.style.display === "none" || abstractContent1.style.display === "") {
            abstractContent1.style.display = "block";
            expandBtn1.textContent = "Hide Abstract";
        } else {
            abstractContent1.style.display = "none";
            expandBtn1.textContent = "Show Abstract";
        }
    });

    // JavaScript to handle the expandable button for the second paper
    const expandBtn2 = document.getElementById('expand-btn-2');
    const abstractContent2 = document.getElementById('abstract-content-2');

    expandBtn2.addEventListener('click', function() {
        if (abstractContent2.style.display === "none" || abstractContent2.style.display === "") {
            abstractContent2.style.display = "block";
            expandBtn2.textContent = "Hide Abstract";
        } else {
            abstractContent2.style.display = "none";
            expandBtn2.textContent = "Show Abstract";
        }
    });
});
