function openLoginPopup() {
    var url = 'login.html';//website/login.html
    var width = 400; // Width of the popup window
    var height = 600; // Height of the popup window
    var left = (screen.width - width) / 2;
    var top = (screen.height - height) / 4;

    var params = 'width=' + width + ', height=' + height;
    params += ', top=' + top + ', left=' + left;
    params += ', directories=no';
    params += ', location=no';
    params += ', menubar=no';
    params += ', resizable=no';
    params += ', scrollbars=no';
    params += ', status=no';
    params += ', toolbar=no';

    newWindow = window.open(url, 'Sign Up', params);
    if (window.focus) {
        newWindow.focus();
    } // URL of your login page
    // ... rest of the code remains same as before for login popup
}

function openSignupPopup() {
    var url = 'signup.html'; // URL of your signup page
    var width = 400; // Width of the popup window
    var height = 600; // Height of the popup window
    var left = (screen.width - width) / 2;
    var top = (screen.height - height) / 4;

    var params = 'width=' + width + ', height=' + height;
    params += ', top=' + top + ', left=' + left;
    params += ', directories=no';
    params += ', location=no';
    params += ', menubar=no';
    params += ', resizable=no';
    params += ', scrollbars=no';
    params += ', status=no';
    params += ', toolbar=no';

    newWindow = window.open(url, 'Sign Up', params);
    if (window.focus) {
        newWindow.focus();
    }
}
