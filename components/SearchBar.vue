<script setup>
const cmd = defineModel({ default: ':' });
const showing = ref(false);
const cmdbox = ref(null);

function onUpdate() {
  if (cmd.value.startsWith(":")) {
    showing.value = true;
  } else {
    showing.value = false;
  }
}

function runCmd() {
  if (cmd.value === ":q") {
    showing.value = false;
  }
  showing.value = false;
  cmd.value = "";
}

onMounted(() => {
  if (!cmdbox.value) return;
  window.addEventListener("keydown", (e) => {
    if (e.key === ":") {
        showing.value = true;
        cmd.value = ":";
    }
    cmdbox.value.focus();
    });
});

</script>

<template>
    <div class="search" v-show="showing">
      <input 
        ref="cmdbox" 
        type="text" 
        v-model="cmd" 
        @input="onUpdate" 
        @keyup.enter="runCmd"
        placeholder="Search" />
    </div>
</template>

<style scoped>
.search {
  width: 100vw;
  height: 40px;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  display: flex;
}

.light-mode .search {
    background-color: #F6F3E6;
    border-top: 2px solid white;
    border-left: 2px solid white;
    border-right: 2px solid white;
}

.dark-mode .search {
    background-color: #130F26;
    border-top: 2px solid #8368EE;
    border-left: 2px solid #8368EE;
    border-right: 2px solid #8368EE;
}

.search input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 10px;
  font-size: 1rem;
  font-family: 'Roboto Mono', monospace;
}

.dark-mode .search input {
  color: white;
}


</style>