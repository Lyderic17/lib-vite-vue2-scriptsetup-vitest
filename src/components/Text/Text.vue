<template>
    <p class="random-text">{{ value }}</p>
</template>

<script>
    export default {
        name: 'RandomText',
        props: {
            value: {
                type: String,
                required: true,
                default: () => 'Le text'
            }
        }
    }
</script>

<style lang="scss">
.random-text {
    color: red;
}
</style>