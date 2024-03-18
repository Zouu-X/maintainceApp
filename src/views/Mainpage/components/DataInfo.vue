<script setup>

</script>

<template>
  <el-col>

      <el-card shadow="hover" :body-style="{ padding: '0px' }">
        <div class="grid-content grid-con-1">
          <el-icon class="grid-con-icon"><User /></el-icon>
          <div class="grid-cont-right">
            <div class="grid-num">1234</div>
            <div>在职时间</div>
          </div>
        </div>
      </el-card>


      <el-card shadow="hover" :body-style="{ padding: '0px' }">
        <div class="grid-content grid-con-2">
          <el-icon class="grid-con-icon"><ChatDotRound /></el-icon>
          <div class="grid-cont-right">
            <div class="grid-num">321</div>
            <div>系统消息</div>
          </div>
        </div>
      </el-card>

  </el-col>
</template>

<style scoped>
.mgb20 {
  margin-bottom: 20px;
}
.grid-content {
  display: flex;
  align-items: center;
  height: 100px;
}
.grid-con-1 .grid-con-icon {
  background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
  color: rgb(100, 213, 114);
}
.grid-num {
  font-size: 30px;
  font-weight: bold;
}

.grid-con-icon {
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
}
.grid-cont-right {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #999;
}
</style>
