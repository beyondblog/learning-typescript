class BankAccount {
	
	//添加public 关键字 表示这个字段那是保留字段
 	constructor(public balance: number) {
    }
	deposit(credit: number) {
		this.balance += credit;
		return this.balance;
	}
}

class CheckingAccount extends BankAccount {
    constructor(balance: number) {
        super(balance);
    }
    writeCheck(debit: number) {
        this.balance -= debit;
	}
}

interface IBankAccount {
	balance: number;
	deposit(credit: number): number;
}


var test: IBankAccount;


var account = new CheckingAccount(100);

//非侵入式接口
test = account;

console.log(account.deposit(100))
console.log(test.deposit(100))

