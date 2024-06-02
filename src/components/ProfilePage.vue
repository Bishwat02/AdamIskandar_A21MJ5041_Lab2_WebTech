<!-- src/components/ProfilePage.vue -->
<template>
  <div class="profile-page">
    <div class="table-container">
      <table class="profile-table">
        <tbody>
          <tr>
            <td class="label">Name</td>
            <td class="value"><input v-model="editableProfile.name" /></td>
          </tr>
          <tr>
            <td class="label">Course Year</td>
            <td class="value"><input v-model="editableProfile.courseYear" /></td>
          </tr>
          <tr>
            <td class="label">Matrix Number</td>
            <td class="value"><input v-model="editableProfile.matrixNumber" /></td>
          </tr>
          <tr>
            <td class="label">Address</td>
            <td class="value"><input v-model="editableProfile.address" /></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="buttons">
      <button @click="handleSaveProfile">Save</button>
      <button @click="resetProfile">Reset</button>
    </div>
    <div v-if="message" class="message">{{ message }}</div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ProfilePage',
  data() {
    return {
      editableProfile: {},
      message: ''
    }
  },
  computed: {
    ...mapState(['profile'])
  },
  methods: {
    ...mapActions(['saveProfile']),
    handleSaveProfile() {
      this.saveProfile(this.editableProfile)
        .then(() => {
          this.message = 'Profile saved!'
          setTimeout(() => {
            this.message = ''
          }, 2000)
        })
        .catch(error => {
          this.message = 'Failed to save profile'
          console.error('Error saving profile:', error)
          setTimeout(() => {
            this.message = ''
          }, 2000)
        })
    },
    resetProfile() {
      this.editableProfile = { ...this.profile }
    }
  },
  mounted() {
    this.resetProfile()
  }
}
</script>

<style scoped>
.profile-page {
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

.value input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.buttons {
  text-align: center;
  margin-top: 20px;
}

button {
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #42b983;
  color: #fff;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #349a76;
}

.message {
  text-align: center;
  color: green;
  font-weight: bold;
  margin-top: 10px;
}
</style>
