<template>
  <div class="application">
    <div class="inner"/>
    <h3>天津理工大学计算机科学与工程学院</h3>
    <h3>学生组织报名系统</h3>
    <el-form ref="form" :model="form" label-width="80px" label-position="left" :rules="rules">
        <h4>个人信息</h4>

        <el-form-item label="学号" prop="stuId" >
            <el-input
                placeholder="请输入学号"
                v-model="form.stuId"
                class="in"
                >
                <i slot="suffix" class="el-input__icon el-icon-info"></i>
            </el-input>
        </el-form-item>

        <el-form-item label="姓名" prop="stuName">
            <el-input
                placeholder="请输入姓名"
                v-model="form.stuName"
                class="in"
                >
                <i slot="suffix" class="el-input__icon el-icon-user"></i>
            </el-input>
        </el-form-item>

        <el-form-item label="QQ" prop="stuQQ">
            <el-input
                placeholder="请输入QQ号"
                v-model="form.stuQQ"
                class="in"
                >
                <i slot="suffix" class="el-input__icon el-icon-chat-round"></i>
            </el-input>
        </el-form-item>

        <el-form-item label="手机" prop="stuPhone">
            <el-input
                placeholder="请输入手机号"
                v-model="form.stuPhone"
                class="in"
                >
                <i slot="suffix" class="el-input__icon el-icon-mobile-phone"></i>
            </el-input>
        </el-form-item>

        <h4>专业与班级</h4>

        <el-form-item label="专业班级" prop="class_value">
             <el-cascader
                v-model="form.class_value"
                placeholder="请选择专业与班级"
                :options="class_options"
                :props="{ expandTrigger: 'hover' }"
                
                >
            </el-cascader>
        </el-form-item>
    
        <h4>第一志愿</h4>

        <el-form-item label="第一志愿" prop="firstWill">
             <el-cascader
                v-model="form.firstWill"
                placeholder="请选择第一志愿"
                :options="first_options"
                :props="{ expandTrigger: 'hover' }"
              
                >
            </el-cascader>
        </el-form-item>

        <el-form-item label="原因" prop="rea1">
            <el-input type="textarea" placeholder="请输入原因" v-model="form.rea1"></el-input>
        </el-form-item>

        <h4>第二志愿</h4>

        <el-form-item label="第二志愿">
             <el-cascader
                v-model="form.secondWill"
                placeholder="请选择第二志愿"
                :options="first_options"
                :props="{ expandTrigger: 'hover' }"
               
            >
            </el-cascader>
        </el-form-item>

        <el-form-item label="原因" prop="rea2">
            <el-input type="textarea" placeholder="请输入原因" v-model="form.rea2"></el-input>
        </el-form-item>

        <h4>是否同意调剂</h4>

        <el-form-item label="调剂">
            <el-switch v-model="form.isDispensing"></el-switch>
        </el-form-item>

        <el-button type="danger" plain round @click="onSubmit">报  名</el-button>
 
        <el-button type="primary" plain round @click="login">后台登录</el-button>
    </el-form>
    <div class="inner"/>
  </div>
</template>

<script>
  export default {
    name: 'Application',
    data() {
        return {
             form: {
                stuId: '',
                stuName: '',
                stuQQ: '',
                stuPhone: '',
                class_value: [],
                firstWill:[],              
                rea1:'',
                secondWill:[],
                rea2:'',
                isDispensing:true,

            },
            class_options: [
                {
                    "value": "计算机科学与技术",
                    "label": "计算机科学与技术",
                    "children": [{
                        "value": "一班",
                        "label": "一班"
                    },
                    {
                        "value": "二班",
                        "label": "二班"
                    },
                    {
                        "value": "三班",
                        "label": "三班"
                    },
                    {
                        "value": "四班",
                        "label": "四班"
                    }
                    ]
                },
                {
                    "value": "信息安全",
                    "label": "信息安全",
                    "children": [{
                        "value": "一班",
                        "label": "一班"
                    },
                    {
                        "value": "二班",
                        "label": "二班"
                    },
                    {
                        "value": "三班",
                        "label": "三班"
                    },
                    {
                        "value": "四班",
                        "label": "四班"
                    }
                    ]
                },
                {
                    "value": "物联网",
                    "label": "物联网",
                    "children": [{
                        "value": "一班",
                        "label": "一班"
                    },
                    {
                        "value": "二班",
                        "label": "二班"
                    }
                    ]
                },
                {
                    "value": "数据科学与大数据技术",
                    "label": "数据科学与大数据技术",
                    "children": [{
                        "value": "一班",
                        "label": "一班"
                    },
                    {
                        "value": "二班",
                        "label": "二班"
                    }
                    ]
                },
                {
                    "value": "计算机科学与技术(中外合作)",
                    "label": "计算机科学与技术(中外合作)",
                    "children": [{
                        "value": "一班",
                        "label": "一班"
                    },
                    {
                        "value": "二班",
                        "label": "二班"
                    },
                    {
                        "value": "三班",
                        "label": "三班"
                    },
                    {
                        "value": "四班",
                        "label": "四班"
                    },
                    {
                        "value": "五班",
                        "label": "五班"
                    },
                    {
                        "value": "六班",
                        "label": "六班"
                    }
                    ]
                }
                ],
                first_options:[
                    {
                        "value": "科技协会",
                        "label": "科技协会",
                        "children": [{
                        "value": "科技协会",
                        "label": "科技协会"
                        }]
                    },
                    {
                        "value": "团委",
                        "label": "团委",
                        "children": [{
                            "value": "组织部",
                            "label": "组织部"
                        },
                        {
                            "value": "宣传部",
                            "label": "宣传部"
                        },
                        {
                            "value": "心协",
                            "label": "心协"
                        },
                        {
                            "value": "青协",
                            "label": "青协"
                        }
                        ]
                    },
                    {
                        "value": "学生会",
                        "label": "学生会",
                        "children": [{
                            "value": "办公室",
                            "label": "办公室"
                        },
                        {
                            "value": "学习部",
                            "label": "学习部"
                        },
                        {
                            "value": "宣传部",
                            "label": "宣传部"
                        },
                        {
                            "value": "文艺部",
                            "label": "文艺部"
                        },
                        {
                            "value": "体育部",
                            "label": "体育部"
                        },
                        {
                            "value": "外联部",
                            "label": "外联部"
                        },
                        {
                            "value": "自管会",
                            "label": "自管会"
                        }
                        ]
                    },
                    {
                        "value": "勤工助学中心",
                        "label": "勤工助学中心",
                        "children": [{
                            "value": "管理部",
                            "label": "管理部"
                        },
                        {
                            "value": "活动部",
                            "label": "活动部"
                        },
                        {
                            "value": "助贷部",
                            "label": "助贷部"
                        },
                        {
                            "value": "外联部",
                            "label": "外联部"
                        }
                        ]
                    },
                    {
                        "value": "新闻中心",
                        "label": "新闻中心",
                        "children": [{
                            "value": "摄影协会",
                            "label": "摄影协会"
                        },
                        {
                            "value": "新媒体部",
                            "label": "新媒体部"
                        },
                        {
                            "value": "记者团",
                            "label": "记者团"
                        }
                        ]
                    }
                ],
            rules:{
                stuId: [{ 
                    required: true, message: '请输入学号', trigger: 'blur' 
                }],
                stuName:[{
                    required: true, message: '请输入姓名', trigger: 'blur' 
                }],
                stuQQ:[
                    {required: true, message: '请输入QQ号', trigger: 'blur' },
                    {min:5,max:11,message: '请输入正确的QQ号', trigger: 'blur'}
                ],
                stuPhone:[
                    { required: true, message: '请输入手机号', trigger: 'blur' },
                    {len:11, message: '请输入正确的手机号码', trigger: 'blur' }
                ],
                class_value:[
                    { required: true, message: '请选择专业班级', trigger: 'blur' }
                ],
                firstWill:[
                    { required: true, message: '请选择第一志愿', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {    
      login(){
          this.$router.push({
            name:"",
            path: '/big/login',
          })
      },       
      onSubmit() {
        // console.log('submit!'+ JSON.stringify(this.form));
        let stdId = JSON.stringify(this.form.stuId);
        let stdId0 = stdId&&JSON.parse(stdId);

        let stdName = JSON.stringify(this.form.stuName);
        let stdName0 = stdName&&JSON.parse(stdName);


        let stdQQ = JSON.stringify(this.form.stuQQ);
        let stdQQ0 = stdQQ&&JSON.parse(stdQQ);

        let stdPhone = JSON.stringify(this.form.stuPhone);
        let stdPhone0 = stdPhone&&JSON.parse(stdPhone);

        let major = JSON.stringify(this.form.class_value[0]);
        let major0 = major&&JSON.parse(major);

        let classNum = JSON.stringify(this.form.class_value[1]);
        let classNum0 = classNum&&JSON.parse(classNum);
        

        let organization1 = JSON.stringify(this.form.firstWill[0]);
        let organization10 = organization1&&JSON.parse(organization1);
        let branch1 = JSON.stringify(this.form.firstWill[1]);
        let branch10 = branch1&&JSON.parse(branch1);
        let reason1 = JSON.stringify(this.form.rea1);
        let reason10 = reason1&&JSON.parse(reason1);



        let organization2 = JSON.stringify(this.form.secondWill[0]);
        let organization20 = organization2&&JSON.parse(organization2);
        let branch2 = JSON.stringify(this.form.secondWill[1]);
        let branch20 = branch2&&JSON.parse(branch2);
        let reason2 = JSON.stringify(this.form.rea2);
        let reason20 = reason2&&JSON.parse(reason2);

        let isDispensing = JSON.stringify(this.form.isDispensing);

        

        this.$axios({
          method:"POST",
          baseURL:"http://47.94.90.140:8000/",
          url:'/post',
          data:{
              stdId:stdId0,
              stdName:stdName0,
              major:major0,
              classNum:classNum0,
              stdQQ:stdQQ0,
              stdPhone:stdPhone0,
              firstWill: {
                  organization:organization10,
                  branch:branch10,
                  reason:reason10,
              },
              secondWill: {
                  organization:organization20,
                  branch:branch20,
                  reason:reason20,
              },
              isDispensing:isDispensing,

          },
          headers: {
              "content-type": "application/json"
          },          
        })
          .then((val) => {

              if(val.data.message === '请求成功'){
                  alert("恭喜,报名成功!");
              }else{
                  alert("抱歉,报名失败!" + ' ' + val.data.message + "!");
              }
            
             

          })
          .catch((err) => {
              console.log(err);
              alert("抱歉,报名失败!");
          });        
      },

      
    },

  }
</script>

<style scoped>
    .application{
        width: 25%;
        text-align: center;
        transform: translate(150%,0);
    }
    .inner{
        height: 50px;
    }

    .application .el-input__inner:focus{
      box-shadow: 0px 0px 15px 0px white;
    }

    .application .el-form-item__label{
        color: white;
    }

  .application h3,.application h4{
    color: white;
    font-weight: bold;
  }
  
</style>
