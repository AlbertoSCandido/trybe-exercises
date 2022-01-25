class Customer:
	def __init__(self,name, email):
		self.name = name
		self.email = email
		self._pin = "123"

	def setPassword(self,password):
		self._pin = password
	
	def vericyPassword(self,password):
		return self._pin == password