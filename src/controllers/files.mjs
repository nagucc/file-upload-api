// import fs from 'fs';
import expressJwt from 'express-jwt';
import express from 'express';
import multer from 'multer';
import uuid from 'uuid/v4';

import { secret, uploadDir } from '../config.mjs';
import { getToken } from '../utils.mjs';


// const { Router } = require('express');
// const multer = require('multer');
// const uuid = require('uuid/v4'); // 使用v4生成uuid


// 确保upload和jkef目录存在
// try {
//   fs.accessSync('upload');
// } catch (e) {
//   fs.mkdirSync('upload');
// }

// try {
//   fs.accessSync('upload/jkef');
// } catch (e) {
//   fs.mkdirSync('upload/jkef');
// }

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, uploadDir);
  },
  filename(req, file, cb) {
    const extName = file.originalname.split('.').reverse()[0];
    console.log(`${uuid()}.${extName}`);
    cb(null, `${uuid()}.${extName}`);
  },
});


const upload = multer({ storage });


const router = new express.Router();


/*
上传文件。
参数列表：
- file 包含文件数据的字段

返回值：
{
    "fieldname": "file",
    "originalname": "jkef-logo.jpg",
    "encoding": "7bit",
    "mimetype": "image/jpeg",
    "destination": "upload/jkef",
    "filename": "b4531220-7d78-11e7-ae7b-49b852160635.jpg",
    "path": "upload/jkef/b4531220-7d78-11e7-ae7b-49b852160635.jpg",
    "size": 56768
}
*/
router.post(
  '/upload/single',
  // 确保用户已登录
  expressJwt({
    secret,
    credentialsRequired: true,
    getToken,
  }),
  upload.single('file'),
  (req, res) => {
    try {
      res.success(req.file);
    } catch (e) {
      res.fail(e);
    }
  },
);

export default router;
