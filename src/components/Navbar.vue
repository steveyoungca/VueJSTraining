<template>
  <b-navbar
    toggleable="md"
    type="dark"
    variant="info">
    <b-navbar-brand :to="{ name: 'Home' }">Account-Owner Home</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item :to="{ name: 'Toast' }">Toast</b-nav-item>
      <b-nav-item :to="{ name: 'Welcome' }">wELCOME</b-nav-item>
      <b-nav-item href="#">Owner Actions</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>
<script>
export default {
  name: 'Navbar'
}
</script>
