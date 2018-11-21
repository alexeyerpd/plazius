import selectItem from './select-item/index'

export default {
    name: 'regional-block',
    data() {
        return {
            title: 'Your regional settings',
            copirate: '© Arthome 2017',
            selectList: [
                {
                    name: 'from',
                    list: [
                        { value: 'Russia', text: 'Russia', isSelect: true },
                        { value: 'USA', text: 'USA' },
                    ]
                },
                {
                    name: 'lang',
                    list: [
                        { value: 'English', text: 'English', isSelect: true },
                        { value: 'Deutsch', text: 'Deutsch' },
                    ]
                },
                {
                    name: 'currency',
                    list: [
                        { value: 'EUR', text: 'EUR', isSelect: true },
                        { value: 'USD', text: 'USD' },
                    ]
                },
                {
                    name: 'units',
                    list: [
                        { value: 'Centimetres', text: 'Centimetres' },
                        { value: 'Micrometers', text: 'Micrometers', isSelect: true },
                    ]
                },
            ]
        }
    },
    components: { selectItem }
}