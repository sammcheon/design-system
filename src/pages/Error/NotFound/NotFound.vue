<template>
    <div id="not-found">
        <p>Page Not Found</p>
        <button :to="{ name: 'HelloWorld' }">Back to HelloWorld</button>
    </div>
</template>
<script>
    import NotFound from './NotFound';
    export default NotFound;
</script>