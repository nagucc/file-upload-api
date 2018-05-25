# file-upload-api
实现文件上传的API

## API 列表

### POST /upload/single
上传单个文件

参数：
- `token`
- `file` 文件数据。以form形式传递。

返回值：
```javascript
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
```

示例

## 配置
可通过环境变量对API进行配置。

- `UPLOAD_DIR` 保存上传文件所使用的文件夹，默认为`upload`。此文件夹会被自动创建。