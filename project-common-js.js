function _cmnRemoveAllErrorMessage()
{
    var allErrorBorder = document.getElementsByClassName('tool-error-border');
	var allErrorMessage = document.getElementsByClassName('tool-error-message');
	var i;
    for(i = (allErrorBorder.length) - 1; i>=0; i--)
    {
        allErrorBorder[i].classList.remove("tool-error-border");
    }
    for(i = (allErrorMessage.length) - 1; i>=0; i--)
    {
        allErrorMessage[i].remove();
    }	  
}
function _cmnShowErrorMessageBottomOfTheInputField(fieldID,errorMessage)
{
    var inputField = document.getElementById(fieldID);   
    inputField.classList.add("tool-error-border"); 
    inputField.focus(); 
    var errorMessageElement = document.createElement("p");
    errorMessageElement.innerHTML = errorMessage;
    errorMessageElement.classList.add("tool-error-message");
    inputField.parentNode.insertBefore(errorMessageElement, inputField.nextSibling);
}
function _cmnHideElement(elementId)
{
    var displayProperty = document.getElementById(elementId).style.display;
    if(displayProperty != 'none')
    {
        document.getElementById(elementId).style.display = "none";
    }
}
function _cmnShowElement(elementId, givenDisplayProperty)
{
    var displayProperty = document.getElementById(elementId).style.display;
    if(displayProperty != givenDisplayProperty)
    {
        document.getElementById(elementId).style.display = givenDisplayProperty;
    }
}