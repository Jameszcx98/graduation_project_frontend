<template>
  <div>
    <div class="freeback-container">
      <div class="freeback-img-box">
        <img src="static/img/freeback.png" />
      </div>
      <div class="freeback-box-border">
        <div class="freeback-box">
          <div class="freeback-title">
            <h1>意见反馈</h1>
            <h2>感谢你的反馈，我们会积极改善，做出更好的服务的</h2>
          </div>
          <div>
            <Table border :columns="columns" :data="order"> </Table>
            <div class="page-size">
              <Page :total="number" show-sizer></Page>
            </div>
            <Button type="primary" size="large" long @click="editAction"
              >发表意见</Button
            >
          </div>

          <Modal v-model="modal" width="530">
            <div class="freeback-content">
              <div class="freeback-form">
                <Form :model="formItem" :label-width="80">
                  <FormItem label="标题">
                    <i-input
                      v-model="formItem.title"
                      placeholder="请输入标题"
                    ></i-input>
                  </FormItem>
                  <FormItem label="反馈信息">
                    <i-input
                      v-model="formItem.content"
                      type="textarea"
                      :autosize="{ minRows: 8, maxRows: 10 }"
                      placeholder="请输入反馈信息"
                    ></i-input>
                  </FormItem>
                  <FormItem>
                    <Button type="primary">提交</Button>
                    <Button type="ghost">清空信息</Button>
                  </FormItem>
                </Form>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Freeback",
  data() {
    return {
      modal: false,
      formItem: {
        title: "",
        content: "",
      },
      order: [
        { name: "james", theme: "点赞", content: "这平台真好用" },
        { name: "Jack", theme: "点赞", content: "真的帮了我很大的忙" },
        { name: "Merry", theme: "点赞", content: "不错" },
        { name: "Bob", theme: "点赞", content: "会推荐给同事用" },
        { name: "Alice", theme: "点赞", content: "不错" },
        { name: "Ivan", theme: "点赞", content: "用了很多次了" },

      ],
      columns: [
        {
          title: "用户",
          key: "name",
        },
        {
          title: "主题",
          key: "theme",
        },
        {
          title: "内容",
          key: "content",
        },
      ],
      number: 6,
    };
  },
  methods: {
    editAction() {
      this.modal = true;
    },
  },
};
</script>

<style scoped>
.freeback-container {
  margin: 15px auto;
  width: 80%;
  height: 600px;
  display: flex;
  align-items: center;
  /* background-color: #ccc; */
}
.freeback-img-box {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.freeback-img-box img {
  width: 80%;
}
.freeback-box-border {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.freeback-box {
  width: 480px;
}
.freeback-content {
  margin: 15px auto;
  border: 1px #ccc dotted;
}
.freeback-form {
  margin: 30px auto;
  width: 90%;
}
</style>
