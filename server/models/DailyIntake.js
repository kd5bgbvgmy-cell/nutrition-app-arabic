const mongoose = require('mongoose');

const DailyIntakeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  التاريخ: {
    type: Date,
    required: true
  },
  الوجبات: [{
    نوع_الوجبة: {
      type: String,
      enum: ['إفطار', 'غداء', 'عشاء', 'وجبة خفيفة']
    },
    الأطعمة: [{
      foodId: mongoose.Schema.Types.ObjectId,
      الكمية: Number,
      الوحدة: String
    }]
  }],
  إجمالي_السعرات: {
    type: Number,
    default: 0
  },
  إجمالي_البروتين: {
    type: Number,
    default: 0
  },
  إجمالي_الدهون: {
    type: Number,
    default: 0
  },
  إجمالي_الكربوهيدرات: {
    type: Number,
    default: 0
  },
  الملاحظات: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('DailyIntake', DailyIntakeSchema);
