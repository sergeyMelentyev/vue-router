<template>
    <div id="app" class="container-fluid">
        <h3>Dynamic components</h3>
        <h3>Router.</h3>
        <router-link :to="{name: 'home'}" exact>Home</router-link>
        <router-link :to="{name: 'login'}">Login</router-link>
        <router-link :to="{name: 'stories.all'}">Stories</router-link>
        <transition name="fade">
            <router-view></router-view>
        </transition>
<!--
        <component v-bind:is="activePage"></component>
        <ul class="nav nav-tabs">
            <li v-for="page in pages"
                v-bind:class="isActivePage(page) ? 'active' : '' ">
                <a v-on:click="setPage(page)"> {{ page | capitalize }} </a>
            </li>
        </ul>
-->
    </div>
</template>

<script>
  import Vue from 'vue';
  import Home from './components/Home.vue';
  import Login from './components/Login.vue';
  import Stories from './components/StoriesAll.vue';

  Vue.filter('capitalize', function (value) {
    return value.charAt(0).toUpperCase() + value.substr(1);
  });

  export default {
    components: {
      Home,
      Login,
      Stories
    },
    data: function () {
      return {
        pages: [
          'home',
          'login',
          'stories'
        ],
        activePage: 'Home'
      };
    },
    methods: {
      setPage: function (newPage) {
        this.activePage = newPage;
      },
      isActivePage: function (page) {
        return this.activePage === page;
      }
    }
  };
</script>

<style>
    #app {
        text-align: center;
        color: #2c3e50;
        width: 70%;
    }
    a {
        cursor: pointer;
    }
    input {
        margin-bottom: 2%;
    }
    .router-link-active {
        color: darkolivegreen;
    }
    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
        transition: opacity 1s;
    }
</style>
