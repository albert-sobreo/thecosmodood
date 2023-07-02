<template>
    <div class="px-2 sm:px-8 mb-4 py-2 flex items-center justify-between font-medium text-xl drop-shadow-xl bg-gray-950">
        <NuxtLink class="grandstander" to="/">THE COSMO DOOD</NuxtLink>
        <div class="flex items-center justify-end gap-4 md:gap-16">
            <NuxtLink class="jetbrains-mono font-light text-gray-400 transition text-base hover:text-gray-300 cursor-pointer" to="articles">Articles</NuxtLink>
            <NuxtLink class="jetbrains-mono font-light text-gray-400 transition text-base hover:text-gray-300 cursor-pointer" to="calendar-default">Calendar</NuxtLink>
            <NuxtLink class="jetbrains-mono font-light text-gray-400 transition text-base hover:text-gray-300 cursor-pointer" to="articles">Clock</NuxtLink>
        </div>
    </div>
</template>