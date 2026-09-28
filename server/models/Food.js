const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  الاسم: {
    type: String,
    required: true
  },
  الفئة: {
    type: String,
    enum: ['لحوم', 'دواجن', 'أسماك', 'ألبان', 'حبوب', 'خضروات', 'فواكه', 'بقوليات', 'دهون', 'حلويات'],
    required: true
  },
  الحصة: {
    type: String,
    required: true
  },
  السعرات_الحرارية: {
    type: Number,
    required: true
  },
  البروتين: {
    type: Number,
    required: true // بالجرام
  },
  الدهون: {
    type: Number,
    required: true // بالجرام
  },
  الكربوهيدرات: {
    type: Number,
    required: true // بالجرام
  },
  الألياف: {
    type: Number,
    required: true // بالجرام
  },
  الصوديوم: {
    type: Number,
    required: true // بالملليجرام
  },
  الكالسيوم: {
    type: Number,
    required: true // بالملليجرام
  },
  الحديد: {
    type: Number,
    required: true // بالملليجرام
  },
  الفيتامينات: [{
    type: String
  }],
  مناسب_للحوامل: {
    type: Boolean,
    default: true
  },
  مناسب_للمرضعات: {
    type: Boolean,
    default: true
  },
  مناسب_للأطفال: {
    type: Boolean,
    default: true
  },
  تحذيرات_طبية: [{
    type: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Food', FoodSchema);
