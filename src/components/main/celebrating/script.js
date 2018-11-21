import titleSection from "../title-section/index";
import celebratingItem from "./celebrating-item/index";

export default {
    name: 'celebrating',
    data() {
        return {
            title: { href: '#', title: 'Celebrating Artists', total: '235' },
            contents: [
                {
                    href: '#celebrating1',
                    imgs: [{ src: '/tmp/26.png', alt: 'pic' }, { src: '/tmp/27.png', alt: 'pic' }, { src: '/tmp/28.png', alt: 'pic' }, { src: '/tmp/29.png', alt: 'pic' }],
                    src: '/tmp/25.png',
                    alt: 'Author photo',
                    authorName: 'Ksavera',
                    from: 'Russia'
                },
                {
                    href: '#celebrating2',
                    imgs: [{ src: '/tmp/21.png', alt: 'pic' }, { src: '/tmp/22.png', alt: 'pic' }, { src: '/tmp/23.png', alt: 'pic' }, { src: '/tmp/24.png', alt: 'pic' }],
                    src: '/tmp/20.png',
                    alt: 'Author photo',
                    authorName: 'Ronald Hunter',
                    from: 'Germany'
                },
                {
                    href: '#celebrating3',
                    imgs: [{ src: '/tmp/47.png', alt: 'pic' }, { src: '/tmp/48.png', alt: 'pic' }, { src: '/tmp/49.png', alt: 'pic' }, { src: '/tmp/50.png', alt: 'pic' }],
                    src: '/tmp/46.png',
                    alt: 'Author photo',
                    authorName: 'Fintan Whelan',
                    from: 'Germany'
                },
                {
                    href: '#celebrating4',
                    imgs: [{ src: '/tmp/8.png', alt: 'pic' }, { src: '/tmp/9.png', alt: 'pic' }, { src: '/tmp/10.png', alt: 'pic' }, { src: '/tmp/11.png', alt: 'pic' }],
                    src: '/tmp/7.png',
                    alt: 'Author photo',
                    authorName: 'Name Artist',
                    from: 'Country'
                },
                {
                    href: '#celebrating5',
                    imgs: [{ src: '/tmp/13.png', alt: 'pic' }, { src: '/tmp/14.png', alt: 'pic' }, { src: '/tmp/15.png', alt: 'pic' }, { src: '/tmp/16.png', alt: 'pic' }],
                    src: '/tmp/12.png',
                    alt: 'Author photo',
                    authorName: 'Beata Belanszky',
                    from: 'Hungary'
                },
                {
                    href: '#celebrating6',
                    imgs: [{ src: '/tmp/31.png', alt: 'pic' }, { src: '/tmp/32.png', alt: 'pic' }, { src: '/tmp/33.png', alt: 'pic' }, { src: '/tmp/34.png', alt: 'pic' }],
                    src: '/tmp/30.png',
                    alt: 'Author photo',
                    authorName: 'Manuel Leonardi',
                    from: 'France'
                },
                {
                    href: '#celebrating7',
                    imgs: [{ src: '/tmp/2.png', alt: 'pic' }, { src: '/tmp/3.png', alt: 'pic' }, { src: '/tmp/4.png', alt: 'pic' }, { src: '/tmp/5.png', alt: 'pic' }],
                    src: '/tmp/1.png',
                    alt: 'Author photo',
                    authorName: 'Hugh Abernethy',
                    from: 'United Kingdom'
                },
                {
                    href: '#celebrating8',
                    imgs: [{ src: '/tmp/42.png', alt: 'pic' }, { src: '/tmp/43.png', alt: 'pic' }, { src: '/tmp/44.png', alt: 'pic' }, { src: '/tmp/45.png', alt: 'pic' }],
                    src: '/tmp/41.png',
                    alt: 'Author photo',
                    authorName: 'Igor Shulman',
                    from: 'Czech Republic'
                },

            ]
        }
    },
    components: {
        titleSection,
        celebratingItem
    }
}