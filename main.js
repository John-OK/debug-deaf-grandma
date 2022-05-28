let keepGoing = true //changed var name from keyword 'continue'

while ( keepGoing ) {

    let goodbyes = 0
    let userInput = prompt()

    if ( userInput = "" ) {
        alert("WHAT!?")
    }
    else if ( userInput.toUppercase != statement ) {
        alert("SPEAK UP, KID!")
    }
    else if ( statement.toUppercase == statement ) {
        alert('NO, NOT SINCE 1946!')
    }
    else if ( userinput == "GOODBYE!" ) {
        goodbyes + 1

        if ( goodbyes == 1 ) {
            alert("LEAVING SO SOON?")
        }
        else if ( goodbyes == 2 ) {
            alert("LATER, SKATER!")
            keep_going = false
        }
    }
}

