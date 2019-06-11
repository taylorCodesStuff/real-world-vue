<template>
    <div>
        <h1>Event Listings</h1>
        <router-link 
            :to="{ name: 'event-show', params: { id: '1' } }"
            >
            Specific Event
        </router-link> 
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
