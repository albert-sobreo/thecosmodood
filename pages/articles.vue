<template>
    <Header title="Articles" />
    <Navbar/>
    
    <div class="container mx-auto w-full md:w-1/2 flex flex-col gap-12 px-4 jetbrains-mono text-gray-400 mb-12">
        <p class="font-bold text-2xl md:text-4xl text-white">Articles</p>
        <Article 
        image="_nuxt/assets/media/Earth.svg" 
        title="Can Earth Have Rings?" 
        summary="When we think of planets with rings, Saturn immediately comes to mind. Its majestic rings have captivated astronomers and the general public for centuries. But have you ever wondered if Earth, our own home planet, could have rings too? Let's delve into the science and find out." 
        address="can-earth-have-rings"
        />

        <Article 
        image="_nuxt/assets/media/Jupiter.svg" 
        title="Jupiter's Big Red Spot is Shrinking" 
        summary="Jupiter, the largest planet in our solar system, is known for its mesmerizing and ever-changing features. Among its most iconic and captivating phenomena is the Great Red Spot, a giant storm system that has fascinated astronomers for centuries. However, recent observations have revealed that this colossal storm is undergoing a significant transformation—it's shrinking. In this article, we delve into the mysteries of Jupiter's Great Red Spot and explore the reasons behind its diminishing size." 
        address="jupiters-big-red-spot-is-shrinking"
        />

        <Article 
        image="_nuxt/assets/media/Sun.svg" 
        title="Unveiling the Sun's Fiery Dance: A Tale of Solar Flares" 
        summary="Once upon a cosmic stage, 
            in the vast expanse of our solar system, 
            the Sun takes center stage as a celestial performer. 
            Among its many captivating acts, 
            none are as mesmerizing and awe-inspiring as the explosive displays of solar flares.
            Prepare to be enthralled as we embark on a journey through space and time to witness the thrilling tale of these fiery phenomena." 
        address="unveiling-the-suns-fiery-dance-a-tale-of-solar-flares"
        />
    </div>
</template>