<template>
    <div class="hidden sm:flex flex-row gap-10 items-center justify-center jetbrains-mono">
        <img src="@/assets/media/saturn.png" class="rounded-3xl overflow-auto h-[32rem] w-fit object-cover">
        <div>
            <div class="flex items-center px-9 mb-8 justify-between">
                <div class="flex flex-col">
                    <span class="leading-none font-extrabold text-xl">{{ calendar.year }}</span>
                    <span class="leading-none font-extrabold text-6xl text-amber-500" @click="toggleLive">{{ calendar.month }}</span>
                </div>
                <div>
                    <!-- <span class="text-7xl font-bold">{{ hour }}:{{ minute }}</span> -->
                </div>
            </div>

            <table class="table-fixed">
                <thead>
                    <th v-for="weekday in calendar.weekdays" class="uppercase px-10">{{ weekday }}</th>
                </thead>
            
                <tbody>
                    <tr v-for="week in calendar.calendar">
                        <td class="p-5 text-center rounded-3xl" v-for="day in week" :class="day == currentDay ? 'bg-slate-900' : '' ">
                            <span v-if="day != 0">{{ day }}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div class="flex sm:hidden h-screen w-screen bg-[url('@/assets/media/saturn.png')] italic">
        <div class="flex flex-col items-end justify-end fixed bottom-0 w-full right-0 px-8 pb-8 pt-20 bg-gradient-to-b from-zinc-950/0 to-zinc-950/75">
            <div class="flex items-end justify-end">
                <span class="leading-none font-bold antialiased text-8xl">{{currentDay}}</span>
            </div>
            <div class="flex gap-4 items-end">
                <span class="leading-none font-extrabold antialiased text-8xl text-amber-500">{{ calendar.monthAbbr }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import Calendar from "calendar-js"

export default{
    data(){
        return {
            calendar: {
                calendar: [],
                days: null,
                month: "",
                weekdays: [],
                weekdaysAbbr: [],
                year: null,
                monthAbbr: ""
            },

            liveMode: true,
            
            currentMonth: new Date().getMonth(),
            currentYear: new Date().getFullYear(),
            currentDay: new Date().getDate(),

            clock: "",

            hour: "",
            minute: "",
            seconds: "",
            meridian: "",

            // interval: setInterval(() => {
            //     console.log("WTF")
            // }, 1000)
        }
    },

    // watch:{
    //     liveMode() {
    //         if (this.liveMode == false){
    //             clearInterval(this.interval)
    //         } else {
    //             this.interval = setInterval(() => {
    //                 console.log("WTF")
    //             }, 1000)
    //         }
    //     }
    // },

    methods: {
        toggleLive(){
            this.liveMode = !this.liveMode
        },

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
        const calendarObj = new Calendar()
        this.calendar = calendarObj.of(this.currentYear, this.currentMonth)
        console.log(this.calendar)
        
        // if (this.liveMode){
        //     this.interval
        // }

        this.time()
    }
}

</script>