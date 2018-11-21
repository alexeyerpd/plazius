import item from './item/index'

export default {
    name: 'select-item',
    components: { item },
    props: ['name', 'list', 'isSelect']
}