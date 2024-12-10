import multer from "multer";


const storage = multer.diskStorage({
    destination: 'app/uploads/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storege: storage })
export default upload