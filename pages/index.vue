<template class="">
    <div>
        <Header title="Home" />
    
        <!-- MAIN WINDOW -->
        <div class="w-screen h-screen">
            <Navbar class="fixed top-0 w-screen"/>
        
            <!-- BODY -->
            <div class="flex flex-row items-center justify-around jetbrains-mono flex-1">
                <!-- LEFT -->
                <div class="flex flex-col  pl-12">
                    <!-- TITLE -->
                    <span class="font-bold text-7xl tracking-tighter">THE COSMO DOOD</span>
                
                    <!-- DESCRIPTION -->
                    <div class="flex flex-col text-slate-400 text-xl my-12">
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
                        <div class="flex flex-row gap-8">
                            <div class="border bg-slate-900 border-slate-700 w-60 h-72 rounded-3xl p-8 transition hover:bg-slate-800 cursor-pointer">
                                Hello
                            </div>
                        
                            
                            <div class="border bg-slate-900 border-slate-700 w-60 h-72 rounded-3xl p-8 transition hover:bg-slate-800 cursor-pointer">
                                Hello
                            </div>
                        </div>
                    </div>
                
                </div>
                <!-- FIXED IMAGE -->
                <div class="pr-12">
                    <img src="@/assets/media/earth.png" class="h-screen"/>
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
                calendar: []
            },
        }
    },
}

</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Bungee+Hairline&family=Flow+Circular&family=Grandstander:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&family=Silkscreen&family=Sulphur+Point:wght@300;400;700&display=swap');
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