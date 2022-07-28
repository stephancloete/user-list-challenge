
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
            break;

        //Remove users
        case '2':

            toRemove = prompt("Type the index number of the user you would like to remove:");
            var removed = userList.splice(toRemove, 1);
            console.log("Removed: " + removed);
            console.log("Appended list: " + userList);
            break;

        //Display all users
        case '3':
            let result = '';
            
            for (let i = 0; i < userList.length; i++) {
            result = result.concat(userList[i]);
            }

            document.getElementById("join").innerHTML = result;
            
            break;
3
        //Sort users
        case '4':
            arr = userList.sort((a, b) => a.localeCompare(b));
            console.log(arr);
            break;

        //Diplay Invalid Selection
        default:
            alert("Invalid selection");
            break;
    }
}

