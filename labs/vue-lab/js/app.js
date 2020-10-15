Vue.component("book-shelf", {
    props: [ "books" ],
    template: "<li> <br> {{books.name}} <br> {{books.emoji}} <br> {{books.author}}</li>"
})

let app = new Vue({
    el: "#app",
    data: {
        message: "Books",
        hide: true,
        books: [
            {id: 1, name: "Cirque Du Freak", author: "Darren Shan", emoji: "🕷️"},
            {id: 2, name: "The Maze Runner", author: "James Dashner", emoji: "🏃"}
        ]
    },
    methods: {
        hideBook: function() {
            console.log("Working")
            if(this.hide == true){
                console.log("check");
                this.hide = false;
            } else if(this.hide == false){
                console.log("test");
                this.hide = true;
            }
        }
    }
})