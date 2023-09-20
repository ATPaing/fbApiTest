window.fbAsyncInit = function() {
    FB.init({
        appId: '844256177365398',
        xfbml: true,
        version: 'v18.0'
    });
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function loginWithFacebook() {
    FB.login(function(response) {
        if (response.authResponse) {
            // The user is logged in
            console.log('user logged in')
        } else {
            // The user is not logged in
            console.log('use not logged in')
        } 
    });
}

function loginCallback(response) {
    if (response.authResponse) {
        // The user is logged in
        // Get the user's profile information
        FB.api('/me', function (response) {
            // The user's profile information is stored in the `response` object
            // You can use this information to log the user in to your app'
            console.log(response)
        })
    }
}