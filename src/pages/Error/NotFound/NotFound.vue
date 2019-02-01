<template>
    <div id="not-found">
        <p>Page Not Found</p>
        <router-link :to="{ name: 'HelloWorld' }">Back to HelloWorld</router-link>
    </div>
</template>
<script>
    import NotFound from './NotFound';
    export default NotFound;
</script>