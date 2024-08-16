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

// JavaScript to handle the expandable button (inline version)
document.addEventListener("DOMContentLoaded", function() {
    const expandBtnInline = document.querySelector('.expand-btn-inline');
    const abstractContentInline = document.querySelector('.abstract-content-inline');

    expandBtnInline.addEventListener('click', function() {
        if (abstractContentInline.style.display === "none" || abstractContentInline.style.display === "") {
            abstractContentInline.style.display = "block";
            expandBtnInline.textContent = "Hide Abstract";
        } else {
            abstractContentInline.style.display = "none";
            expandBtnInline.textContent = "Show Abstract";
        }
    });
});

