const { createApp } = Vue

const app = createApp({
    data() {
        return {
            randomMails: []
        }
    },
    created() {

    },
    methods: {
        requestRandomMail() {

            if (this.randomMails.length !== 0) {

                this.randomMails = [];
            }

            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                    let randomMail = result.data.response;

                    this.randomMails.push(randomMail);
                    console.log(this.indexMails)
                })
            }
            console.log(this.randomMails)
        }
    }
}).mount('#app')
