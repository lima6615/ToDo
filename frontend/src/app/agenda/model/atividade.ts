export interface Atividade {
   id: number;
	 descricao: string;
	 horario: string;
	 local: string;
}

export const atividadesMock: Atividade[] = [
  {id: 1, descricao: 'Teste 1', horario: '15:31', local: 'Ceilandia1'},
  {id: 2, descricao: 'Teste 2', horario: '15:32', local: 'Ceilandia2'},
  {id: 3, descricao: 'Teste 3', horario: '15:33', local: 'Ceilandia3'},
  {id: 4, descricao: 'Teste 4', horario: '15:34', local: 'Ceilandia4'},
  {id: 5, descricao: 'Teste 5', horario: '15:35', local: 'Ceilandia5'},
];

