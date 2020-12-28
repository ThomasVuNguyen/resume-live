var tung = new Vue({
    el: "#app",
    data: {
        number: 0,
        availability: 5,
    },
    methods: {
        addCart: function(){
            if(this.availability>0){
                this.number +=1
                this.availability +=-1
            }
            
        }
    }
})