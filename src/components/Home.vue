<template>
    <div id="hello">
        <h4>Home page</h4>
        <div>
            When a mixin and the component itself contain overlapping options,
            they will be “merged” using appropriate strategies. For example,
            hook functions with the same name are merged into an array so that all
            of them will be called. In addition, mixin hooks will be called before
            the component’s own hooks
        </div>
    </div>
</template>
