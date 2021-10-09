const axios = require('axios');

const getCep = async (cepInput) => {
  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cepInput}/json/`);

    if (!data) {
      return false;
    }

    const { cep, logradouro, bairro, localidade, uf } = data

    return [{ cep, logradouro, bairro, localidade, uf }];
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getCep };