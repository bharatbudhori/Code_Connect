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
}

 function setUser (user){
  const docRef = db.collection("users").doc();
  docRef.set({
    email: user.email,
    password: user.password,
    name: user.name
  });
};
module.exports = { setUser };