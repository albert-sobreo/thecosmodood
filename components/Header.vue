<template>
    <div>
        <Head>
            <Title>{{title}} | The Cosmo Dood</Title>
         </Head>
    </div>
</template>

<script>
// set the title of the page
export default{
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>