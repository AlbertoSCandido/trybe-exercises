// Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário.

const data = require("../exercise6");
describe("testando a requisição", () => {
  data.api = jest.fn();

  test("testando requisição caso a promisse resolva", async () => {
    data.api.mockResolvedValue("request sucess");

    expect(data.api).toHaveBeenCalledTimes(0);
    return expect(data.api()).resolves.toBe("request sucess");
  });
  
  test('restaura função original', () => {
    data.api.mockReset()
  })

  test("testando requisição caso a promisse seja rejeitada", async () => {
    data.api.mockRejectedValue("request failed");

    expect(data.api).toHaveBeenCalledTimes(0);
    return expect(data.api()).rejects.toBe("request failed");
  });
});

// test('Segundo teste - Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário.')