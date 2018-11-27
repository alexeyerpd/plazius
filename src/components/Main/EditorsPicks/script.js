import TitleSection from "../TitleSection/";

export default {
    name: "EditorsPicks",
    components: {
        TitleSection
    },
    data() {
        return {
            title: { href: "#", title: 'Editor"s picks', total: "147" },
            contents: [
                {
                    href: "#picks1",
                    src: "/tmp/35.png",
                    alt: "Picks",
                    title: 'Two"s company...',
                    text: "Discover artists experimenting with all manner of"
                },
                {
                    href: "#picks2",
                    src: "/tmp/36.png",
                    alt: "Picks",
                    title: "Landscapes",
                    text: "Turner, Emin, Hockney and now these Artfinder"
                },
                {
                    href: "#picks3",
                    src: "/tmp/37.png",
                    alt: "Picks",
                    title: "Cityscapes and Urban",
                    text: 'For those times when just one artwork won"t do,'
                },
                {
                    href: "#picks4",
                    src: "/tmp/38.png",
                    alt: "Picks",
                    title: "Artworks by Ann Marie",
                    text: "At Artfinder we believe that you should buy art"
                },
                {
                    href: "#picks5",
                    src: "/tmp/39.png",
                    alt: "Picks",
                    title: 'Brooke"s favorites',
                    text: "Discover artists experimenting with all manner of"
                },
                {
                    href: "#picks6",
                    src: "/tmp/40.png",
                    alt: "Picks",
                    title: "Figures & forms",
                    text: "Turner, Emin, Hockney and now these Artfinder"
                }
            ]
        };
    }
};
