const express = require('express');
const fileUpload = require('express-fileupload')
const cors = require('cors');
const port = 8000  
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const audiofilesroutes = require('./server/routes/audiofiles.routes')
const fs = require('fs');

global.__folder = __dirname

const app = express()

// app.get("/audio", (req, res) => {
//     const range = req.headers.range || "0";
//     const videoPath = "./video.mp4";
//     const videoSize = fs.statSync(videoPath).size;
//     const chunkSize = 1 * 1e6;  //  1MB
//     const start = Number(range.replace(/\D/g, ""));
//     const end = Math.min(start + chunkSize, videoSize - 1);
  
//     const contentLength = end - start + 1;
  
//     const headers = {
//       "Content-Range": `bytes ${start}-${end}/${videoSize}`,
//       "Accept-Ranges": "bytes",
//       "Content-Length": contentLength,
//       "Content-Type": "video/mp4",in Node.Js
//     };
//     res.writeHead(206, headers);
  
//     const stream = fs.createReadStream(videoPath, { start, end });
//     stream.pipe(res);
//   });

app.use(fileUpload());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use (cors())
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use(audiofilesroutes);
app.use(express.static('uploads'));


require('./server/config/db.config')
require('./server/routes/userComposer.routes')(app)
require('./server/routes/userStandard.routes')(app)
require('./server/routes/mediaFiles.routes')(app)
require('./server/routes/newSample.routes')(app)
require('./server/routes/audioUpload.routes')(app)

app.listen(port, () => console.log('Server UP'))