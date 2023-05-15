<template class="">
    <Navbar/>
    <div class="flex items-center jetbrains-mono">
        <Welcome/>
        <img src="@/assets/media/Moon.svg" class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[55%] w-[1000px] md:w-full -z-50">
    </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Grandstander:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap');

.jetbrains-mono{
    font-family: 'JetBrains Mono', monospace;
}

.grandstander{
    font-family: 'Grandstander', cursive;
}
</style>