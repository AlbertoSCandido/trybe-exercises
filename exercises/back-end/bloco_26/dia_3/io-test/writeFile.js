const fs = require('fs');

async function writeContentToFile(nomeDoArquivo, texto) {
  try {
    await fs.writeFile(`${__dirname}/${nomeDoArquivo}`, texto);
    return 'ok';
  } catch (e) {
    return 'erro';
  }
}

// console.log(writeContentToFile('ola.txt', 'ola'));

module.exports = writeContentToFile;
