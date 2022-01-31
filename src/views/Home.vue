<template>
  <div>
    <v-btn class="white--text" @click="dialog_activator = true" color="red"
      >Open dialog</v-btn
    >
    <v-dialog max-width="640px" v-model="dialog_activator">
      <v-card>
        <v-card-title>Form</v-card-title>
        <v-form class="pa-4">
          <v-text-field
            v-model="form.first"
            color="primary darken-2"
            label="First name"
            required
            outlined
          ></v-text-field>
          <v-text-field
            v-model="form.last"
            color="primary darken-2"
            label="Last name"
            required
            outlined
          ></v-text-field>
        </v-form>
        <v-card-actions>
          <v-btn text color="red" @click="dialog_activator = false"
            >Close</v-btn
          >
          <v-btn text color="primary darken-1" @click="Save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div style="height: 1500px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog_activator: false,
      form: {
        first: "",
        last: "",
      },
    };
  },
  name: "Home",
  methods: {
    Save() {
      alert(this.form.first + this.form.last);
    },
  },
};
</script>
