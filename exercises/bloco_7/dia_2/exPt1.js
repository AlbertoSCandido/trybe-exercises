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

console.table(order)

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

// customerInfo(order);

// const orderModifier = (order) => {
//   // Adicione abaixo as informações necessárias.

// }

// orderModifier(order);