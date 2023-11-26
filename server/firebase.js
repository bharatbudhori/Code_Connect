const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter,
} = require("firebase-admin/firestore");

const serviceAccount = require("./serviceAccountKey.json");

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

async function getData() {
  const snapshot = await db.collection("users").get();
  snapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
  });
}

async function setData() {
  const docRef = db.collection("users").doc();

  await docRef.set({
    first: "Ada",
    last: "Lovelace",
    born: 1815,
  });
  getData();
  return true; // User added successfully
}

function setUser(user) {
  const docRef = db.collection("users").doc();
  
  // Return the promise directly
  return docRef.set({
    email: user.email,
    password: user.password,
    name: user.name,
  })
  .then(() => {
    console.log("User added to firebase");
    return true;
  })
  .catch((error) => {
    console.log("Error adding user to firebase: ", error);
    return false, error;
  });
}


//check if email already exists
async function checkEmail(email) {
  const snapshot = await db.collection("users").get();

  // Use for...of loop to iterate through asynchronous data
  for (const doc of snapshot.docs) {
    if (doc.data().email === email) {
      return [true, doc.data().password];
    }
  }

  return false;
}

module.exports = { setUser, checkEmail };
