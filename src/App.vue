<template>
  <div>
    <ScrollPanel style="width: 100%; height:200px">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Vitae et leo duis ut diam.
      Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
      Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
      Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
      Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
      Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
      Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
      Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
      Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
      Mattis aliquam faucibus purus in massa tempor nec.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Vitae et leo duis ut diam.
      Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
      Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
      Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
      Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
      Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
      Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
      Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
      Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
      Mattis aliquam faucibus purus in massa tempor nec.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Vitae et leo duis ut diam.
      Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
      Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
      Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
      Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
      Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
      Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
      Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
      Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
      Mattis aliquam faucibus purus in massa tempor nec.
    </ScrollPanel>
    <Chart type="bar" :data="basicData"/>
  </div>
</template>

<script>

import { ref } from 'vue'
import backgimg from './assets/magisoft_rognee.png'

export default {
  data(){
    return{
      backgimg,
      basicData:{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'My First dataset',
                        backgroundColor: '#42A5F5',
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: 'My Second dataset',
                        backgroundColor: '#FFA726',
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            }
    }
  },
  methods:{
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  margin-top: 15px;
  background-color:whitesmoke ;
  text-align: center;
/*Ligne de test qui permet de vérifier si la sidebar se scale avec la taille de l'app ou la taille de l'écran
  Résultat : elle se scale sur la taille de l'écran
  width:25%;*/
}
.custom .p-scrollpanel-wrapper {
    border-right: 9px solid #f4f4f4;
}

.custom .p-scrollpanel-bar {
    background-color: #1976d2;
    opacity: 1;
    transition: background-color .3s;
}

.custom .p-scrollpanel-bar:hover {
    background-color: #135ba1;
}

</style>
