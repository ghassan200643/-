'use strict';// استدعاء حجم الخط المحفوظ لتكبير التطبيق
const savedFontSize = localStorage.getItem('yaqeen_font') || '16px';
document.documentElement.style.fontSize = savedFontSize;

const applyTheme = () => {
    const savedBg = localStorage.getItem('yaqeen_bg') || 'default';
    const savedUI = localStorage.getItem('yaqeen_ui') || 'default';
    const savedTextColor = localStorage.getItem('yaqeen_textcolor') || 'text-white'; // 🌟 جلب لون النص
    
    document.body.className = '';
    document.body.style.background = '';
    document.body.setAttribute('data-ui', savedUI);

    // إضافة كلاس لون النص ليتغير كل شيء
    document.body.classList.add(savedTextColor);

    if (savedBg.startsWith('theme-')) {
        document.body.classList.add(savedBg);
    } else {
        if(savedBg === 'sunset') document.body.style.background = 'linear-gradient(135deg,#833ab4,#fd1d1d)';
        else if(savedBg === 'forest') document.body.style.background = 'linear-gradient(135deg,#134e5e,#71b280)';
        else if(savedBg === 'ocean') document.body.style.background = 'linear-gradient(135deg,#005c97,#363795)';
        else if(savedBg === 'desert') document.body.style.background = 'linear-gradient(135deg,#b9935a,#e7c089)';
        else if(savedBg === 'night') document.body.style.background = 'linear-gradient(135deg,#0f0c29,#302b63)';
        else document.body.style.background = 'linear-gradient(135deg,#0f2027,#203a43)';
    }
};
applyTheme();

const dailyBenefits = [
    // --- الفوائد الأساسية ---
    "من قرأ آية الكرسي دبر كل صلاة مكتوبة، لم يمنعه من دخول الجنة إلا أن يموت.",
    "كلمتان خفيفتان على اللسان، ثقيلتان في الميزان: سبحان الله وبحمده، سبحان الله العظيم.",
    "أحب الأعمال إلى الله أدومها وإن قل.",
    
    // --- 30 فائدة وحكمة (الدفعة الأولى) ---
    "الدال على الخير كفاعله.",
    "تبسمك في وجه أخيك لك صدقة.",
    "من لزم الاستغفار جعل الله له من كل هم فرجاً، ومن كل ضيق مخرجاً.",
    "سورة الإخلاص (قل هو الله أحد) تعدل ثلث القرآن.",
    "خيركم من تعلم القرآن وعلمه.",
    "الكلمة الطيبة صدقة.",
    "من حسن إسلام المرء تركه ما لا يعنيه.",
    "إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى.",
    "لا تحقرن من المعروف شيئاً، ولو أن تلقى أخاك بوجه طلق.",
    "أقرب ما يكون العبد من ربه وهو ساجد، فأكثروا الدعاء.",
    "اتقوا النار ولو بشق تمرة.",
    "الطهور شطر الإيمان، والحمد لله تمﻷ الميزان.",
    "لا يرحم الله من لا يرحم الناس.",
    "رضا الرب في رضا الوالدين، وسخط الرب في سخط الوالدين.",
    "تهادوا تحابوا.",
    "ليس الشديد بالصُرَعة، إنما الشديد الذي يملك نفسه عند الغضب.",
    "ما نقصت صدقة من مال، وما زاد الله عبداً بعفو إلا عزاً.",
    "من سلك طريقاً يلتمس فيه علماً، سهل الله له به طريقاً إلى الجنة.",
    "ركعتا الفجر خير من الدنيا وما فيها.",
    "الدعاء هو العبادة.",
    "من صام رمضان إيماناً واحتساباً غفر له ما تقدم من ذنبه.",
    "المسلم من سلم المسلمون من لسانه ويده.",
    "من كان يؤمن بالله واليوم الآخر فليقل خيراً أو ليصمت.",
    "أكمل المؤمنين إيماناً أحسنهم خلقاً.",
    "صنائع المعروف تقي مصارع السوء والآفات.",
    "لا يدخل الجنة من كان في قلبه مثقال ذرة من كبر.",
    "من صمت نجا.",
    "الصلوات الخمس والجمعة إلى الجمعة كفارة لما بينهن ما لم تُغشَ الكبائر.",
    "عجباً لأمر المؤمن إن أمره كله خير، إن أصابته سراء شكر، وإن أصابته ضراء صبر.",
    "لا حول ولا قوة إلا بالله، كنز من كنوز الجنة.",

    // --- 30 حديثاً نبوياً وتعليمياً (الدفعة الجديدة للثواب) ---
    "قال ﷺ: من صلى عليّ واحدة، صلى الله عليه عشر صلوات، وحط عنه عشر خطيئات.",
    "قال ﷺ: من قال سبحان الله وبحمده في يوم مائة مرة، حطت خطاياه وإن كانت مثل زبد البحر.",
    "قال ﷺ: البخيل من ذُكرتُ عنده فلم يُصلِّ عليّ.",
    "قال ﷺ: من قرأ سورة الكهف في يوم الجمعة أضاء له من النور ما بين الجمعتين.",
    "قال ﷺ: ما من عبد مسلم يدعو لأخيه بظهر الغيب، إلا قال الملك: ولك بمثل.",
    "قال ﷺ: أيها الناس، أفشوا السلام، وأطعموا الطعام، وصلوا بالليل والناس نيام، تدخلوا الجنة بسلام.",
    "قال ﷺ: خيركم خيركم لأهله، وأنا خيركم لأهلي.",
    "قال ﷺ: الظلم ظلمات يوم القيامة.",
    "قال ﷺ: إن الصدق يهدي إلى البر، وإن البر يهدي إلى الجنة.",
    "قال ﷺ: لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه.",
    "قال ﷺ: إن الله لا ينظر إلى صوركم وأموالكم، ولكن ينظر إلى قلوبكم وأعمالكم.",
    "قال ﷺ: المؤمن القوي خير وأحب إلى الله من المؤمن الضعيف، وفي كلٍ خير.",
    "يا غلام إني أعلمك كلمات: احفظ الله يحفظك، احفظ الله تجده تجاهك.",
    "إذا سألت فاسأل الله، وإذا استعنت فاستعن بالله.",
    "واعلم أن الأمة لو اجتمعت على أن ينفعوك بشيء لم ينفعوك إلا بشيء قد كتبه الله لك.",
    "قال ﷺ: إن الله رفيق يحب الرفق في الأمر كله.",
    "قال ﷺ: من غشنا فليس منا.",
    "قال ﷺ لرجل طلب الوصية: لا تغضب، ولك الجنة.",
    "قال ﷺ: يسروا ولا تعسروا، وبشروا ولا تنفروا.",
    "قال ﷺ: المرء مع من أحب يوم القيامة.",
    "قال ﷺ: إن عظم الجزاء مع عظم البلاء، وإن الله إذا أحب قوماً ابتلاهم.",
    "قال ﷺ: ما يصيب المسلم من نصب ولا وصب ولا هم ولا حزن إلا كفر الله بها من خطاياه.",
    "كان أكثر دعاء النبي ﷺ: يا مقلب القلوب ثبت قلبي على دينك.",
    "قال ﷺ: من يرد الله به خيراً يفقهه في الدين.",
    "سيد الاستغفار: اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت.",
    "قال ﷺ: إن أثقل شيء في ميزان المؤمن يوم القيامة حُسن الخُلق.",
    "قال ﷺ: لا يحل لمسلم أن يهجر أخاه فوق ثلاث ليالٍ.",
    "قال ﷺ: من أصبح منكم آمناً في سربه، معافى في جسده، عنده قوت يومه، فكأنما حيزت له الدنيا.",
    "قال ﷺ: اقرؤوا القرآن فإنه يأتي يوم القيامة شفيعاً لأصحابه.",
    "قال ﷺ: من بنى مسجداً لله، بنى الله له في الجنة مثله."
];

const DateHelper = {
    ARABIC_DAYS: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    ARABIC_MONTHS: ['كانون الثاني', 'شباط', 'آذار', 'نيسان', 'أيار', 'حزيران', 'تموز', 'آب', 'أيلول', 'تشرين الأول', 'تشرين الثاني', 'كانون الأول'],
    HIJRI_MONTHS: ['محرم', 'صفر', 'ربيع الأول', 'ربيع الثاني', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'],
    
    getGregorianParts(date = new Date()) { return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() }; },
    getArabicDay(date = new Date()) { return this.ARABIC_DAYS[date.getDay()]; },
    
    toHijri(date = new Date()) {
        // 🚀 الحساب الفلكي المغلق لتوقيت بغداد
        const adjustedDate = new Date(date);
        const astromonicalOffset = -1; // معامل التصحيح الفلكي (-1 يوم)
        adjustedDate.setDate(adjustedDate.getDate() + astromonicalOffset);

        const y = adjustedDate.getFullYear(), m = adjustedDate.getMonth() + 1, d = adjustedDate.getDate();
        const a = Math.floor((14 - m) / 12), yr = y + 4800 - a, mr = m + 12 * a - 3;
        const jd = d + Math.floor((153 * mr + 2) / 5) + 365 * yr + Math.floor(yr / 4) - Math.floor(yr / 100) + Math.floor(yr / 400) - 32045;
        const l = jd - 1948440 + 10632, n = Math.floor((l - 1) / 10631), l2 = l - 10631 * n + 354;
        const j = Math.floor((10985 - l2) / 5316) * Math.floor(50 * l2 / 17719) + Math.floor(l2 / 5670) * Math.floor(43 * l2 / 15238);
        const l3 = l2 - Math.floor((30 - j) / 15) * Math.floor(17719 * j / 50) - Math.floor(j / 16) * Math.floor(15238 * j / 43) + 29;
        const hMonth = Math.floor(24 * l3 / 709), hDay = l3 - Math.floor(709 * hMonth / 24);
        
        return { month: hMonth, day: hDay };
    }
};

const PRAYER_NAMES = ['الفجر الأول', 'الفجر الثاني', 'الشروق', 'الظهر', 'العصر', 'المغرب', 'العشاء'];

const PrayerEngine = {
    getTimes(month, day) { return (window.yaqeenDB && window.yaqeenDB[month] && window.yaqeenDB[month][day]) ? window.yaqeenDB[month][day] : null; },
    parseTimeToDate(timeStr, index, refDate = new Date()) {
        let [h, m] = timeStr.split(':').map(Number);
        if (index >= 4 && h < 12) h += 12;
        const d = new Date(refDate); d.setHours(h, m, 0, 0); return d;
    },
    findNextPrayer(times) {
        const now = new Date();
        for (let i = 0; i < times.length; i++) {
            const pDate = this.parseTimeToDate(times[i], i);
            if (pDate > now) return { index: i, name: PRAYER_NAMES[i], time: times[i], date: pDate };
        }
        return null;
    },
    findCurrentPrayer(times) {
        const now = new Date(); let curr = -1;
        for (let i = 0; i < times.length; i++) {
            if (this.parseTimeToDate(times[i], i) <= now) curr = i; else break;
        }
        return curr;
    },
    buildPrayerList(times) { return PRAYER_NAMES.map((name, i) => ({ name, time: times[i], index: i })); }
};

const CountdownTimer = {
    _interval: null, _targetDate: null, _onTick: null, _onComplete: null, _alertPlayed: false,

    start(targetDate, onTick, onComplete) {
        this.stop(); this._targetDate = targetDate; this._onTick = onTick; this._onComplete = onComplete; this._alertPlayed = false;
        this._tick(); this._interval = setInterval(() => this._tick(), 1000);
    },
    stop() { if (this._interval) { clearInterval(this._interval); this._interval = null; } },
    _tick() {
        const now = new Date(); const diff = this._targetDate - now;
        if (diff <= 0) {
            this.stop();
            if(localStorage.getItem('yaqeen_adhan') !== 'false') document.getElementById('audio-adhan')?.play();
            if (this._onComplete) this._onComplete();
            return;
        }
        
        const totalSeconds = Math.floor(diff / 1000);
        if(totalSeconds === 300 && !this._alertPlayed) {
            this._alertPlayed = true;
            if(localStorage.getItem('yaqeen_alert5') !== 'false') document.getElementById('audio-alert5')?.play();
        }

        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;
        const pad = n => String(n).padStart(2, '0');
        if (this._onTick) this._onTick(`${pad(h)} : ${pad(m)} : ${pad(s)}`);
    }
};

const UIRenderer = {
    renderDateBar(targetDate = new Date()) { 
        // 🔥 هذا السطر السحري يمنع الخطأ إذا كنا في صفحة الإعدادات
        if (!document.getElementById('day-name')) return; 
        
        const { month, day } = DateHelper.getGregorianParts(targetDate);
        const hijri = DateHelper.toHijri(targetDate);
        
        document.getElementById('day-name').textContent = DateHelper.getArabicDay(targetDate);
        document.getElementById('greg-date').textContent = `${day} ${DateHelper.ARABIC_MONTHS[month-1]}`;
        document.getElementById('hijri-date').textContent = `${hijri.day} ${DateHelper.HIJRI_MONTHS[hijri.month-1]}`;
    },
    
    renderPrayerList(prayers, currentIndex) {
        const list = document.getElementById('prayer-list'); 
        if (!list) return; // 🔥 حماية إضافية تمنع الأخطاء في الصفحات الأخرى
        
        list.innerHTML = '';
        prayers.forEach(p => {
            const row = document.createElement('div'); row.className = `prayer-row ${p.index === currentIndex ? 'active-prayer' : ''}`;
            row.innerHTML = `<span class="prayer-name">${p.name}</span><span class="prayer-time">${p.time}</span>`;
            list.appendChild(row);
        });
    }
};
// ─── المحرك الأساسي للتطبيق ───
const App = {
    _times: null, _prayers: null, _dayOffset: 0, _eventsBound: false,

    init() {
        const now = new Date();
        UIRenderer.renderDateBar(now);
        const { month, day } = DateHelper.getGregorianParts(now);
        this._times = PrayerEngine.getTimes(month, day);
        
        if (!this._times) {
            document.getElementById('countdown-label').textContent = 'لا توجد بيانات لهذا اليوم';
            document.getElementById('countdown-timer').textContent = '-- : --';
            return;
        }

        this._prayers = PrayerEngine.buildPrayerList(this._times);
        
        const nextP = PrayerEngine.findNextPrayer(this._times);
        UIRenderer.renderPrayerList(this._prayers, nextP ? nextP.index : -1);
        
        this._startCountdown();

        if (!this._eventsBound) {
            document.getElementById('btn-prev-prayer').addEventListener('click', () => this._shiftFocus(-1));
            document.getElementById('btn-next-prayer').addEventListener('click', () => this._shiftFocus(+1));

            const menu = document.getElementById('side-menu'), overlay = document.getElementById('menu-overlay');
            document.getElementById('btn-menu').addEventListener('click', () => { menu.classList.add('open'); overlay.classList.add('visible'); });
            overlay.addEventListener('click', () => { menu.classList.remove('open'); overlay.classList.remove('visible'); });

            const lampModal = document.getElementById('lamp-modal');
            const btnTip = document.getElementById('btn-tip'); 
            
            btnTip.addEventListener('click', () => {
                if(localStorage.getItem('yaqeen_sound') !== 'false') document.getElementById('audio-click')?.play().catch(()=>{});

                const rect = btnTip.getBoundingClientRect();
                const ghost = document.createElement('div');
                ghost.textContent = '💡'; 
                ghost.className = 'flying-lamp-ghost';
                
                ghost.style.left = rect.left + 'px';
                ghost.style.top = rect.top + 'px';
                ghost.style.width = rect.width + 'px';
                ghost.style.height = rect.height + 'px';
                
                document.body.appendChild(ghost);
                btnTip.classList.add('btn-tip-hidden');
                
                const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
                document.getElementById('lamp-text').textContent = dailyBenefits[dayOfYear % dailyBenefits.length];

                requestAnimationFrame(() => { ghost.classList.add('flying'); });
                
                setTimeout(() => {
                    lampModal.classList.add('show');
                    ghost.remove();
                }, 600); 
            });
            
            document.getElementById('close-lamp').addEventListener('click', () => {
                lampModal.classList.remove('show');
                btnTip.classList.remove('btn-tip-hidden');
            });

            document.body.addEventListener('click', (e) => {
                if(e.target.closest('button, .color-btn, .check-btn, .prayer-row') || e.target.closest('a')) {
                    if(localStorage.getItem('yaqeen_sound') !== 'false') document.getElementById('audio-click')?.play().catch(()=>{});
                    if(localStorage.getItem('yaqeen_vib') !== 'false') navigator.vibrate?.(20);
                }
            });

            this._eventsBound = true; 
        }
    },

    _startCountdown() {
        let nextPrayer = PrayerEngine.findNextPrayer(this._times);
        
        if (!nextPrayer) { 
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            const tm = tomorrow.getMonth() + 1;
            const td = tomorrow.getDate();
            
            const tomorrowTimes = PrayerEngine.getTimes(tm, td);
            
            if (tomorrowTimes) {
                const fajrTime = tomorrowTimes[0];
                const fajrDate = PrayerEngine.parseTimeToDate(fajrTime, 0, tomorrow);
                nextPrayer = { name: 'الفجر الأول (غداً)', time: fajrTime, date: fajrDate };
            } else {
                document.getElementById('countdown-label').textContent = 'نهاية اليوم'; 
                document.getElementById('countdown-timer').textContent = '-- : --'; 
                return; 
            }
        }
        
        document.getElementById('countdown-label').textContent = `الوقت المتبقي على ${nextPrayer.name}`;
        CountdownTimer.start(nextPrayer.date, 
            (timerStr) => document.getElementById('countdown-timer').textContent = timerStr, 
            () => { App.init(); }
        );
    },

    _shiftFocus(direction) {
        this._dayOffset += direction;
        const targetDate = new Date(); 
        targetDate.setDate(targetDate.getDate() + this._dayOffset);
        
        const tMonth = targetDate.getMonth() + 1, tDay = targetDate.getDate();
        const times = PrayerEngine.getTimes(tMonth, tDay);
        
        if (!times) return;

        // 🔥 تحديث الشريط العلوي (الهجري والميلادي واليوم) بناءً على اليوم المستعرض
        UIRenderer.renderDateBar(targetDate);
        
        const prayers = PrayerEngine.buildPrayerList(times);
        
        if (this._dayOffset === 0) {
            this._times = times; this._prayers = prayers;
            const nextP = PrayerEngine.findNextPrayer(this._times);
            UIRenderer.renderPrayerList(this._prayers, nextP ? nextP.index : -1);
            this._startCountdown();
        } else {
            CountdownTimer.stop();
            UIRenderer.renderPrayerList(prayers, -1); 
            document.getElementById('countdown-label').textContent = `مواقيت يوم ${DateHelper.getArabicDay(targetDate)}`;
            document.getElementById('countdown-timer').textContent = `${tDay} ${DateHelper.ARABIC_MONTHS[tMonth-1]}`;
        }
    }
};

// 🔥 محرك الصوت الشامل (يعمل في كل الصفحات بدون الحاجة لملفات HTML)
const globalClickAudio = new Audio("https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3");
document.addEventListener('click', (e) => {
    if(e.target.closest('button, a, .color-btn, .ui-btn, .theme-btn, .font-btn, .text-color-btn, .check-btn, .prayer-row, .setting-card, .switch')) {
        if(localStorage.getItem('yaqeen_sound') !== 'false') {
            globalClickAudio.currentTime = 0;
            globalClickAudio.play().catch(()=>{});
        }
    }
});

// 🚀 السطر الأهم: إعطاء أمر البدء لتشغيل التطبيق وجلب المواقيت
document.addEventListener('DOMContentLoaded', () => App.init());


// كود تشغيل زر المشاركة
const shareBtn = document.getElementById('share-app-btn');
if (shareBtn) {
    shareBtn.addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: 'تطبيق اليقين',
                text: 'حمل تطبيق اليقين لمواقيت الصلاة والأذكار، شاركني الأجر!',
                url: window.location.href
            }).catch(console.error);
        } else {
            alert('انسخ هذا الرابط وشاركه مع أصدقائك: ' + window.location.href);
        }
    });
}


// ==========================================
// 🚀 نظام الملاحة السريع (تم مسح اللاغ وإصلاح الرجوع)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const sideMenu = document.getElementById('side-menu');
    const overlay = document.getElementById('menu-overlay');

    // إغلاق القائمة الجانبية فقط عند الرجوع
    document.getElementById('btn-menu')?.addEventListener('click', () => {
        history.pushState({ menuOpen: true }, '', '#menu');
    });
    window.addEventListener('popstate', (e) => {
        if (sideMenu && sideMenu.classList.contains('open')) {
            sideMenu.classList.remove('open');
            if (overlay) overlay.classList.remove('visible');
        }
    });
    
});

// ==========================================
// 🚀 إصلاح الشاشة السوداء عند زر الرجوع (BFCache Fix)
// ==========================================
window.addEventListener('pageshow', function (event) {
    // إجبار الشاشة على الظهور عند العودة من صفحة أخرى
    document.body.style.opacity = '1';
    document.body.style.transform = 'none';
    document.body.classList.remove('slide-out');
});