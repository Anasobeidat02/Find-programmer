const mongoose = require('mongoose');
const mongodb = require('mongodb');
const { MongoClient } = require('mongodb');

// تأكد من أن سلسلة الاتصال (connection string) محددة
const url = 'mongodb+srv://anasmobeidat86:anas2002@cluster0.2vx4res.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// إنشاء `MongoClient` باستخدام سلسلة الاتصال
const client = new MongoClient(url, {
    ssl: true,
    tlsAllowInvalidCertificates: true, // استخدم هذا الخيار فقط في بيئة التطوير إذا لزم الأمر
    
});

// الاتصال بقاعدة بيانات MongoDB باستخدام Mongoose
mongoose.connect(url, {
    ssl: true,
    tlsAllowInvalidCertificates: true, // استخدم هذا الخيار فقط في بيئة التطوير إذا لزم الأمر
    serverSelectionTimeoutMS: 5000, // ضبط مهلة الاتصال
})
.then(() => {
    console.log('Connected successfully');
})
.catch((error) => {
    console.error('Error with connecting with DB', error);
});
// تعريف المخطط (schema) للمجموعة "users"
const passwordValidationRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
const database = client.db('login');
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: Number,
    email: { type: String, required: true, unique: true },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return passwordValidationRegex.test(value); // تحقق من كلمة السر
            },
            message: 'Password must be at least 8 characters long and contain at least one letter, one number, and one special character.',
        },
    },
    createdAt: { type: Date, default: Date.now },
});

// إنشاء نموذج "users" باستخدام المخطط
const User = mongoose.model('users', userSchema);

// تصدير النموذج
module.exports = User;
