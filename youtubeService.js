(function(){

  var service = function(){

    var GoogleAuth
    var SCOPE = 'https://www.googleapis.com/auth/youtube.force-ssl'

    function handleClientLoad() {
      // Load the API's client and auth2 modules.
      // Call the initClient function after the modules load.
      gapi.load('client:auth2', initClient);
    }

    function initClient() {
      // Retrieve the discovery document for version 3 of YouTube Data API.
      // In practice, your app can retrieve one or more discovery documents.
      var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest';

      // Initialize the gapi.client object, which app uses to make API requests.
      // Get API key and client ID from API Console.
      // 'scope' field specifies space-delimited list of access scopes.
      gapi.client.init({
          'apiKey': 'AIzaSyADdw-eh_i4CPfV4DdvPpAr2e15cLcPXrk',
          'discoveryDocs': [discoveryUrl],
          'clientId': '735906419587-8kffqu6phlj36ssrdh916lip9le7dofe.apps.googleusercontent.com',
          'scope': SCOPE
      }).then(function () {
        GoogleAuth = gapi.auth2.getAuthInstance();

        // Listen for sign-in state changes.
        GoogleAuth.isSignedIn.listen(updateSigninStatus);

        // Handle initial sign-in state. (Determine if user is already signed in.)
        var user = GoogleAuth.currentUser.get();
        setSigninStatus();

        // Call handleAuthClick function when user clicks on
        //      "Sign In/Authorize" button.
        $('#sign-in-or-out-button').click(function() {
          handleAuthClick();
        }); 
        $('#revoke-access-button').click(function() {
          revokeAccess();
        }); 
      });
    }

    function handleAuthClick() {
      if (GoogleAuth.isSignedIn.get()) {
        // User is authorized and has clicked 'Sign out' button.
        GoogleAuth.signOut();
      } else {
        // User is not signed in. Start Google auth flow.
        GoogleAuth.signIn();
      }
    }

    function revokeAccess() {
      GoogleAuth.disconnect();
    }

    function setSigninStatus(isSignedIn) {
      var user = GoogleAuth.currentUser.get();
      var isAuthorized = user.hasGrantedScopes(SCOPE);
      console.log(isAuthorized)
      if (isAuthorized) {
        console.log('You are currently signed in')
      } else {
        console.log('Signing in to Youtube')
        GoogleAuth.signIn()
      }
    }

    function updateSigninStatus(isSignedIn) {
      setSigninStatus();
    }

    function test() {

      var request = gapi.client.youtube.videos.list({'myRating': 'like', 'part': 'snippet,contentDetails,statistics'})
      request.execute(function(response) {
        return response
      })
    }

    function getChannel() {
        gapi.client.youtube.channels.list({
          'part': 'snippet,contentDetails,statistics',
          'forUsername': 'Philip.L.Pan'
        }).then(function(response) {
          var channel = response.result.items[0]
          console.log('This channel\'s ID is ' + channel.id + '. ' +
                    'Its title is \'' + channel.snippet.title + ', ' +
                    'and it has ' + channel.statistics.viewCount + ' views.')
        });
      }

    return{
      handleClientLoad: handleClientLoad,
      initClient: initClient,
      handleAuthClick: handleAuthClick,
      revokeAccess: revokeAccess,
      setSigninStatus: setSigninStatus,
      test: test,
      getChannel: getChannel,
      updateSigninStatus: updateSigninStatus
    }
  }

  var module = angular.module('mainApp')
  module.factory('yts', service)

}())