<template class="">
    <div>
        <Header title="Home" />
    
        <!-- MAIN WINDOW -->
        <div class="w-full h-screen">
            <Navbar class="fixed top-0 w-screen"/>
        
            <!-- BODY -->
            <div class="px-2 flex flex-col sm:flex-row items-center justify-around jetbrains-mono flex-1 pb-8">
                <!-- LEFT -->
                <div class="flex flex-col items-center sm:items-start pt-20 sm:pl-12">
                    <!-- TITLE -->
                    <span class="font-bold self-center text-4xl sm:text-7xl tracking-tighter">THE COSMO DOOD</span>

                    
                    <img src="@/assets/media/earth.png" class="sm:hidden w-full object-contain"/>
                
                    <!-- DESCRIPTION -->
                    <div class="flex flex-col text-slate-400 text-md sm:text-xl my-12">
                        <span>Learn about the wonders of the cosmos.</span>
                        <span>From Earth and Beyond.</span>
                    </div>
                
                    <!-- LINK TO LATEST ARTICLE -->
                    <div>
                        <NuxtLink to="/can-earth-have-rings" class="link">Check out our latest Article</NuxtLink>
                    </div>
                
                    <!-- OTHER STUFFS -->
                    <div class="flex flex-col items-center justify-center w-fit mt-12 gap-4">
                        <!-- TITLE -->
                        <div class="text-xl">Check out our other stuffs!</div>
                    
                        <!-- CLOCK AND CALENDAR -->
                        <div class="flex flex-col items-center sm:flex-row gap-8">

                            <!-- CALENDAR -->
                            <NuxtLink to="calendar-default">
                                <div class="border gap-2 flex flex-col items-center bg-slate-900 border-slate-700 w-60 h-72 rounded-3xl p-8 pb-2 transition hover:bg-slate-800 cursor-pointer">
                                    <div class="relative rounded-xl h-full w-full overflow-hidden">
                                        <div class="flex-row items-center justify-center jetbrains-mono h-full pt-2">
                                            <div class="text-xs h-full flex flex-col gap-4">
                                                <div class="flex items-center justify-between">
                                                    <div class="flex flex-col">
                                                        <span class="leading-none font-extrabold text-sm">{{ calendar.year }}</span>
                                                        <span class="leading-none font-extrabold text-sm text-amber-500" @click="toggleLive">{{ calendar.month }}</span>
                                                    </div>
                                                    <div>
                                                        <!-- <span class="text-7xl font-bold">{{ hour }}:{{ minute }}</span> -->
                                                    </div>
                                                </div>
                                            
                                                <table class="table-auto">
                                                    <thead>
                                                        <th v-for="weekday in calendar.weekdaysAbbr" class="uppercase">{{ weekday }}</th>
                                                    </thead>
                                                
                                                    <tbody>
                                                        <tr v-for="week in calendar.calendar">
                                                            <td class="text-center rounded-3xl" v-for="day in week" :class="day == currentDay ? 'bg-slate-900' : '' ">
                                                                <span v-if="day != 0">{{ day }}</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    <span class="px-3 py-1 rounded-full bg-gray-950">Cosmo Calendar</span>
                                </div>
                            </NuxtLink>
                        
                            
                            <!-- CLOCK -->
                            <div class="border gap-2 flex flex-col items-center bg-slate-900 border-slate-700 w-60 h-72 rounded-3xl p-8 pb-2 transition hover:bg-slate-800 cursor-pointer">
                                <div class="rounded-xl h-full w-full flex items-center justify-center text-6xl text-gray-500">
                                    <Clock/>
                                </div>

                                <span class="px-3 py-1 rounded-full bg-gray-950">Cosmo Clock</span>
                            </div>
                        </div>
                    </div>
                
                </div>
                <!-- FIXED IMAGE -->
                <div class="pr-12 hidden sm:flex    ">
                    <img src="@/assets/media/earth.png" class="h-screen object-contain"/>
                </div>
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
        }
    },

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


<style>
@import url('https://fonts.googleapis.com/css2?family=Bungee+Hairline&family=Flow+Circular&family=Grandstander:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Silkscreen&family=Sulphur+Point:wght@300;400;700&display=swap');
@import '~/layouts/webfonts/global.css';

.jetbrains-mono{
    font-family: 'JetBrains Mono', monospace;
}

.grandstander{
    font-family: 'Grandstander', cursive;
}

.Aspekta{
    font-family: "Aspekta", sans-serif;
}

.Silkscreen{
    font-family: 'Silkscreen', cursive;
}

.Sulphur{
    font-family: 'Sulphur Point', sans-serif;
}

.Circular{
    font-family: 'Sulphur Point', sans-serif;
}

.Bungee{
    font-family: 'Bungee Hairline', cursive;
}
</style>