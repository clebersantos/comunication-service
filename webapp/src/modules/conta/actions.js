import axios from 'axios';
import * as types from './types';
import { requisicaoAutorizada } from '../account/_auxiliares/requisicao-autorizada';

export const obterContas = ({ dispatch, commit }) => {
    requisicaoAutorizada.get('http://localhost/v1/conta').then((response) => {
        const { data } = response;
        commit(types.OBTER_CONTAS, data.data);
    }).catch((error) => {
        dispatch('alert/error', error.response.data.error, {
            root: true,
        });
    });
};

export const removerConta = ({ dispatch, commit }, usuarioId) => {
    requisicaoAutorizada.delete(`http://localhost/v1/conta/${usuarioId}`).then(() => {
        commit(types.DELETE_CONTA, usuarioId);
    }).catch((error) => {
        dispatch('alert/error', error.response.data.error, {
            root: true,
        });
    });
};

export const cadastrarConta = ({ dispatch, commit }, conta) => axios.post('http://localhost/v1/conta', conta).then((response) => {
    const { data } = response;
    commit(types.ACRESCENTAR_CONTA, data.data);
    dispatch('alert/success', 'Cadastro realizado com sucesso!', { root: true });
}).catch((error) => {
    dispatch('alert/error', error.response.data.error, {
        root: true,
    });
});

export const atualizarConta = ({ dispatch, commit }, conta) => requisicaoAutorizada.patch(`http://localhost/v1/conta/${conta.usuario_id}`, conta).then(() => {
    commit(types.ATUALIZAR_CONTA, conta);
}).catch((error) => {
    dispatch('alert/error', error.response.data.error, {
        root: true,
    });
});
