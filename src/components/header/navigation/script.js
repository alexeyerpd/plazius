import LinkItem from './link-item/index'

export default {
    name: "navigation",
    components: {
        "link-item": LinkItem
    },
    data() {
        return {
            links: [
                { name: "Digest", quantity: "1045", src: "#" },
                { name: "Artists", quantity: "235", src: "#" },
                { name: "Gallery", quantity: "831", src: "#" },
                { name: "About", src: "#" },
                { name: "Events", src: "#" },
            ]
        }
    }
}