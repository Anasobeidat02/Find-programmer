new Vue({
    el: "#app",
    data() {
        return {
            currentCardBackground: Math.floor(Math.random() * 25 + 1), // يولّد خلفية بطاقة عشوائية
            cardName: "", // اسم حامل البطاقة
            cardNumber: "", // رقم البطاقة
            cardMonth: "", // شهر انتهاء الصلاحية
            cardYear: "", // سنة انتهاء الصلاحية
            cardCvv: "", // رمز CVV
            minCardYear: new Date().getFullYear(), // أقل سنة مسموح بها
            amexCardMask: "#### ###### #####", // قناع رقم بطاقة Amex
            otherCardMask: "#### #### #### ####", // قناع رقم بطاقات أخرى
            cardNumberTemp: "", // متغير مؤقت لرقم البطاقة
            isCardFlipped: false, // يحدد ما إذا كانت البطاقة مقلوبة أم لا
            focusElementStyle: null, // ستايل لتحديد عنصر الفوكس
            isInputFocused: false // يحدد ما إذا كان أحد الحقول محددًا حاليًا
        };
    },
    //يتم تشغيله عندما يتم تحميل المكوّن، في هذا المكان يتم تحديد التركيز على حقل رقم البطاقة وتعيين القناع الافتراضي.
    mounted() {
        // يُعيّن القناع الافتراضي لرقم البطاقة ويضع التركيز على حقل رقم البطاقة عند تحميل المكوّن
        this.cardNumberTemp = this.otherCardMask;
        document.getElementById("cardNumber").focus();
    },
    //يعرّف الخصائص المحسوبة والتي يتم حساب قيمها بناءً على البيانات الأخرى في المكون.
    computed: {
        getCardType() {   // يحدد نوع بطاقة الائتمان استنادًا إلى رقم البطاقة
            let number = this.cardNumber;
            let re = new RegExp("^4");
            if (number.match(re) != null) return "visa";

            re = new RegExp("^(34|37)");
            if (number.match(re) != null) return "amex";

            re = new RegExp("^5[1-5]");
            if (number.match(re) != null) return "mastercard";

            re = new RegExp("^6011");
            if (number.match(re) != null) return "discover";

            re = new RegExp('^9792')
            if (number.match(re) != null) return 'troy'

            return "visa"; // default type
        },
        generateCardNumberMask() { // يولّد قناعًا لرقم البطاقة استنادًا إلى نوع البطاقة
            return this.getCardType === "amex" ? this.amexCardMask : this.otherCardMask;
        },
        minCardMonth() {  // يحسب أقل شهر مسموح به استنادًا إلى السنة المحددة
            if (this.cardYear === this.minCardYear) return new Date().getMonth() + 1;
            return 1;
        }
    },
    // ويقوم بتنفيذ الإجراءات المناسبة عند حدوث التغيير.
    watch: {
        cardYear() {             // يتابع تغييرات في سنة البطاقة ويحذف الشهر إذا كان أقل من الشهر الحالي

            if (this.cardMonth < this.minCardMonth) {
                this.cardMonth = "";
            }
        }
    },
    methods: {
        flipCard(status) {             // يقوم بتقليب بطاقة الائتمان

            this.isCardFlipped = status;
        },
        focusInput(e) {             // يقوم بتحديد عنصر الفوكس وتحديث الستايل

            this.isInputFocused = true;
            let targetRef = e.target.dataset.ref;
            let target = this.$refs[targetRef];
            this.focusElementStyle = {
                width: `${target.offsetWidth}px`,
                height: `${target.offsetHeight}px`,
                transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`
            }
        },
        blurInput() {             // يزيل ستايل عنصر الفوكس بعد فقدان التركيز عن الحقل

            let vm = this;
            setTimeout(() => {
                if (!vm.isInputFocused) {
                    vm.focusElementStyle = null;
                }
            }, 300);
            vm.isInputFocused = false;
        }
    }
});

// ============


