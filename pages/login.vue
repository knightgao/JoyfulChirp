<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="p-8 bg-white shadow-md rounded-lg w-full max-w-sm">
      <h1 class="text-center text-2xl font-bold text-gray-700 mb-6">登录</h1>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            用户名
          </label>
          <input
              id="username"
              type="text"
              placeholder="输入用户名"
              v-model="form.username"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            密码
          </label>
          <input
              id="password"
              type="password"
              placeholder="输入密码"
              v-model="form.password"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
          >
            登录
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
<!--            忘记密码?-->
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const form = ref({
  username: "",
  password: ""
});
const login = ()=> {
  fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(form.value)
  }).then(res => {
    console.log(res);
  });
}
</script>

<style>
/* 这里可以添加一些全局样式或组件级别的样式 */
</style>