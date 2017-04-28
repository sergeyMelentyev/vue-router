<template>
    <div id="storiesContainer">
        <ul class="list-group">
            <li v-for="story in store.stories" class="list-group-item">
                {{ story.writer }} said "{{ story.plot }}".
                Story upvotes {{ story.upvotes }}.
            </li>
        </ul>
    </div>
</template>

<script>
  import { store } from '../store';
  export default {
    data: function () {
      return {
        store
      };
    }
  };
</script>

<style scoped>
    #storiesContainer {
        margin-top: 5%;
    }
</style>
