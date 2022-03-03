<template>
  <div class="hello">
    <h1>{{ msg }}</h1>


    <el-row class="row-bg nes-container with-title is-rounded" justify="center">
      <h3 class="title">Moonbeam Network</h3>
      <el-col :span="24">
        <p style="word-break: break-word;">
          Collator name: 255 DAO 01 | 🌔✨ <br/>
          Collator address: <a href="https://moonbeam.subscan.io/validator/0xE596665a52D9Bb37865b3a9264fFE038Be08F28d">0xE596665a52D9Bb37865b3a9264fFE038Be08F28d</a>
        </p>
        <p style="word-break: break-word;">
          Collator name: 255 DAO 02 | 🌔✨ <br/>
          Collator address: <a href="https://moonbeam.subscan.io/validator/0x6faf9F07D12D68A3685d34F3262383df40Bd35Cd">0x6faf9F07D12D68A3685d34F3262383df40Bd35Cd</a>
        </p>

      </el-col>
    </el-row>

    <el-row  class="row-bg nes-container with-title is-rounded" justify="center">
      <h3 class="title">Calamari Network</h3>
      <p>255 DAO is officially shortlisted as a Calamari Network collator <br>
        Node info coming soon...
      </p>
    </el-row>

    <el-row type="flex" class="row-bg" justify="center">
      <h2> Join our delegator community</h2>
    </el-row>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
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
