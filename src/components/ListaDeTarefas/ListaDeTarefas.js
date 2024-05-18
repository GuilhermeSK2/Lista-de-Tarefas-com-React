import React, { useState } from 'react'; 
import '../ListaDeTarefas/ListaDeTarefas.css'


function ListaDeTarefas() { 

const [tarefas, setTarefas] = useState([]); 

const [novaTarefa, setNovaTarefa] = useState(''); 



const adicionarTarefa = () => { 

    if (novaTarefa.trim() !== '') { 

    setTarefas([...tarefas, novaTarefa]); 

    setNovaTarefa(''); 

    } 

    }; 



const removerTarefa = (index) => { 

    const novasTarefas = [...tarefas]; 

    novasTarefas.splice(index, 1); 

    setTarefas(novasTarefas); 

}; 



return ( 

    <div> 

    <h2>Lista de Tarefas</h2> 

    <input 

        type="text" 

        value={novaTarefa} 

        onChange={(e) => setNovaTarefa(e.target.value)} 

        placeholder="Adicione uma nova tarefa" 

    /> 

    <button id='adicionar' onClick={adicionarTarefa}>Adicionar</button> 

    <ul> 

        {tarefas.map((tarefa, index) => ( 

        <li id='item' key={index}> 

            {tarefa}{' '} 

            <button id='remover' onClick={() => removerTarefa(index)}>Remover</button> 

        </li> 

        ))} 

    </ul> 

    </div> 

); 

} 



export default ListaDeTarefas; 