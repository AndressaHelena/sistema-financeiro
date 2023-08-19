import * as C from './styles';
import { Item } from '../../types/Item';

type Props = {
    onAdd: (item: Item) => void
}



export const InputArea = ( {onAdd}: Props) => {
    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(2023, 8, 22),
            category: 'food',
            title: 'Item de teste',
            value: 30.90
        };
        onAdd(newItem);  
    }

    return(
        <C.Container>
             <C.Input />
             <C.Input />
             <C.Input />
             <C.Input />
            <C.CustonButton onClick={handleAddEvent}>Adicionar</C.CustonButton>
           
        </C.Container>
    )
}