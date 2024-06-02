<template>
  <div class="about-page">
    <div class="table-container">
      <table class="profile-table">
        <tbody>
          <tr>
            <td class="label">Name</td>
            <td class="value">{{ profile.name }}</td>
          </tr>
          <tr>
            <td class="label">Course Year</td>
            <td class="value">{{ profile.courseYear }}</td>
          </tr>
          <tr>
            <td class="label">Matrix Number</td>
            <td class="value">{{ profile.matrixNumber }}</td>
          </tr>
          <tr>
            <td class="label">Address</td>
            <td class="value">{{ profile.address }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AboutPage',
  computed: {
    ...mapState(['profile'])
  }
}
</script>

<style scoped>
.about-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.table-container {
  width: 80%;
  max-width: 600px;
  margin: 20px auto;
}

.profile-table {
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
}

.profile-table tbody tr {
  border-bottom: 1px solid #ddd;
}

.profile-table tbody tr:last-child {
  border-bottom: none;
}

.profile-table td {
  padding: 15px 20px;
}

.label {
  background-color: #f0f0f0;
  font-weight: bold;
  width: 40%;
}

.value {
  background-color: #fff;
}
</style>
