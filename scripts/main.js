const min = 0;
const max = 3;

new Vue({
    el: '#app',
    data: {
        back: false,
        pageIndex: 0,
    },
    methods: {
        previous() {
            if (this.pageIndex > min) {
                this.back = true;
                this.pageIndex--;
            }
        },
        next() {
            if (this.pageIndex < max) {
                this.back = false;
                this.pageIndex++;
            }
        },
    }
});
