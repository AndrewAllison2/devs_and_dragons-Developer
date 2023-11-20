<template>

  <div class="row text-white">
    <h1>D&D Character Sheet</h1>

  <div class="character-sheet">
    <label for="character-name">Character Name:</label>
    <input type="text" id="character-name" name="character-name" required>

    <label for="character-class">Class:</label>
    <input type="text" id="character-class" name="character-class" required>

    <label for="character-race">Race:</label>
    <input type="text" id="character-race" name="character-race" required>

    <label for="character-level">Level:</label>
    <input type="number" id="character-level" name="character-level" required>

    <label for="character-background">Background:</label>
    <input type="text" id="character-background" name="character-background" required>

    <label for="character-alignment">Alignment:</label>
    <input type="text" id="character-alignment" name="character-alignment" required>

    <label for="character-description">Description:</label>
    <textarea id="character-description" name="character-description" rows="4" required></textarea>

    <button type="button" onclick="saveCharacter()">Save Character</button>
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
 body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }

    h1 {
      text-align: center;
    }

    .character-sheet {
      border: 1px solid #ccc;
      padding: 20px;
      max-width: 600px;
      margin: 0 auto;
    }

    label {
      display: block;
      margin-bottom: 5px;
    }

    input {
      width: 100%;
      padding: 8px;
      margin-bottom: 10px;
      box-sizing: border-box;
    }

    textarea {
      width: 100%;
      padding: 8px;
      margin-bottom: 10px;
      box-sizing: border-box;
    }

    button {
      padding: 10px;
      background-color: #4CAF50;
      color: white;
      border: none;
      cursor: pointer;
    }

    button:hover {
      background-color: #45a049;
    }
</style>