<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form class="card">
            <div class="form-outline mb-4">
              <label class="form-label" for="form1Example2">Nome Completo</label>
              <input type="text" id="name" class="form-control" />
            </div>
            <!-- Email input -->
            <div class="form-outline mb-4">
              <label class="form-label" for="username">Username</label>
              <input id="username" class="form-control" />
            </div>
            <!-- Password input -->
            <div class="form-outline mb-4">
              <label class="form-label" for="password">Password</label>
              <input type="password" id="password" class="form-control" />
            </div>
            <!-- Submit button -->
            <button type="submit" @click.prevent="cadastrar()" class="btn btn-primary btn-block">
              Cadastrar
            </button>
            <br>
            <br>
            <br>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
