<template>
  <div class="ann">
    <div class="headwz">SIPC——我们与你们同在</div>
    <p class="wz">学生创新创业实践中心（SIPC or 115）是计算机学院五大学生组织之一，也是计算机学院实验室之一。
      前身为602工作室，始建于2009年9月，旨在培养大学生创新意识，指导并组织学生进行科技创新、创业及社会实践等活动。
      SIPC不是社团，是与学生会、团委、学生事务服务中心同级的技术类学生组织，也是天津理工大学中独具特色的学生组织。
      从中心走出的成员中，不乏进入微软、百度、腾讯、淘宝、小米、360、长亭等名企的人才，也不乏应届毕业获得年薪30w以上的优秀学长学姐。
      同时，中心成员也有考入北大的研究生，他们的优势就是在成绩优秀的同时掌握了各类实践经验和实践技术。
      中心只吸纳最优秀的学生，而历届的中心成员也都在用自身的优异续写着中心的故事。</p>
    <div class="headwz">学生会——学校与学生间的桥梁和纽带</div>
    <p class="wz">学生会是学校联系广大同学的桥梁和纽带，服务同学的主要领域是学业发展、身心健康、社会融入、权益维护等。
      凡在学的中国学生，不分民族、性别、宗教信仰均为学生会会员。学生会以全心全意服务同学为宗旨，发挥学校党政联系广大同学的桥梁和纽带作用。
      在党组织的领导和团组织的指导帮助下，依照法律、学校规章制度和各自的章程开展工作。</p>
    <div class="headwz foot">.  .  .  .  .  .</div>
  </div>
  
</template>

<script>

  export default {
    name: 'Ann',
  }
</script>

<style scoped>
  .ann{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .headwz{
    width: 500px;
    height: auto;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    line-height: 64px;
    padding: 0 24px;
    background-color: #fff;
  }

  .wz{
    font-size: 17px;
    line-height: 64px;
    text-indent:2em;
    padding: 0 24px;
  }
  .ann .foot{
    margin-bottom: 60px;
    font-weight: 800;
    
  }
</style>