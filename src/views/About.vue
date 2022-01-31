<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="c in cafe" :key="c.id" cols="12" sm="6" md="4" lg="4" xl="3">
          <v-card :loading="loading" elevation="18" rounded="xl">
            <v-img
              :src="'https://backend-for-vue.herokuapp.com' + c.img"
              height="200px"
            ></v-img>
            <v-card-title>{{ c.name }}</v-card-title>
            <v-card-subtitle>Cafe</v-card-subtitle>
            <v-card-text>
              {{ c.details }}
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :to="{name: 'CafeDetails', params: { id: c.id }}" color="primary">Reserve</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      cafe: [],
      loading: true,
    }
  },
  async created(){
    await axios.get('/api/cafe/').then(r => this.cafe = r.data);
    this.loading = false;
  }
};
</script>

<style></style>
