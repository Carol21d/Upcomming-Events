<script setup>
function add() {
    console.log("prueba");
}
function signed() {
    return true;
}
signed();

</script>

<template>
    <div>
        <v-btn v-if="signed() == true" @click="add" variant="outlined" color="green" font-size="25px">
            +
        </v-btn>
        <v-btn v-if="signed() == false" @click="add" variant="outlined" color="black">
            +
        </v-btn>
    </div>
</template>

<style></style>