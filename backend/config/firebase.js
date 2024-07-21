require('dotenv').config();
const admin = require('firebase-admin');

const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_SDK_KEY);
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket:'gs://sparkleyk69.appspot.com'
});

const bucket = admin.storage().bucket();

module.exports = bucket;