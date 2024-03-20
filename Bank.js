class Bank {
    constructor(name, password){
        this.name = name
        this.password = password
        this.balance = 0.0
        this.accountBalance = 123456789
    }
    balance(){
        return this.balance
    }
    name(){
        return this.name;
    }
    password(){
        return this.password
    }
    
}