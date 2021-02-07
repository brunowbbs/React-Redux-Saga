//call -> Serve para chamar uma função
//put -> Serve para fazer o dispatch
//all -> Permite executar mais de uma ação
//takeLatest -> Executa somente na ultima execução da action

import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as Actions from '../actions/userAction';
import * as Types from '../actions/types';

const requsicao = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 2000)
});


function* exampleRequest() {
  try {
    yield call(requsicao)
    //yield call(requsicao, 1, 'Wesley'); -> Caso precisasse passar parametros para a função
    yield put(Actions.clicaBotaoSuccess())

  } catch (error) {
    alert('Deu erro: ' + error)
  }
}

//O saga vai ficar escutando a action que for inserida no metodo all
export default all([
  takeLatest(Types.BOTAO_CLICADO_REQUEST, exampleRequest)
])