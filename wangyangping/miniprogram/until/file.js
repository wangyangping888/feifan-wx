// 云数据库
const db = wx.cloud.database();


// 文件上传
const uploadFile = function (tmpPath, size) {
  var type = tmpPath.substring(tmpPath.indexOf(".", tmpPath.length - 6) + 1, tmpPath.length);
  var name = tmpPath.substring(tmpPath.length - 20, tmpPath.length);
  return new Promise((resolve, reject) => {
    wx.cloud.uploadFile({
      cloudPath: 'upload/img/' + name,
      filePath: tmpPath, // 文件路径
    }).then(res => {
      saveFile(name, res.fileID, type, size).then(() => {
        resolve(res.fileID);
      }).catch(reject);
    }).catch(reject);
  });
}

// 保存文件
const saveFile = function (title, url, type, size) {
  return new Promise((resolve, reject) => {
    db.collection('img').add({
      data: {
        title,
        url,
        type,
        size,
        add_time: new Date()
      }
    }).then(resolve).catch(reject)
  });
}

// 删除图片
const deleteFile = function (url, id) {
  return new Promise((resolve, reject) => {
    wx.cloud.deleteFile({
      fileList: [url]
    }).then(res => {
      db.collection("images")
        .doc(id)
        .remove()
        .then(resolve)
        .catch(reject);
    }).catch(reject)
  });
}

// 修改文件名称
const setFileName = function (id, name) {
  return new Promise((resolve, reject) => {
    db.collection("images")
      .doc(id)
      .update({
        data: {
          title: name
        }
      }).then(resolve).catch(reject);
  })
}

const getFileList = function () {
  return new Promise((resolve, reject) => {
    db.collection("images")
      .get()
      .then(res => {
        resolve(res.data);
      }).catch(reject);
  });
}

module.exports = {
  uploadFile,
  getFileList,
  deleteFile,
  setFileName
};