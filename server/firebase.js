const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter
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
  return docRef
    .set({
      email: user.email,
      password: user.password,
      name: user.name,
      createdAt: Timestamp.now(),
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
async function getProblems(){
  const snapshot = await db.collection("questions").get();
  return snapshot;
}
function setAllProblemsInFirebase() {
  const problems = [
    {
      id: 2,
      title: "Linear Search",
      description: "Given an array of integers nums and an integer target, return the index of the target if it exists in the array, otherwise return -1.",
      Input: "First Line contains one integer t - The number of test case.\nEach test case consists of two lines.\nFirst Line of each test case contains n,target - number of elements in arrayand the target value.\nSecond Line of each test case contains an integer array of n elements",
      Output: "For each test case output the index of the target if found, otherwise -1.",
      RunInput: "2\n4 11\n2 7 11 15\n9 20\n3 2 4 8 9 12 4 2 11",
      RunOutput: "2\n-1",
      SubmitInput: "5\n4 11\n2 7 11 15\n9 20\n3 2 4 8 9 12 4 2 11\n10 19\n1 2 3 4 5 6 7 8 9 10\n5 -8\n-1 -2 -3 -4 -5\n4 5\n2 5 5 11",
      SubmitOutput: "2\n-1\n-1\n-1\n1",
      difficulty: "Easy",
      video: "https://www.youtube.com/watch?v=oZZ8gNP4V1g",
      tags: ["Array", "Search"],
      Explanation: "In first test case, 9 is found at index 1.\nIn the second test case, 20 is not found in the array."
    },
    // Add more problem objects as needed
  ];

 

  // Reference to Firestore collection
  const collectionRef = db.collection('questions'); // Replace with your Firestore collection name

  // Add each problem object to Firestore collection
  problems.forEach(problem => {
    collectionRef.add({
      id: problem.id,
      title: problem.title,
      description: problem.description,
      input: problem.Input,
      output: problem.Output,
      runInput: problem.RunInput,
      runOutput: problem.RunOutput,
      submitInput: problem.SubmitInput,
      submitOutput: problem.SubmitOutput,
      difficulty: problem.difficulty,
      video: problem.video,
      tags: problem.tags,
      explanation: problem.Explanation
    })
    .then(docRef => {
      console.log('Document written with ID:', docRef.id);
    })
    .catch(error => {
      console.error('Error adding document:', error);
    });
  });
}



module.exports = { setUser, checkEmail,setAllProblemsInFirebase,getProblems};
