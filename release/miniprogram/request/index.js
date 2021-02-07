// 专门 用来 请求

// Promise 请求
export const request=(params)=>{
    return new Promise((resolve,reject)=>{
        wx.request({
          ...params,
          success:(result)=>{
              resolve(result);
          },
          fail:(err)=>{
              reject(err);
          }
        });
    })
}

// 