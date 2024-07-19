<script>
import SearchBar from '@/components/SearchBar.vue';
import Footer from '@/components/Footer.vue';
import Navigation from '@/components/Navigation.vue';
</script>

<template>
    <div>
        <Navigation />
        <slot />    
        <SearchBar />
        <Footer />
    </div>
</template>


<style scoped>

</style>