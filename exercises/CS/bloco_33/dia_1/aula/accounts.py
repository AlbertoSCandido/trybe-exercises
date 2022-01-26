class Account:
	def __init__(self, customer, number, balance=0):
		self.balance = 0
		self._customer = customer
		self._number = number
		self._balance = balance
		self._transactions = []
		self.deposit(balance)

	def status(self):
		print(f"Número da conta: {self._number}. Saldo: {self._balance:10.2f}")

	
	def withdraw(self, amount):
		if self._balance >= amount:
			self._balance -= amount
			self._transactions.append(["Saque", -amount])

	def deposit(self, amount):
		self._balance += amount
		self._transactions.append(["Depósito",amount])

	
	def details(self):
		print(f"Extrato da conta: {self._number} \n")
		for t in self._transactions:
			print(f"{t[0]:10s} {t[1]:10.2f}")
		print(f"\n    Saldo: {self._balance:10.2f}")