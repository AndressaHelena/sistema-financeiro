import { type } from 'os';
import * as C from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helppers/dateFilter';
import { categories } from '../../data/categories';

type Props = {
    item: Item
}

export const TableItem = ({item}: Props) => {
    return (//tabela
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
                </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].expense? '#FF2929' : '#22c55e'}>
                    R$ {item.value}
                </C.Value>
            </C.TableColumn>
        </C.TableLine>
    );
}