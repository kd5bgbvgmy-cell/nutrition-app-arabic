const mongoose = require('mongoose');

const NutritionPlanSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  نوع_الخطة: {
    type: String,
    enum: ['عام', 'حوامل', 'مرضعات', 'أطفال', 'مرض السكري', 'ارتفاع ضغط الدم', 'أمراض القلب'],
    required: true
  },
  الهدف: {
    type: String,
    enum: ['زيادة وزن', 'نقصان وزن', 'الحفاظ على الوزن'],
    required: true
  },
  مدة_الخطة: {
    type: Number, // بالأيام
    default: 30
  },
  السعرات_اليومية_المستهدفة: {
    type: Number,
    required: true
  },
  توزيع_المغذيات: {
    البروتين_بالنسبة: Number,
    الدهون_بالنسبة: Number,
    الكربوهيدرات_بالنسبة: Number
  },
  الطعام_المسموح: [String],
  الطعام_الممنوع: [String],
  الوجبات_المقترحة: [
    {
      اليوم: Number,
      الإفطار: [String],
      الغداء: [String],
      العشاء: [String],
      وجبات_خفيفة: [String]
    }
  ],
  النصائح: [String],
  status: {
    type: String,
    enum: ['نشط', 'مكتمل', 'ملغى'],
    default: 'نشط'
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('NutritionPlan', NutritionPlanSchema);
