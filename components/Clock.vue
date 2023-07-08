<template>
    {{ hour }}:{{ minute }}
</template>

<script>

export default{
    data(){
        return {
            clock: "",
            hour: "",
            minute: "",
            seconds: "",
            meridian: ""
        }
    },

    methods: {
        time() {
            setInterval(()=>{
                this.clock = new Date()
                this.hour = this.clock.getHours()
                this.minute = this.clock.getMinutes()
                this.seconds = this.clock.getSeconds()
                this.meridian = this.hour > 12 ? "PM" : "AM"
                this.hour = this.hour % 12 || 12
            }, 1000)
        }
    },

    mounted(){
        this.time()
    }
}

</script>