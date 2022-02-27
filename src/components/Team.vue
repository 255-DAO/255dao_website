<template>
  <div class="hello">
    <h1>{{ msg }}</h1>


    <el-row type="flex" class="row-bg nes-container with-title is-rounded" justify="center" align="middle">
      <el-col :span="16" justify="center">
        <p style="word-break: break-word;">
					<el-image
            style="width: 70px; height: 70px"
            :src="avatars_9277"
            :fit="fit"></el-image> <br/>
          9277 <br/>
          <a href="https://twitter.com/Punk9277">Twitter</a>
        </p>
      </el-col>
      <el-col :span="16" justify="center">
        <p style="word-break: break-word;">
					<el-image
            style="width: 70px; height: 70px"
            :src="avatars_scott"
            :fit="fit"></el-image> <br/>
          LeDude <br/>
          <a href="https://twitter.com/0xLeDude">Twitter</a>
        </p>
      </el-col>
      <el-col :span="16" justify="center">
        <p style="word-break: break-word;">
					<el-image
            style="width: 70px; height: 70px"
            :src="avatars_hahaschool"
            :fit="fit"></el-image> <br/>
          hahaschool <br/>
          <a href="https://twitter.com/yhnyuu">Twitter</a>
        </p>
      </el-col>
      <el-col :span="16" justify="center">
        <p style="word-break: break-word;">
					<el-image
            style="width: 70px; height: 70px"
            :src="avatars_by"
            :fit="fit"></el-image> <br/>
          BY <br/>
          <a href="https://twitter.com/lbycuriosity">Twitter</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
  
const avatars_9277 = require("@/assets/avatars/9277.jpg");
const avatars_scott = require("@/assets/avatars/scott.jpg");
const avatars_hahaschool = require("@/assets/avatars/hahaschool.jpg");
const avatars_eddie = require("@/assets/avatars/Eddie.jpg");
const avatars_by = require("@/assets/avatars/by.jpg");

@Component
export default class Team extends Vue {
  @Prop() private msg!: string;
  data() {
    return {
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      avatars_9277,
      avatars_scott,
      avatars_eddie,
      avatars_hahaschool,
      avatars_by
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  margin-bottom: 20px;
}
.row-bg{
  margin-bottom: 20px;
}
</style>
