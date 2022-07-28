
const userList = ["Stephan", "Martmarié", "Charles", "Daniël", "Christian", "Nellie", "Jan", "Petro", "Christo", "Lia"];
var input = prompt("==========Menu==========\n1) Add three users\n2) Remove users\n3) Display all users\n4) Sort users");

userChoice();


function userChoice(){
    switch(input){
        //Add three users
        case '1':
        userOne = prompt("Add new user #1:");
        userTwo = prompt("Add new user #2");
        userThree = prompt("Add new user #3");

        userList.push(userOne, userTwo, userThree);
        console.log(userList);
        
        const newUsers = []

            break;

        //Remove users
        case '2':
      
            break;

        //Display all users
        case '3':
           
            break;

        //Sort users
        case '4':
         
            break;

        //Invalid Selection
        default:
            alert("Invalid selection");
            promptMenu();
            break;
    }
}

