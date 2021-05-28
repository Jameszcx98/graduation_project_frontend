<template>
  <div>
    <Table border :columns="columns" :data="order"> </Table>
    <div class="page-size">
      <Page :total="number" show-sizer></Page>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyOrder",
  data() {
    return {
      order: [],
      columns: [
        {
          title: "订单ID",
          width: 160,
          key: "orderId",
        },
        {
          title: "价格",
          width: 70,
          key: "moneyPaid",
        },
        {
          title: "原文件名",
          width: 190,
          key: "file",
        },
        {
          title: "转换之后文件名",
          key: "fileOperation",
        },
        {
          title: "下单时间",
          width: 213,
          key: "confirmTime",
        },
        {
          title: "Action",
          key: "action",
          width: 250,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small",
                  },
                  style: {
                    marginRight: "5px",
                  },
                  on: {
                    click: () => {
                      console.log(params.row);
                      const file = params.row.file;
                      // email.substring(0, email.lastIndexOf(".")) +
                      //   "_compressed.pdf";
                      this.toDownload(file);
                    },
                  },
                },
                "下载原文件"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small",
                  },
                  style: {
                    marginRight: "5px",
                  },
                  on: {
                    click: () => {
                      const file = params.row.fileOperation;
                      this.toDownload(file);
                    },
                  },
                },
                "下载压缩文件"
              ),
            ]);
          },
        },
      ],
      number:0,
    };
  },

  created() {
    const that = this;
    this.$http
      .get(
        "orders?pageNum=1&pageSize=10" + "&email=" + this.getCookie("email"),
        {
          headers: { token: this.getCookie("token") },
        }
      )
      .then(function (resp) {
        that.order = resp.data.list;
        that.number=resp.data.total
        console.log(that.order);
        that.$forceUpdate();
      });
  },
  methods: {
    // ...mapActions(["loadAddress"]),
    getCookie(name) {
      var arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      if ((arr = document.cookie.match(reg))) {
        return arr[2];
      } else {
        return false;
      }
    },
    toDownload(file) {
      const that=this;
      this.$http
        .get("download?file=" + file, {
          headers: { token: this.getCookie("token") },
          responseType: "blob",
        })
        .then((res) => {
          console.log(res);
          that.download(res.data,file);
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status == 400) {
            that.$Message.error("下载出错，文件可能不存在！！");
          }
        });
    },
    download(data,file) {
      if (!data) {
        return;
      }
      let url = window.URL.createObjectURL(
        new Blob([data], { type: `application/pdf;charset-UTF-8` })
      );
      let link = document.createElement("a");
      link.style.display = "none";
      link.href = url;
      link.setAttribute(
        "download",
        file
      );

      document.body.appendChild(link);
      link.click();
      this.$Message.info("下载完成！");
    },
  },
};
</script>

<style scoped>
.page-size {
  margin: 15px 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
