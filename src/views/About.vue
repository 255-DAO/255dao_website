<template>
  <div class="about">
		<el-row type="flex" class="row-bg" justify="center">
      <el-col :span="16">
    <Team msg="Team"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Team from '@/components/Team.vue'

export default {
  name: 'About',
  components: {
    Team
  }
}
</script>
