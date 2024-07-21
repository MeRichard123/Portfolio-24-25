<script setup>
const cmd = defineModel({ default: ':' });
const showing = ref(true);
const infoShowing = ref(false);
const cmdbox = ref(null);
const cmdHistory = ref([]);
const index = ref(0);

function onUpdate() {
  if (cmd.value.startsWith(":")) {
    showing.value = true;
  } else {
    showing.value = false;
    infoShowing.value = false;
  }
}

function runCmd() {
  cmdHistory.value.push(cmd.value);
  index.value = cmdHistory.value.length;
  cmd.value = cmd.value.slice(1);
  infoShowing.value = false;  
  let args = cmd.value.split(" ");
  switch (args[0]) {
    case ":q":
      showing.value = false;
      infoShowing.value = false;
      break;
    case "help":
      infoShowing.value = true;
      break;
    case "projects":
    case "project":
      if (args[1]) {
        if (args[1] === "--all") {
          navigateTo("/projects");
          break;
        } else {
        navigateTo(`/project/${args[1]}`);
        }
      } else {
        navigateTo("/projects");
      }
      break;
    case "home":
      navigateTo("/");
      break;
    case "blog":
    case "blogs":
      if (args[1]) {
        navigateTo(`/blogs/${args[1]}`);
      } else {
        navigateTo("/blogs");
      }
      break;
    case "which":
      navigateTo("/whatruns");
      break;
    case "tech":
      navigateTo("/tech");
      break;
    case "about":
      navigateTo("/#about");
      break;
    case "contact":
      navigateTo("/#contact");
      break;
  }

  if (!infoShowing.value) {
    showing.value = false;
  }
  cmd.value = ":";
}

onMounted(() => {
  index.value = cmdHistory.value.length;
  if (!cmdbox.value) return;
  window.addEventListener("keydown", (e) => {
    if (e.key === ":") {
        showing.value = true;
        cmd.value = ":";
    }
    if (cmdbox.value) {
      cmdbox.value.focus();
      cmdbox.value.addEventListener("keydown", (e) => {
        if (e.key === "ArrowUp") {
          console.log(index.value);
          if (cmdHistory.value.length > 0) {
            index.value = index.value - 1;
            cmd.value = cmdHistory.value[index.value];
          }
        }
      });
    }
  });
});

</script>

<template>
  <div class="container">
    <div class="info" v-show="infoShowing">
      <ul>
        <li> :home </li>
        <li> :projects </li>
        <li> :blogs </li>
        <li> :tech </li>
        <li> :about </li>
        <li> :contact </li>
      </ul>
      <ul>
        <li> :q </li>
        <li> :project [name]</li>
        <li> :blogs [name]</li> 
        <li> :which </li>
        <li> :projects --all</li>
      </ul>
    </div>
    <div class="search" v-show="showing">
      <input 
      ref="cmdbox" 
      type="text" 
      v-model="cmd" 
      @input="onUpdate" 
      @keyup.enter="runCmd"
      placeholder="Search" />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  height: auto;
  z-index: 1000;
  position: fixed;
  bottom: 0;
}
.search {
  width: 100vw;
  height: 40px;
  display: flex;
}

.info {
  width: 100vw;
  padding: 30px;
  display: flex;
  justify-content: start;
  align-items: center;
  color: white;
  font-family: 'Roboto Mono', monospace;
}

.info ul {
  list-style-type: none;
  margin-right: 60px;
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

.dark-mode .info {
    background-color: #130F26;
    color: white;
    border-bottom: 2px solid #8368EE;
    border-left: 2px solid #8368EE;
    border-right: 2px solid #8368EE;
    border-top: 2px solid #8368EE;
}

.light-mode .info {
    background-color: #dfdccc;
    color: black;
    border-bottom: 2px solid white;
    border-left: 2px solid white;
    border-right: 2px solid white;
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