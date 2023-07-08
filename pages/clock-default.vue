<template>
    <div v-on:mousemove="unhide()" class="h-screen flex justify-center">
        <Header title="Calendar" />
        <Transition name="page">
            <Navbar class="fixed top-0 w-screen" v-show="hideElements"/>
        </Transition>
        <div class="h-screen flex flex-col items-center justify-center text-[32rem] text-gray-500 jetbrains-mono">
            <Clock/>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            hideElements: false,
            stop: setTimeout(()=>{
                this.hideElements = false
            }, 3000)
        }
    },

    methods: {
        unhide(){
            clearTimeout(this.stop)
            this.hideElements = true
            this.stop = setTimeout(()=>{
                this.hideElements = false
            }, 3000)

        },
    },

    mounted(){
        this.unhide()
    }
}

</script>