const cloudinary = require("cloudinary");
const fs = require("fs");
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

// IMAGES UPLOAD
exports.uploadImages = async (req, res) => {
    try {
        const { path } = req.body;
        let files = Object.values(req.files).flat();
        let images = [];
        for (const file of files) {
            const url = await uploadToCloudinary(file, path);
            images.push(url);
            removeTmp(file.tempFilePath);
        }
        res.json(images);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// LIST PROFILE IMAGES
exports.listImages = async (req, res) => {
    try {
        const { path, sort, max } = req.body;
        const result = await cloudinary.v2.search.expression(`${path}`).sort_by("created_at", `${sort}`).max_results(max).execute();
        res.json(result);
            // .then((result) => {
            //     res.json(result);
            // })
            // .catch((err) => {
            //     console.log(err.error.message);
            // });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// UPLOAD TO CLOUDINARY
const uploadToCloudinary = async (file, path) => {
    return new Promise((resolve) => {
        cloudinary.v2.uploader.upload(
            file.tempFilePath,
            {
                folder: path
            },
            (err, res) => {
                if (err) {
                    removeTmp(file.tempFilePath);
                    return res.status(400).json({ message: "Uploading failed! Try again..." });
                }
                resolve({
                    url: res.secure_url,
                });
            }
        );
    });
};

// REMOVE TEMP FILES
const removeTmp = (path) => {
    fs.unlink(path, (err) => {
        if (err) throw err;
    });
};