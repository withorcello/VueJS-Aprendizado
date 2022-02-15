// Essa pagina realiza as ações com o back end(listar, inserir, editar e apagar).
import axios from '@/plugins/axios'

export const listar = async ({ commit }, filtros) => {
  try {
    const res = await axios.get('/usuario', filtros)

    if (res && !res.data.erro) commit('registros', res.data)

    return res.data
  } catch (error) {
    return error
  }
}

export const exibir = async ({ commit }, id) => {
  try {
    const res = await axios.get('/usuario/' + id)
    console.log(res)
    if (res && !res.data.erro) commit('registros', res.data)

    return res.data
  } catch (error) {
    return error
  }
}
