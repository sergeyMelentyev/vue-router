<template>
    <div>
        <h4>Trending stories ({{famous.length}}).</h4>
        <ul class="list-group">
            <li v-for="story in famous" class="list-group-item">
                {{ story.writer }} said: "{{ story.plot }}".
                <p>Story upvotes {{ story.upvotes }}.</p>
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
    },
    computed: {
      famous: function () {
        return this.store.stories.filter(function (item) {
          return item.upvotes > 50;
        });
      }
    }
  };
</script>
