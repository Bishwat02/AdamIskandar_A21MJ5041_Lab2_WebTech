<template>
  <div class="photos-page">
    <h2 class="title">List of Photos</h2>
    <input v-model="searchQuery" class="search-box" placeholder="Search photos..." />
    <div class="photos-list">
      <div v-for="(photo, index) in filteredPhotos" :key="photo.id" class="photo-item">
        <p class="photo-title">{{ index + 1 }}. {{ photo.title }}</p>
        <button @click="showPhoto(photo)" class="photo-thumbnail-button">
          Photos Thumbnail
        </button>
      </div>
    </div>
    
    <div v-if="selectedPhoto" class="modal">
      <div class="modal-content">
        <span @click="closeModal" class="close-button">&times;</span>
        <h3>{{ selectedPhoto.title }}</h3>
        <img :src="selectedPhoto.url" :alt="selectedPhoto.title" class="full-photo" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      photos: [],
      searchQuery: '',
      selectedPhoto: null,
    };
  },
  computed: {
    filteredPhotos() {
      return this.photos.filter(photo =>
        photo.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    showPhoto(photo) {
      this.selectedPhoto = photo;
    },
    closeModal() {
      this.selectedPhoto = null;
    },
    fetchPhotos() {
      axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
          this.photos = response.data.slice(0, 10); // limiting to 10 photos
        })
        .catch(error => {
          console.error('Error fetching photos:', error);
        });
    },
  },
  mounted() {
    this.fetchPhotos();
  },
};
</script>

<style scoped>
.photos-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
  color: white; /* Font color white */
}

.search-box {
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.photos-list {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Add gap between each title and each picture */
  width: 100%;
}

.photo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px; /* Add margin between photo items */
}

.photo-title {
  flex: 1; /* Make the title take up the remaining space */
  font-weight: bold;
  margin-right: 20px; /* Increase margin between title and thumbnail */
  color: white; /* Font color white */
}

.photo-thumbnail-button {
  border: none;
  background: #007bff;
  color: white;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
}

.photo-thumbnail-button:hover {
  background: #0056b3;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
}

.full-photo {
  max-width: 100%;
  border-radius: 4px;
}
</style>
