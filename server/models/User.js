const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    sparse: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  الاسم: {
    type: String,
    required: true
  },
  النوع: {
    type: String,
    enum: ['ذكر', 'أنثى'],
    required: true
  },
  السن: {
    type: Number,
    required: true
  },
  الوزن: {
    type: Number,
    required: true // بالكيلوجرام
  },
  الطول: {
    type: Number,
    required: true // بالسنتيمتر
  },
  الهدف: {
    type: String,
    enum: ['زيادة وزن', 'نقصان وزن', 'الحفاظ على الوزن'],
    required: true
  },
  الحالة_الصحية: {
    type: String,
    enum: ['طبيعي', 'حامل', 'مرضع', 'مرض السكري', 'ارتفاع ضغط الدم', 'أمراض القلب', 'حساسية غذائية'],
    default: 'طبيعي'
  },
  المراض_المزمنة: [{
    type: String
  }],
  الحساسيات: [{
    type: String
  }],
  السعرات_المستهدفة: {
    type: Number,
    default: 2000
  },
  profileImage: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);
