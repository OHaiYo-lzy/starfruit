<template>
   <div>
        <el-container>

            <el-header>
                    head
            </el-header>

            <el-container>
                <el-aside width="200px">
                            
                            <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b"
                            @select="menuClick"
                            >

                            <el-menu-item index="0">
                                <i class="el-icon-s-home"></i>
                                <span slot="title">首页</span>
                            </el-menu-item>
                            
                            <el-submenu index="1">
                                <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>商品</span>
                                </template>
                                <el-menu-item-group>
                                <el-menu-item index="/Good_list">商品列表</el-menu-item>
                                <el-menu-item index="/Good_add">添加商品</el-menu-item>
                                <el-menu-item index="1-3">商品分类</el-menu-item>
                                <el-menu-item index="1-4">运费管理</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="2">
                                <template slot="title">
                                <i class="el-icon-s-order"></i>
                                <span>订单</span>
                                </template>
                                <el-menu-item-group>
                                <el-menu-item index="2-1">订单列表</el-menu-item>
                                <el-menu-item index="2-2">退货申请处理</el-menu-item>
                                <el-menu-item index="2-3">退货原因设置</el-menu-item>
                                <el-menu-item index="2-4">发票管理</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="3">
                                <template slot="title">
                                <i class="el-icon-s-marketing"></i>
                                <span>运营</span>
                                </template>
                                <el-menu-item-group>
                                <el-menu-item index="3-1">公告管理</el-menu-item>
                                <el-menu-item index="3-2">banner管理</el-menu-item>
                                <el-menu-item index="3-3">评论管理</el-menu-item>
                                <el-menu-item index="3-4">广告管理</el-menu-item>
                                <el-menu-item index="3-4">活动管理</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                             <el-submenu index="4">
                                <template slot="title">
                                <i class="el-icon-s-custom"></i>
                                <span>店铺</span>
                                </template>
                                <el-menu-item-group>
                                <el-menu-item index="4-1">基本信息</el-menu-item>
                                <el-menu-item index="4-2">装修模板</el-menu-item>
                                <el-menu-item index="4-3">推荐列表</el-menu-item>
                                <el-menu-item index="4-4">支付设置</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                             <el-submenu index="4">
                                <template slot="title">
                                <i class="el-icon-s-custom"></i>
                                <span>权限</span>
                                </template>
                                <el-menu-item-group>
                                <el-menu-item index="4-1">组织架构</el-menu-item>
                                <el-menu-item index="4-2">角色管理</el-menu-item>
                                <el-menu-item index="4-3">账号管理</el-menu-item>
                                <el-menu-item index="4-4">资金统计</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            </el-menu>
                </el-aside>

                <el-main>
                     <router-view />
                </el-main>

            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    name:'Home',
    methods:{
        menuClick(index){
            this.$router.push(index);
        }
    }
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>