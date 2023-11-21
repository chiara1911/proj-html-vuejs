<template>
   
        <div id="top-footer " class="bg-danger">
    <div class="container">
      <div class="row ">
        <div class="col-9 d-flex justify-content-between align-content-between">
          <div class="row">
            <div class="col-3">
              <ul class="list-unstyled">
                <h6 class="text-uppercase text-light">get started</h6>
                <li v-for="start in started">
                  <a href="#" class="text-light">{{ start }}</a>
                </li>
              </ul>
            </div>
            <div class="col-3">
              <ul class="list-unstyled">
                <h6 class="text-uppercase text-light">about</h6>
                <li v-for="aboutEl in about" class="text-light">
                  <a href="#" class="text-light">{{ aboutEl }}</a>
                </li>
              </ul>
            </div>
            <div class="col-3">
              <ul class="list-unstyled">
                <h6 class="text-uppercase text-light">features</h6>
                <li v-for="featuresEl in features" class="text-light">
                  <a href="#" class="text-light">{{ featuresEl }}</a>
                </li>
              </ul>
            </div>
            <div class="col-3">
              <ul class="list-unstyled">
                <h6 class="text-uppercase text-light">quickLinks</h6>
                <li v-for="quickLinksEl in quickLinks" class="text-light">
                  <a href="#" class="text-light">{{ quickLinksEl }}</a>
                </li>
              </ul>
            </div>
          </div>
          </div>
          <div class="col-3 mt-5 d-flex flex-column" >
            <span class="text-uppercase"> subscribe to newsletter</span>
            <input type="e-mail" name="hello" placeholder="email" />
            <button class="btn btn-secondary text-uppercase mt-2"> subscribe</button>
          </div>
        </div>
      </div>
    </div>
    
</template>

<script>
    export default {
        name:"TopFooter",
        data() {
    return {
      started: ["resouces", "tutorials", "explanes", "docs"],

      about: ["stories", "Community", "Blog", "Brand Assents"],
      features: ["Overview", "Design", "Code", "Collaborate"],
      quickLinks: ["Stories", "Community", "Blog", "Brand Assets"],
    };
  },
    }
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>