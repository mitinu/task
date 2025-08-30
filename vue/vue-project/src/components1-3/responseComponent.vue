<template>
<div class="response-container">
  <h2>All done!</h2>
  <table class="response-table">
    <tr v-for="(value, key) in responseData" :key="key">
      <th>{{ key }}</th>
      <td>
        <template v-if="Array.isArray(value) && value.length">
          <ul class="guests-list">
            <li v-for="(guest, idx) in value" :key="idx">{{ guest }}</li>
          </ul>
        </template>
        <template v-else>
          {{ value || '-' }}
        </template>
      </td>
    </tr>
  </table>
  <button class="btn btn-danger" @click.prevent="resetForm">Return to Form</button>
</div>
</template>

<script>
export default {
  name:"responseComponent",
  props:{
    responseData:{type: Object}
  },
  methods: {
    resetForm() {
      this.$emit('resetForm');
    }
  }
}
</script>

<style scoped>
.btn-danger {
  background-color: #ff4444;
  color: white;
}
.guests-list {
  margin-top: 10px;
}
.guests-list li {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.guests-list li label {
  min-width: 70px;
  margin-right: 10px;
}
.response-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}
.response-table th,
.response-table td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}
.response-table th {
  background-color: #f5f5f5;
}

.btn {
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
}
</style>