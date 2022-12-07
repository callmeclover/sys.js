class sys {
    #isUserRoot
    #password
    #passwordEnabled
    constructor() {

        // kinda important
        this.#isUserRoot = false
        this.#password = undefined
        this.#passwordEnabled = false
        
     this.saveFile = function(saved) {
        if (!(typeof saved == 'string' || typeof saved == 'object')) {
            console.error("Type error:\n" + typeof saved + " cannot be saved, try again with a blob, array, or string.")
            } else {
            console.log("Saving...\n" + "Saved Item:\n\n" + saved.valueOf())
            }
        }

        this.setPass = function() {
            if (this.#passwordEnabled == false) {
                    this.#password = prompt("No recurring password found.\nPlease input the new password.")
                this.#passwordEnabled = true
            } else {
                if (prompt("Password has already been set.\nPlease input the password to continue") == this.#password) {
                    this.#isUserRoot = true
                    this.#password = prompt("Access granted, user is root.\nPlease put in the new password.")
                }
            }
        }
        this.attemptRoot = function() {
            if (this.#passwordEnabled == false) {
                console.log("Password not enabled, user has been granted root.")
            } else {
                if (prompt("Password is enabled, enter password to gain root access.") == this.#password) {
                    this.#isUserRoot = true
                }
            }
        }
    }
}

export default sys
