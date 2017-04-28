<template>
    <div>
        <h4>Stories</h4>
        <router-link :to="{ name: 'stories.all' }" exact>All</router-link>
        <router-link :to="{ name: 'stories.famous' }">Trending</router-link>
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>
