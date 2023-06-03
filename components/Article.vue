<template>
    <NuxtLink :to="address" class="flex flex-row bg-gray-950 cursor-pointer transition hover:bg-gray-900 rounded-3xl overflow-auto">
        <!-- image -->
        <img :src="image" width="250" class="bg-gray-900 p-4">

        <!-- TITLE AND SUMMARY -->
        <div class="flex flex-col gap-2 p-4">
            <!-- TITLE -->
            <div>
                <span class="font-bold text-xl">{{ title }}</span>
            </div>

            <!-- SUMMARY -->
            <div>
                <span>{{ summary }}</span>
            </div>
        </div>
    </NuxtLink>
</template>

<script>
export default{
    props: [
        "image",
        "title",
        "summary",
        "address"
    ]
}
</script>