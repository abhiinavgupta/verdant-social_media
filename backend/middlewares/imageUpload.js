const fs = require('fs');

module.exports = async function (req, res, next) {
    try {
        if (!req.files || Object.values(req.files).flat().length === 0) {
            return res.status(400).json({ message: "No files selected." });
        }
        let files = Object.values(req.files).flat();
        files.forEach((file) => {
            if (
                file.mimetype !== "image/jpeg" &&
                file.mimetype !== "image/png" &&
                file.mimetype !== "image/gif" &&
                file.mimetype !== "image/webp"
            ) {
                removeTmp(file.tempFilePath);
                return res.status(400).json({ message: "Unsupported format." });
            }
            if (file.size > 20971520) {
                removeTmp(file.tempFilePath);
                return res.status(400).json({ message: "Max upload file size is 20mb." });
            }
        });
        next();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const removeTmp = (path) => {
    fs.unlink(path, (err) => {
        if (err) throw err;
    });
};