var fs=require("fs")
var firebase = require('firebase');
var config = {
    apiKey: "AIzaSyCkzkJ5g2e-tIBC2m5xfZXpEU8nLB5Fu5I",
    authDomain: "risk-map-17893.firebaseapp.com",
    databaseURL: "https://risk-map-17893.firebaseio.com",
    projectId: "risk-map-17893",
    storageBucket: "risk-map-17893.appspot.com",
    messagingSenderId: "110460409791"
  };
  firebase.initializeApp(config);



db=firebase.database()

 tw_dataset=[]
 var leadsRef = db.ref('/');
leadsRef.on('value', function(snapshot) {
     snapshot.forEach(function(childSnapshot) {
       var childData = childSnapshot.val();
       console.log(childData)
       tw_dataset=childData
    //   tw_dataset.push(childData)
      
     });

     json_data={
        "tw_messages":tw_dataset
    }
    var json = JSON.stringify(json_data);
    //write the data in json file
    fs.writeFile('./sampledata.json', json, 'utf8',(err)=>{


    })
     
    console.log("data has been written sucessfully")
     })