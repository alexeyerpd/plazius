import imageItem from './image-item/index';

export default {
    name: 'celebrating-item',
    props: ['href', 'imgs', 'src', 'alt', 'authorName', 'from'],
    components: {
        imageItem
    }
}