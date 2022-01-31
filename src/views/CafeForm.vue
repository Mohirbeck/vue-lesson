<template>
  <div>
    <v-container>
      <div class="text-h4 mb-3">Create Cafe</div>
      <v-form @submit.stop.prevent="Save">
        <v-text-field outlined label="Name" v-model="form.name"></v-text-field>
        <v-textarea
          outlined
          label="Details"
          v-model="form.details"
        ></v-textarea>
        <v-file-input
          outlined
          truncate-length="15"
          chips
          show-size
          v-model="form.img"
        ></v-file-input>
        <v-btn type="submit" class="float-right" color="primary">Save</v-btn>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import {post} from '@/utils/api'

export default {
  data() {
    return {
      form: {
        name: null,
        details: null,
        img: null,
      },
    };
  },
  methods: {
    async Save() {
      let resp = await post('/api/cafe/', this.form)
      console.log(resp)
    },
  },
};
</script>

<style></style>
