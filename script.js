var config = {
    apiKey: "AIzaSyCV5q29hVUYx1VhNXhoZzaTd0X-g14iPdc",
    databaseURL: "https://portfolio-4c582.firebaseio.com/",
    projectId: "portfolio-4c582",
    storageBucket: "portfolio-4c582.appspot.com",
};
firebase.initializeApp(config);

window.firebaseAuth = firebase.auth;

////////////////////////////////////////////////////////////////////////////////////
var database = firebase.database();

var name = "";
var email = "";
var message = "";

    $("#submit").on("click", function(event) {
        event.preventDefault();
    
         name= $("#name-input").val();
         email= $("#email-input").val();
         message= $("#Textarea-input").val();

        console.log(name);
        console.log(email); 
        console.log(message); 
    
    
        // Push to Firebase
        database.ref("/contact").push({
            name: name, 
            email: email, 
            message: message,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        })
    }); 

    // database.ref("/Contact").on("child_added", function(snapshot) {
    //     // storing the snapshot.val() in a variable for convenience
    //     var sv = snapshot.val();
     
    //     // Console.loging the last user's data
    //     console.log(sv.name);
    //     console.log(sv.wins);p

    //$("#name-input").val()
   // $("#email-input").val()
    //$("#subject-input").val()
    //$("#message-input").val()

