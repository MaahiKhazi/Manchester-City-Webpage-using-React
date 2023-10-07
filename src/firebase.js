import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
//import { cityDb } from './temp/m-city-export';

const firebaseConfig = {
  apiKey: "AIzaSyC6fxdULYwwPSbwbXNkRaYGdge_wa889Hk",
  authDomain: "mancity-66696.firebaseapp.com",
  projectId: "mancity-66696",
  storageBucket: "mancity-66696.appspot.com",
  messagingSenderId: "605970622996",
  appId: "1:605970622996:web:edb2b4b6690beb5af21501",
  measurementId: "G-7K85QQS8HY"
};
firebase.initializeApp(firebaseConfig);
const DB = firebase.firestore();
const matchesCollection = DB.collection('matches');
const playersCollection = DB.collection('players');
const positionsCollection = DB.collection('positions');
const promotionsCollection = DB.collection('promotions');
const teamsCollection = DB.collection('teams');

// cityDb.matches.forEach(item => {
//   matchesCollection.add(item)
// });

// cityDb.players.forEach(item => {
//   playersCollection.add(item)
// });

// cityDb.positions.forEach(item => {
//   positionsCollection.add(item)
// });

// cityDb.promotions.forEach(item => {
//   promotionsCollection.add(item)
// });

// cityDb.teams.forEach(item => {
//   teamsCollection.add(item)
// });

export {
    firebase,
    matchesCollection,
    playersCollection,
    positionsCollection,
    promotionsCollection,
    teamsCollection
}
