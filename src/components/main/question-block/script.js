import QuestionButton from './question-button/index';

export default {
    name: 'question-block',
    components: {
        'question-button': QuestionButton
    },
    data() {
        return {
            datas: [
                { img: '/static/img/bg.png', alt: 'Field', title: 'Are You An Artist?' },
                { img: '/static/img/bg.png', alt: 'Field', title: 'Are you a buyer?' },
            ]
        }
    }
}