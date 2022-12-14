import { useState } from 'react'
import * as C from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { items } from './data/items';
import { categories } from './data/categories';

const App = () => {
  const[list, setList] = useState(items);
  //const [currentMonth, setCurrentMonth] = useState()

  return (
    <C.Container>
      
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header> 
      <C.Body>

        {/* Área de informações */}
        {/* Área de inserção */}
        {/* Tabela de itens */}

        </C.Body>
    </C.Container>
  );
}

export default App;
