const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// console.table(order)

// 1
// Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
// Note que o parâmetro da função já está sendo passado na chamada da função.

const customerInfo = (order) => {
  let deliveryPerson = order.order.delivery.deliveryPerson;
  let name = order.name;
  let phoneNumber = order.phoneNumber;
  let address = `${order.address.street}, Nº ${order.address.number}, AP: ${order.address.apartment}`;
  return `Olá ${deliveryPerson}, entrega para ${name}, Telefone: ${phoneNumber}, ${address}`
}

console.log(customerInfo(order));

// 2
// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."

// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.order = {
    pizza: {
      muzzarella:{
        amount: 1,
        price: 20,
      },
      calabresa:{
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
  }
  order.payment.total = 50
  return `Olá ${order.name}, o total do pedido de ${Object.keys(order.order.pizza)} e ${order.order.drinks.coke.type} é de R$ ${order.payment.total},00`
}

console.log(orderModifier(order));

// orderModifier(order);