import titleSection from "../title-section/index";
import eventsItem from "./events-item/index";

export default {
    name: 'events',
    data() {
        return {
            title: { href: '#', title: 'Events', total: '62' },
            contents: [
                { href: '#events1', src: '/tmp/17.png', alt: 'Event image', title: 'Two"s company...', date: '17 august — 6 september', text: 'For those times when just one artwork' },
                { href: '#events2', src: '/tmp/18.png', alt: 'Event image', title: 'Shopping just got personal.', date: '13 july', text: 'At Artfinder we believe that you should buy art because you' },
                { href: '#events3', src: '/tmp/19.png', alt: 'Event image', title: 'Get experimental with mixed-media', date: '18 september', text: 'Discover artists experimenting with all manner of unusual' }
            ]
        }
    },
    components: {
        titleSection,
        eventsItem
    }
}