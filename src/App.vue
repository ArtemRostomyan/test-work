<template>
  <div id="app">
    <button v-if="smoothingArrShow" @click="smoothingArr(arr)">Сгладить</button>
    <button v-if="subArraysShow" @click="subArrays(arr)">Разделить на подмассивы</button>
    <p>{{arr}}</p>
    <select multiple="multiple" v-if="selectShow" name="select" >
      <option @click="choiceArray()" v-for="(type, index) in Object.keys(typeOfArray)" :key="index">{{type}} </option>
    </select>
    <ul>
         <li  v-for="(item, index) in newArray" :key="index">{{item}}</li>
      </ul>
    <h1 v-if="preloader" class="center">Загрузка</h1>
    <h1 v-if="error" class="center">Ошибка</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      arr: [],
      arr2: [],
      index: '',
      newArray: [],
      preloader: true,
      error: false,
      indexOption: '',
      typeOfArray: {
        string: [],
        number: [],
        objekt: [],
      },
      result: [],
      subArraysShow: false,
      smoothingArrShow: true,
      selectShow: false,
      values: ''
    }
  },
  methods: {
    smoothingArr(arr){
      for(let i = 0; i < arr.length; i++){
        let a = arr[i]
        if(Array.isArray(a)){
          this.smoothingArr(a)
        } else{
          this.arr2.push(a)
        }
      }
      this.arr = this.arr2
      this.subArraysShow = !this.subArraysShow
      this.smoothingArrShow = !this.smoothingArrShow
    },
    choiceArray(){
      console.log(this.index)
    },
    subArrays(arr){
      for(let i = 0; i < arr.length; i++){
        if(typeof(arr[i]) === "string"){
          this.typeOfArray.string.push(arr[i])
          }  else if(typeof(arr[i]) === "object"){
          this.typeOfArray.objekt.push(arr[i])
        } else if(typeof(arr[i] === "number")){
          this.typeOfArray.number.push(arr[i])
        } 
      }
      this.result.push(this.typeOfArray.string, this.typeOfArray.number, this.typeOfArray.objekt)
      this.arr = this.result
      this.selectShow = !this.selectShow
      this.subArraysShow = !this.subArraysShow
    },
    axiosArr(){
      axios
        .get('https://raw.githubusercontent.com/WilliamRu/TestAPI/master/db.json')
        .then( response => this.arr = response.data.testArr, this.preloader = false)
        .catch(err => {
          this.error = true
        })    
    }
  },
  mounted(){
    this.axiosArr()
  }
}
</script>

<style lang="scss">
html{
  width: 100%;
  height: 100%;
}
body{
  position: relative;
  height: 100%;
  width: 100%;
}
.center{
  font-size: 55px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
select{
  width: 300px;
}
option{
  font-size: 18px;
}
button,select,option{
  cursor: pointer;
}

button{
  margin-top: 10px;
  background-color: blue;
  color: #fff;
  font-size: 18px;
  padding: 10px 15px;
  border: none;
  border-radius: 7px;
}
body{
  font-size: 19px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
