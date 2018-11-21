import block from './block/index'

export default {
    name: 'lists-block',
    data() {
        return {
            blockList: [
                {
                    title: 'Digest',
                    links: [
                        { href: '#', text: 'Art of the day' },
                        { href: '#', text: 'Selections' },
                        { href: '#', text: 'Directions' },
                    ]
                },
                {
                    title: 'Artists',
                    links: [
                        { href: '#', text: 'Artist of the day' },
                        { href: '#', text: 'Bestsellers' },
                        { href: '#', text: 'Selection' },
                        { href: '#', text: 'New' },
                    ]
                },
                {
                    title: 'Gallery',
                    links: [
                        { href: '#', text: 'All' },
                        { href: '#', text: 'Inspiration' },
                    ]
                },
                {
                    title: 'About',
                    links: [
                        { href: '#', text: 'Press about us' },
                        { href: '#', text: 'The interior designers' },
                        { href: '#', text: 'Personal buyer' },
                        { href: '#', text: 'Apply for sale' },
                        { href: '#', text: 'Partnership' },
                        { href: '#', text: 'Blog' },
                    ]
                },
                {
                    title: 'Events',
                    links: [
                        { href: '#', text: 'Recent events' },
                        { href: '#', text: 'Calendar' },
                    ]
                },
            ]
        }
    },
    components: {
        block
    }
}