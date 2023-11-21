<template >
  <div class="ms-2 bg-danger">    
    <h1 class="text-center ">header</h1>
    <div class="container">
    <div class="top-bar  mt-2 d-flex flex-row justify-content-between ">
      <div id="top-left">
        <button class="btn bg-secondary text-uppercase text-light"> news updates</button>
      <span class="text-uppercase">05:35 the_</span>
      </div>
      <div class="top-right d-flex flex-row justify-content-between align-content-between mx-1 text-light">
        <span class="icon-left mx-4">
          <i class="fa-solid fa-angle-left "></i>
        <i class="fa-solid fa-angle-right"></i>
        </span>
        
          <ul class="d-flex flex-row list-unstyled icon-right">
            <li><i class="fa-brands fa-facebook"></i></li>
            <li><i class="fa-brands fa-twitter"></i></li>
            <li><i class="fa-brands fa-instagram"></i></li>
            <li><i class="fa-brands fa-youtube"></i></li>
          </ul>
        </div>
      
      
       

      </div>
      
    </div>
    <div class="container bg-info "> container 
      <div>loghi</div>
      <div>lista</div>
    </div>
    <div >scroll immagini</div>

  </div>
</template>

<script>
  export default {
    name: "HeaderApp"
    
  }
</script>

<style lang="scss" scoped>

i{
  padding-left: 5px;
}
</style>