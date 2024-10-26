import axios from "axios";

const url = import.meta.env.VITE_URL_API

function carregarContatos() {
  return axios
    .get(url)
    .then((response) => {
      return { sucesso: true, dados: response.data }
    })
    .catch((error) => {
      return { sucesso: false, mensage: error.message }
    });
}

function criarContato(contato) {
  return axios
    .post(url, contato)
    .then(
      (response) => { return { sucesso: true, dados: response.data } }
    )
    .catch(
      (error) => { return { sucesso: false, mensage: error.message } }
    );

  /*try {
  const response = await axios.post(url, contato)
} catch (error) {
  return { sucesso: false, mensage: error.message }
}*/
}

function atualizarContato(contato) { }

function removerContato(id) {
  return axios
    .delete(`${url}/${id}`) //http://localhost:3000/contatos/id
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      return { sucesso: false, mensagem: error.mensage };
    });
}

function obterContato(id) {
  return axios
  .get(`${url}/${id}`)
  .then((response) => {
    return { sucesso: true, dados: response.data };
  })
  .catch((error) => {
    return { sucesso: false, mensagem: error.mensage };
  });
}

export { carregarContatos, criarContato, removerContato, obterContato}