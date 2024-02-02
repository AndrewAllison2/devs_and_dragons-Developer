<template>

  <div class="row">

    <div class="text-center">
      <img class="img-fluid character-picture" src="https://t4.ftcdn.net/jpg/05/77/22/25/360_F_577222594_h9HdfBTM6ShJA4k0JtNiFMwieVoBZNdV.jpg" alt="Character Pic">
    </div>

    <div class="row">
      <div class="stats-container">
        <div class="character-header text-white text-center">
          <h2 class="text-bold">Character Name</h2>
          <p class="fs-3">Character Class</p>
        </div>

          <div class="line-divider"></div>

          <div class="row">
            <div class="col-6 abilities text-white">
              <h3 class="text-center mt-3">ABILITIES</h3>
  
              <div class='row stats'>
                <div class="col-8 m-auto">
  
                  <div class="d-flex justify-content-between align-items-center mt-4">
                    <h2>8</h2>
                    <p class="fs-2">STRENGTH</p>
                  </div>
                  <div class="d-flex justify-content-between align-items-center mt-1">
                    <h2>8</h2>
                    <p class="fs-2">DEXTERITY</p>
                  </div>
                  <div class="d-flex justify-content-between align-items-center mt-1">
                    <h2>8</h2>
                    <p class="fs-2">CONSTITUTION</p>
                  </div>
                  <div class="d-flex justify-content-between align-items-center mt-1">
                    <h2>8</h2>
                    <p class="fs-2">INTELLIGENCE</p>
                  </div>
                  <div class="d-flex justify-content-between align-items-center mt-1">
                    <h2>8</h2>
                    <p class="fs-2">WISDOM</p>
                  </div>
                  <div class="d-flex justify-content-between align-items-center mt-1">
                    <h2>8</h2>
                    <p class="fs-2">CHARISMA</p>
                  </div>
  
                </div>
              </div>
            </div>
  
            <div class="col-6">
              <div class="text-center text-white mt-4">
                <h1 class="mdi mdi-heart-circle"> HP : <span class="fs-1">69</span></h1>
                <h2 class="mdi mdi-shield"> AC : <span>16</span></h2>
              </div>
            </div>

          </div>

      </div>
    </div>
  </div>

</template>


<script>
export default {
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>
.character-picture{
  height: 16em;
  width: 16em;
  margin-top: 20px;
  border-radius: 50%;
  object-position: relative;
}
.stats-container{
  background-color: brown;
}

.line-divider{
  border-bottom: 3px solid white;
  width: 100%;
}
</style>