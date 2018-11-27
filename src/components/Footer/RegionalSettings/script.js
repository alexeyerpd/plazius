export default {
    name: "RegionalBlock",
    data() {
        return {
            title: "Your regional settings",
            copirate: "© Arthome 2017",
            selectList: [
                {
                    selected: "USA",
                    name: "from",
                    optionList: [
                        { value: "Russia", text: "Russia" },
                        { value: "USA", text: "USA" }
                    ]
                },
                {
                    selected: "English",
                    name: "lang",
                    optionList: [
                        { value: "English", text: "English" },
                        { value: "Deutsch", text: "Deutsch" }
                    ]
                },
                {
                    selected: "EUR",
                    name: "currency",
                    optionList: [
                        { value: "EUR", text: "EUR" },
                        { value: "USD", text: "USD" }
                    ]
                },
                {
                    selected: "Micrometers",
                    name: "units",
                    optionList: [
                        { value: "Centimetres", text: "Centimetres" },
                        {
                            value: "Micrometers",
                            text: "Micrometers"
                        }
                    ]
                }
            ]
        };
    }
};
