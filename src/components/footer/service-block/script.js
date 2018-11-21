import item from './item/index'

export default {
    name: 'service-block',
    data() {
        return {
            linkList: [
                { href: '#', text: 'Jobs' },
                { href: '#', text: 'The list of artists' },
                { href: '#', text: 'Feedback' },
                { href: '#', text: 'Terms of the agreement' },
                { href: '#', text: 'Support' },
                { href: '#', text: 'Personal order' },
                { href: '#', text: 'Get bonuses' },
                { href: '#', text: 'Clearance' },
                { href: '#', text: 'Conditions' },
            ]
        }
    },
    components: { item }
}