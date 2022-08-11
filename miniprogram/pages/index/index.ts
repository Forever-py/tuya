// pages/index/index.ts
Page({
  // 定义坐标变量
  startX: 0,
  startY: 0,
  /**
   * 页面的初始数据
   */
  data: {
    pen: 2,
    color: '#00ff00',

  },
  /**
   * 触摸起始事件
   */
  touchStart(e) {
    // 获取当前的坐标位置
    this.startX = e.changedTouches[0].x;
    this.startY = e.changedTouches[0].y;
    // 创建绘图上下文对象
    this.context = wx.createContext();
    // 设置颜色
    this.context.setStrokeStyle(this.data.color);
    // 设置笔触
    this.context.setLineWidth(this.data.pen);
    // 设置笔边
    this.context.setLineCap('round');
    // 开始绘制
    this.context.beginPath();
  },
  /**
   * 触摸的移动事件
   */
  touchMove(e) {
    // 获取移动后的新坐标
    var startX1 = e.changedTouches[0].x;
    var startY1 = e.changedTouches[0].y;
    // 设置画笔移动到起始点
    this.context.moveTo(this.startX, this.startY);
    // 绘制一条到 x1,y1 的直线
    this.context.lineTo(startX1, startY1);
    // 需要进行路径描边（内存完成）
    this.context.stroke();

    // 重新设置坐标点 
    this.startX = startX1;
    this.startY = startY1;

    // 绘制
    wx.drawCanvas({
      canvasId: 'myCanvas',
      reserve: true,
      actions: this.context.getActions() // 获取绘图动作的数组
    })
  },

  touchEnd() {
  },

  // 改变笔的粗细
  penSelect(e) {
    this.setData({
      pen: parseInt(e.currentTarget.dataset.param)
    })
  },
  
  /**
   * 改变笔的颜色
   */
  colorSelect(e) {
    this.setData({
      color: e.currentTarget.dataset.param
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})