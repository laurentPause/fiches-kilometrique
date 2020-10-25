<template>
    <div class="page">
        <navbar/>
      <div class="page-content d-flex align-items-stretch"> 
          <sidebar/>
        <div class="content-inner">
            <titre title="Tableau de bord"/>
        </div>
      </div>
    </div>
</template>

<script>
import navbar from './layout/dashboard/navbar.vue'
import sidebar from './layout/dashboard/sidebar.vue'
import titre from './layout/dashboard/title.vue'

export default {
   components:{
       navbar,
       sidebar,
       titre
   }
}
</script>