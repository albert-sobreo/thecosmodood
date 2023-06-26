<template>
    <div class="flex flex-row gap-10 items-center justify-center jetbrains-mono">
        <img src="@/assets/media/saturn.png" class="rounded-3xl overflow-auto h-[32rem] w-fit">
        <div>
            <div class="flex flex-col items-center justify-center gap-4 pb-8">
                <span class="font-extrabold text-xl">{{ calendar.year }}</span>
                <span class="font-extrabold text-6xl text-amber-500" @click="toggleLive">{{ calendar.month }}</span>
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
            },

            liveMode: true,
            
            currentMonth: new Date().getMonth(),
            currentYear: new Date().getFullYear(),
            currentDay: new Date().getDate(),

            interval: setInterval(() => {
                console.log("WTF")
            }, 1000)
        }
    },

    watch:{
        liveMode() {
            if (this.liveMode == false){
                clearInterval(this.interval)
            } else {
                this.interval = setInterval(() => {
                    console.log("WTF")
                }, 1000)
            }
        }
    },

    methods: {
        toggleLive(){
            this.liveMode = !this.liveMode
        }
    },

    mounted(){
        const calendarObj = new Calendar()
        this.calendar = calendarObj.of(this.currentYear, this.currentMonth)
        
        if (this.liveMode){
            this.interval
        }
    }
}

</script>