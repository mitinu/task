<template>
  <div class="user-info-container">
    <form class="user-info" v-if="!responseForm">
      <div class="progress-container">
        <progress :max="progressMax" :value="progress" class="progress-bar"></progress>
        <span class="progress-text">{{ progress }} заполнено из {{ progressMax }}</span>
      </div>
      <div class="form-container">

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model.trim="formData.email" @blur="validateField('email')" required>
        </div>

        <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" v-model.trim="formData.firstName" @blur="validateField('firstName')" required>
        </div>

        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" id="lastName" v-model.trim="formData.lastName" @blur="validateField('lastName')" required>
        </div>

        <div class="form-group">
          <label for="phoneNumber">Phone</label>
          <input type="tel" id="phoneNumber" v-model.trim="formData.phone" @blur="validateField('phone')" required>
        </div>

        <div class="form-group">
          <label for="guests">Guests
            <button type="button" class="btn btn-primary" @click.prevent="addGuest">+</button>
          </label>
          <ul class="guests-list">
            <li v-for="(guest, index) in formData.guests" :key="index">
              <label>Guest {{ index + 1 }}</label>
              <input type="text" v-model.trim="formData.guests[index]">
              <button type="button" class="btn btn-small" @click="deleteGuest(index)">x</button>
            </li>
          </ul>
        </div>

        <button class="btn btn-success" @click.prevent="submitForm" :disabled="!isValid" >Send Data</button>
      </div>
    </form>
    <responseComponent 
      v-else
      :responseData = responseData
      @resetForm = "resetForm"
    />
  </div>
</template>

<script>
import responseComponent from './components1-3/responseComponent.vue';
export default {
  components:{
    responseComponent
  },
  data() {
    return {
      formData: {
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        guests: []
      },
      errors: {
        email: true,
        firstName: true,
        lastName: true,
        phone: true
      },
      responseForm: false,
      responseData: {}
    }
  },
  computed: {
    isValid() {
      // let isValid = true
      // for (const errorIdx in this.errors) {
      //   const error = this.errors[errorIdx]
      //   if (error) {
      //     isValid = false
      //     break
      //   }
      // }
      // return isValid
      return Object.values(this.errors).every(error => !error);
    },
    progressMax(){
      return Object.values(this.errors).length
    },
    progress() {
      // let count = 0 
      // for (const errorIdx in this.errors) {
      //   const error = this.errors[errorIdx]
      //   if (!error) {
      //     count++
      //   }
      // }
      // return count
      return Object.values(this.errors).filter(error => !error).length
    }
  },
  methods: {
    validateField(field) {
      this.errors[field] = !this.formData[field].trim()
    },
    addGuest() {
      this.formData.guests.push('')
    },
    deleteGuest(index) {
      this.formData.guests.splice(index, 1)
    },
    submitForm() {
      if (this.isValid) {
        this.responseData = {
          Email: this.formData.email,
          Name: `${this.formData.lastName} ${this.formData.firstName}`.trim(),
          Phone: this.formData.phone,
          Guests: this.formData.guests.filter(guest => guest.trim())
        }
        this.responseForm = true
        
      }
    },
    resetForm() {
      this.responseForm = false
    }
  }
}
</script>

<style scoped>
.progress-container {
  width: 100%;
  background-color: #f0f0f0;
  border-radius: 8px;
  margin: 20px 0;
  position: relative;
  height: 28px;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
}
.progress-bar {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: linear-gradient(to right, #4CAF50, #2E8B57);
  transition: width 0.4s ease;
  appearance: none;
  border: none;
}
.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-weight: 600;
  font-size: 13px;
  text-shadow: 0 1px 1px rgba(0,0,0,0.3);
}
.user-info-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
input[type="text"],
input[type="email"],
input[type="tel"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.error-text {
  color: #ff4444;
  font-size: 0.8em;
  margin-top: 5px;
  display: block;
}
.btn {
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
}
.btn-primary {
  background-color: #4285f4;
  color: white;
}
.btn-success {
  background-color: #00c851;
  color: white;
  &:disabled{
    background-color: #528163;
  }
}
.btn-small {
  padding: 2px 6px;
  margin-left: 5px;
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
</style>