//expose our config directly to our application using modules


//using environmental variables to store API keys
var facebookId = process.env.FACEBOOK_ID;

var facebookSecret = process.env.FACEBOOK_SECRET;

module.exports = {
    'facebookAuth' : {
        'clientID'      : facebookId, // your App ID
        'clientSecret'  : facebookSecret, // your App Secret
        'callbackURL'   : 'http://localhost:3000/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:3000/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:3000/auth/google/callback'
    }
}