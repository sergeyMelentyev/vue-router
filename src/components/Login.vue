<template>
    <div id="login">
        <h4> {{data}} </h4>
        <div class="form-group">
            <input class="form-control" type="email" placeholder="name@email.com">
            <input class="form-control" type="password" placeholder="Пароль">
            <button class="btn">Войти</button>
        </div>
    </div>
</template>

<script>        // must export vue.js component options object
  export default {
    data: function () {
      return {
        data: 'Учетная запись'
      };
    },
    created: function () {
      console.log('created');
    }
  };
</script>
