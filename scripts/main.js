const min = 0;
const max = 3;

if (Cookies.get("pageIndex") === undefined) {
    Cookies.set("pageIndex", 0);
}

new Vue({
    el: '#app',
    data: {
        back: false,
        pageIndex: 0,
    },
    created() {
        let indx = Cookies.get('pageIndex');
        if (indx !== undefined) {
            this.pageIndex = parseInt(indx);
        }
    },
    methods: {
        previous() {
            if (this.pageIndex > min) {
                this.back = true;
                this.pageIndex--;
                Cookies.set('pageIndex', this.pageIndex);
            }
        },
        next() {
            if (this.pageIndex < max) {
                this.back = false;
                this.pageIndex++;
                Cookies.set('pageIndex', this.pageIndex);
            }
        },
    }
});
