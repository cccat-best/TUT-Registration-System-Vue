<template>
  <div>
  <a-table :columns="columns" :data-source="data" bordered   :pagination="{ pageSize: 5 }" >
    <template
      v-for="col in ['major','classNum','StdQQ', 'StdPho','organization1','branch1','reason1','organization2','branch2','reason2']"
      :slot="col"
      slot-scope="text, record"
    >
      <div :key="col">
        <a-input
          v-if="record.editable"
          style="margin: -5px 0"
          :value="text"
          @change="e => handleChange(e.target.value, record.key, col)"
        />
        <template v-else>
          {{ text }}
        </template>
      </div>
    </template>
    <template slot="operation" slot-scope="text, record">
      <div class="editable-row-operations">
        <span v-if="record.editable">
          <a @click="() => 
            save(record.key,record.StdId,record.StdName,record.major,record.classNum,record.StdQQ,record.StdPho,
            record.organization1,record.branch1,record.reason1,record.organization2,record.branch2,record.reason2)">Save</a>
          <a-popconfirm title="确认退出?" @confirm="() => cancel(record.key)">
            <a>Cancel</a>
          </a-popconfirm>
        </span>
        <span v-else>
          <a :disabled="editingKey !== ''" @click="() => edit(record.key)">编辑</a>
        </span>
      </div>
    </template>
  </a-table>

</div>
</template>
<script>
const columns = [
  {
    title: '学号',
    dataIndex: 'StdId',
    width: '8%',
    scopedSlots: { customRender: 'StdId' },
    sorter: (a, b) => a.StdId - b.StdId,
    // defaultSortOrder: 'descend',
  },
  {
    title: '姓名',
    dataIndex: 'StdName',
    width: '7%',
    scopedSlots: { customRender: 'StdName' },
  },
  {
    title: '专业',
    dataIndex: 'major',
    width: '8%',
    scopedSlots: { customRender: 'major' },
  },
  {
    title: '班级',
    dataIndex: 'classNum',
    width:  '7%',
    scopedSlots: { customRender: 'classNum' },
  },
  {
    title: 'QQ',
    dataIndex: 'StdQQ',
    width:  '10%',
    scopedSlots: { customRender: 'StdQQ' },
  },

 {
    title: '电话',
    dataIndex: 'StdPho',
    width:  '10%',
    scopedSlots: { customRender: 'StdPho' },
  },
  {
    title: '第一志愿',
    dataIndex: 'organization1',
    width:  '8%',
    scopedSlots: { customRender: 'organization1' },
    sorter: (a, b) => a.organization1.length - b.organization1.length,
    sortDirections: ['descend', 'ascend'],
  },
    {
    title: '部门',
    dataIndex: 'branch1',
    width:  '7%',
    scopedSlots: { customRender: 'branch1' },
  },
    {
    title: '理由',
    dataIndex: 'reason1',
    width:  '6%',
    scopedSlots: { customRender: 'reason1' },
  },
   {
    title: '第二志愿',
    dataIndex: 'organization2',
    width:  '8%',
    scopedSlots: { customRender: 'organization2' },
    sorter: (a, b) => a.organization2.length - b.organization2.length,
    sortDirections: ['descend', 'ascend'],
  },
   {
    title: '部门',
    dataIndex: 'branch2',
    width:  '7%',
    scopedSlots: { customRender: 'branch2' },
  },
    {
    title: '理由',
    dataIndex: 'reason2',
    width:  '6%',
    scopedSlots: { customRender: 'reason2' },
  },
  {
    title: '编辑',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' },
  },
];
var data = [];   

export default {

  name:'stuInfo',
  data() {
    this.cacheData = data.map(item => ({ ...item }));
    return {
      student0:[],
      total:'',
      data,
      columns,
      editingKey: '',
    };
  },
  methods: {
    handleChange(value, key, column) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },
    edit(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      this.editingKey = key;
      if (target) {
        target.editable = true;
        this.data = newData;
      }
    },
    save(key,StdId,StdName,major,classNum,StdQQ,StdPho,organization1,branch1,reason1,organization2,branch2,reason2) {
      const newData = [...this.data];
      const newCacheData = [...this.cacheData];
      const target = newData.filter(item => key === item.key)[0];
      const targetCache = newCacheData.filter(item => key === item.key)[0];
      this.editingKey = '';
      if (target || targetCache) {
        delete target.editable;
        this.data = newData;
      }

      let url = "/post";
      let change = {
        stdId:StdId.trim(),
        stdName:StdName.trim(),
        major:major.trim(),
        classNum:classNum.trim(),
        stdQQ:StdQQ.trim(),
        stdPhone:StdPho.trim(),
        firstWill: {
          organization:organization1.trim(),
          branch:branch1.trim(),
          reason:reason1.trim(),
        },
        secondWill: {
          organization:organization2.trim(),
          branch:branch2.trim(),
          reason:reason2.trim(),
        },
        isDispensing:'',      
      }

      let post = this.$http.post(url, change);  
      post.then((val) => {
          
          if(val.data.code === '0000'){
              alert("信息修改成功!");
          }else{
              alert("信息修改失败!");
          }

      }).catch((err) => {
          console.log(err);
          alert("信息修改失败!");
      })    
    },
    cancel(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      this.editingKey = '';
      if (target) {
        Object.assign(target, this.cacheData.filter(item => key === item.key)[0]);
        delete target.editable;
        this.data = newData;
      }
    },
  },

  created(){
    let url = "/getAllStuInfo?page=1&pageSize=35";
    let Token = {token:sessionStorage.getItem('token')};

    let post = this.$http.post(url, Token);
    post.then((response)=> {
      this.total = response.data.data.total;
      this.student0 =  response.data.data.students;

      for (let i = 0; i < this.total; i++) {
        data.push({

          key: i.toString(),
          StdId: ` ${this.student0[i].stdId}`,
          StdName: ` ${this.student0[i].stdName}`,
          major: ` ${this.student0[i].major}`,
          classNum: ` ${this.student0[i].classNum}`,
          StdQQ: ` ${this.student0[i].stdQQ}`,
          StdPho: ` ${this.student0[i].stdPhone}`,
          organization1: ` ${this.student0[i].firstWill.organization}`,
          branch1: ` ${this.student0[i].firstWill.branch}`,
          reason1: ` ${this.student0[i].firstWill.reason}`,
          organization2: ` ${this.student0[i].secondWill.organization}`,
          branch2: ` ${this.student0[i].secondWill.branch}`,
          reason2: ` ${this.student0[i].secondWill.reason}`,               
        });
      }
    }).catch((error)=>{
      console.log(error);
    })
 },
};

</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
