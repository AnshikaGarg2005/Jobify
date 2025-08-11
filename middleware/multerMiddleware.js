import multer from "multer";
import DataURIParser from "datauri/parser.js";
import path from "path";

// Use memoryStorage for accessing file.buffer
const storage = multer.memoryStorage();
const upload = multer({ storage });

export default upload;

export const formatImage = (file) => {
  const parser = new DataURIParser();
  return parser.format(path.extname(file.originalname).toString(), file.buffer)
    .content;
};
