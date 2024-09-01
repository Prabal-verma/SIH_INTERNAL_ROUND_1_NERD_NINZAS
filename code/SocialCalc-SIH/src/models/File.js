import mongoose from 'mongoose';

const FileSchema = new mongoose.Schema({
  fileID: { type: String, required: true, unique: true },
  fileName: { type: String, required: true },
  fileURL: { type: String, required: true }
});

const File = mongoose.models.File || mongoose.model('File', FileSchema);

export default File;
