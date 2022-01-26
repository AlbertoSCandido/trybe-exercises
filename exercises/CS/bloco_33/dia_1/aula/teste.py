from customers import Customer
from accounts import Account

cliente1 = Customer("João", "joaosousa@gmail.com")
cliente1.show()

cliente2 = Customer("Alberto")
cliente2.email = "albertocandido@gmail.com"
cliente2.show()

conta_1 = Account(cliente1, '123456789', 1000)
conta_1.status()
conta_1.deposit(2000)
conta_1.withdraw(500)
conta_1.status()
conta_1.details()