const admin = require('firebase-admin');
const serviceAccount = require('./sparkleyk69-firebase-adminsdk-o37gv-90977cb945.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket:'gs://sparkleyk69.appspot.com'
});

const bucket = admin.storage().bucket();

module.exports = bucket;